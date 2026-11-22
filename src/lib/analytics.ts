declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    lintrk?: (action: string, data?: Record<string, unknown>) => void;
  }
}

export type AnalyticsEventName =
  | "form_submit"
  | "profile_download"
  | "whatsapp_click"
  | "call_click";

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, string | undefined> = {}
): void {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params);
    }

    if (typeof window.lintrk === "function") {
      window.lintrk("track", { event_name: eventName, ...params });
    }
  } catch {
    // Analytics must never block user interactions
  }
}
