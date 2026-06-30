import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  // All pages share a layout with header/footer
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    route("services/verification", "routes/services.verification.tsx"),
    route("services/due-diligence", "routes/services.due-diligence.tsx"),
    route("services/audits", "routes/services.audits.tsx"),
    route("services/it-support", "routes/services.it-support.tsx"),
    route("industries", "routes/industries.tsx"),
    route("industries/bfsi", "routes/industries.bfsi.tsx"),
    route("industries/insurance", "routes/industries.insurance.tsx"),
    route("industries/nbfc", "routes/industries.nbfc.tsx"),
    route("industries/telecom", "routes/industries.telecom.tsx"),
    route("industries/pharma", "routes/industries.pharma.tsx"),
    route("industries/payments", "routes/industries.payments.tsx"),
    route("why-weact", "routes/why-weact.tsx"),
    route("clients", "routes/clients.tsx"),
    route("security-compliance", "routes/security-compliance.tsx"),
    route("coverage", "routes/coverage.tsx"),
    route("media", "routes/media.tsx"),
    route("blog", "routes/blog.tsx"),
    route("contact", "routes/contact.tsx"),
    route("privacy-policy", "routes/privacy-policy.tsx"),
    route("terms-of-use", "routes/terms-of-use.tsx"),
  ]),
] satisfies RouteConfig;
