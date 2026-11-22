export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pineforge Digital LLC",
  url: "https://pineforge.digital",
  logo: "https://pineforge.digital/images/Brand_Logo_white.png",
  image: "https://pineforge.digital/images/logo-social.jpg",
  description:
    "Custom website design, web applications, internal dashboards, and API integrations for small and mid-sized businesses in Southeastern Wisconsin.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressRegion: "WI",
    postalCode: "53104",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Kenosha" },
    { "@type": "City", name: "Racine" },
    { "@type": "City", name: "Milwaukee" },
    { "@type": "State", "name": "Wisconsin" },
  ],
  telephone: "+1-262-234-1027",
  email: "admin@pineforge.digital",
  sameAs: ["https://share.google/Pp6TIz4FkOKFzQPUA"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
} as const;
