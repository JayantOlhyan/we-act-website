import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/verification-kyc",
    "/merchant-onboarding",
    "/field-it-support",
    "/company-profile",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
