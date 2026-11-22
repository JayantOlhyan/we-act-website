export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  landing_page: string;
  referrer: string;
}

const STORAGE_KEY = "weact_first_touch_utm";

const EMPTY_ATTRIBUTION: AttributionData = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  landing_page: "",
  referrer: "",
};

/**
 * Captures first-touch UTM parameters, landing page, and referrer into sessionStorage.
 * Wrapped in try/catch so restricted browsers never break page rendering.
 */
export function captureFirstTouchAttribution(): AttributionData {
  if (typeof window === "undefined") {
    return EMPTY_ATTRIBUTION;
  }

  try {
    const existingRaw = window.sessionStorage.getItem(STORAGE_KEY);
    if (existingRaw) {
      const parsed = JSON.parse(existingRaw) as Partial<AttributionData>;
      return {
        utm_source: parsed.utm_source ?? "",
        utm_medium: parsed.utm_medium ?? "",
        utm_campaign: parsed.utm_campaign ?? "",
        utm_content: parsed.utm_content ?? "",
        landing_page: parsed.landing_page ?? "",
        referrer: parsed.referrer ?? "",
      };
    }

    const params = new URLSearchParams(window.location.search);
    const firstTouch: AttributionData = {
      utm_source: params.get("utm_source") ?? "",
      utm_medium: params.get("utm_medium") ?? "",
      utm_campaign: params.get("utm_campaign") ?? "",
      utm_content: params.get("utm_content") ?? "",
      landing_page: `${window.location.pathname}${window.location.search}`,
      referrer: document.referrer || "",
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(firstTouch));
    return firstTouch;
  } catch {
    return EMPTY_ATTRIBUTION;
  }
}

export function getFirstTouchAttribution(): AttributionData {
  return captureFirstTouchAttribution();
}
