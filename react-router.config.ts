import type { Config } from "@react-router/dev/config";

export default {
  ssr: true,
  async prerender() {
    return [
      "/",
      "/about",
      "/services",
      "/services/verification",
      "/services/due-diligence",
      "/services/audits",
      "/services/it-support",
      "/industries",
      "/industries/bfsi",
      "/industries/insurance",
      "/industries/nbfc",
      "/industries/telecom",
      "/industries/pharma",
      "/industries/payments",
      "/why-weact",
      "/clients",
      "/security-compliance",
      "/coverage",
      "/media",
      "/blog",
      "/contact",
      "/privacy-policy",
      "/terms-of-use",
    ];
  },
} satisfies Config;
