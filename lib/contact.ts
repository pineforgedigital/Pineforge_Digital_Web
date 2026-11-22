export interface ContactServiceOption {
  slug: string;
  label: string;
}

export const CONTACT_SERVICES: readonly ContactServiceOption[] = [
  { slug: "website", label: "Custom Website Design & Build" },
  { slug: "ecommerce", label: "E-Commerce & Payment Integration" },
  { slug: "app", label: "Custom Web Application" },
  { slug: "dashboard", label: "Dashboard Development & Internal Tools" },
  { slug: "automation", label: "API Integration & Business Automation" },
  { slug: "other", label: "Other / Technical Consultation" },
] as const;

const normalize = (value: string): string =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Resolves a `?service=` query parameter to an exact allowlisted service label.
 */
export function matchServiceFromParam(param: string | null): string {
  if (!param) return "";
  const normalizedParam = normalize(param.trim());
  if (!normalizedParam) return "";

  const bySlug = CONTACT_SERVICES.find(
    (item) => normalize(item.slug) === normalizedParam
  );
  if (bySlug) return bySlug.label;

  const byLabel = CONTACT_SERVICES.find((item) =>
    normalize(item.label).includes(normalizedParam)
  );
  return byLabel ? byLabel.label : "";
}
