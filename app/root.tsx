import { useState, useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./styles/global.css";
import "./styles/components/button.css";
import "./styles/components/card.css";
import "./styles/components/whatsapp.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [connectionStatus, setConnectionStatus] = useState<"online" | "offline" | "restored" | "hidden">("hidden");

  useEffect(() => {
    // Register Service Worker
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((reg) => {
            console.log("Service Worker registered successfully with scope: ", reg.scope);
          })
          .catch((err) => {
            console.error("Service Worker registration failed: ", err);
          });
      });
    }

    // Connection Events
    if (typeof window !== "undefined") {
      if (!navigator.onLine) {
        setConnectionStatus("offline");
      }

      const handleOnline = () => {
        setConnectionStatus((prev) => {
          if (prev === "offline") {
            setTimeout(() => {
              setConnectionStatus("hidden");
            }, 3000);
            return "restored";
          }
          return "hidden";
        });
      };

      const handleOffline = () => {
        setConnectionStatus("offline");
      };

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F57C20" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="WeAct" />
        <Meta />
        <Links />
        <style dangerouslySetInnerHTML={{ __html: `
          .connection-toast {
            position: fixed;
            bottom: 24px;
            right: 24px;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(26, 26, 46, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 14px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
            transform: translateY(100px);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 14px;
            font-weight: 500;
            max-width: 380px;
          }
          .connection-toast--visible {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          .connection-toast--offline {
            border: 1px solid rgba(239, 68, 68, 0.35);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 0 15px rgba(239, 68, 68, 0.15);
            color: #FCA5A5;
          }
          .connection-toast--restored {
            border: 1px solid rgba(16, 185, 129, 0.35);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 0 15px rgba(16, 185, 129, 0.15);
            color: #A7F3D0;
          }
          .connection-toast__dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            flex-shrink: 0;
          }
          .connection-toast--offline .connection-toast__dot {
            background-color: #EF4444;
            box-shadow: 0 0 8px #EF4444;
            animation: pulse-red-toast 2s infinite;
          }
          .connection-toast--restored .connection-toast__dot {
            background-color: #10B981;
            box-shadow: 0 0 8px #10B981;
          }
          @keyframes pulse-red-toast {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.2); opacity: 0.5; }
            100% { transform: scale(1); opacity: 1; }
          }
          @media (max-width: 600px) {
            .connection-toast {
              left: 20px;
              right: 20px;
              bottom: 20px;
              max-width: none;
              justify-content: center;
            }
          }
        `}} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        
        {/* Connection Status Toast */}
        <div className={`connection-toast ${connectionStatus !== "hidden" ? "connection-toast--visible" : ""} ${connectionStatus === "offline" ? "connection-toast--offline" : connectionStatus === "restored" ? "connection-toast--restored" : ""}`}>
          <span className="connection-toast__dot" />
          <span>
            {connectionStatus === "offline" && "You're offline. Some features may be unavailable."}
            {connectionStatus === "restored" && "You're back online."}
          </span>
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main style={{ padding: "4rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#F57C20" }}>{message}</h1>
      <p style={{ fontSize: "1.125rem", color: "#6B7280", marginBottom: "1.5rem" }}>{details}</p>
      <a href="/" style={{ color: "#F57C20", fontWeight: 600, textDecoration: "underline" }}>
        ← Back to Home
      </a>
      {stack && (
        <pre style={{ marginTop: "2rem", padding: "1rem", background: "#F3F4F6", borderRadius: "8px", overflowX: "auto", fontSize: "0.875rem" }}>
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
