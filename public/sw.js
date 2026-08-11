// WeAct Global Solutions — Service Worker
// Version: v1.0.0

const CACHE_VERSION = 'v1';
const CACHE_PREFIX = 'weact';

const CACHE_NAMES = {
  offline: `${CACHE_PREFIX}-offline-${CACHE_VERSION}`,
  static: `${CACHE_PREFIX}-static-${CACHE_VERSION}`,
  pages: `${CACHE_PREFIX}-pages-${CACHE_VERSION}`
};

// Core assets required for basic offline functioning
const PRECACHE_ASSETS = [
  '/offline.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/favicon.ico',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable-192x192.png',
  '/icons/icon-maskable-512x512.png'
];

// Perform install precaching
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAMES.offline).then((cache) => {
      console.log('[Service Worker] Pre-caching core offline assets');
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Clean up old caches on activation
self.addEventListener('activate', (event) => {
  const allowedCaches = Object.values(CACHE_NAMES);
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith(CACHE_PREFIX) && !allowedCaches.includes(cacheName)) {
            console.log(`[Service Worker] Deleting obsolete cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Helper to check if a request is for an admin or API route
function isBypassed(url) {
  const pathname = url.pathname;
  return (
    pathname.startsWith('/api/') || 
    pathname.startsWith('/admin/') || 
    pathname.includes('netlify') || 
    url.hostname.includes('webhook')
  );
}

// Fetch interception and caching strategies
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);

  // Bypass API, admin, and netlify functions
  if (isBypassed(url)) {
    return;
  }

  // 1. Navigation Requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // If response is valid, clone it and save to pages cache
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAMES.pages).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed (offline). Try serving from cached pages.
          return caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // If page is not cached, return the branded offline page.
            return caches.match('/offline.html');
          });
        })
    );
    return;
  }

  // 2. Static Assets (Hashed files inside /assets/, icons, and fonts)
  const isStaticAsset = 
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.includes('/fonts/') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js');

  if (isStaticAsset) {
    // For hashed Vite assets in /assets/, they are immutable, so use Cache First.
    // For general static files (images, icons), use Stale-While-Revalidate to keep updated.
    const isImmutable = url.pathname.startsWith('/assets/');

    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          if (isImmutable) {
            // Cache First for immutable assets
            return cachedResponse;
          }
          // Stale-While-Revalidate: serve cached, fetch updated in background
          fetch(event.request)
            .then((networkResponse) => {
              if (networkResponse.status === 200) {
                caches.open(CACHE_NAMES.static).then((cache) => {
                  cache.put(event.request, networkResponse);
                });
              }
            })
            .catch(() => {
              // Ignore background fetch failures when offline
            });
          return cachedResponse;
        }

        // Cache miss: fetch and save to static cache
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse.status === 200 || networkResponse.status === 0) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAMES.static).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
