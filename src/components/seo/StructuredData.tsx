import Script from "next/script";

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "NGO" | "Organization";
  name: string;
  url: string;
  logo?: string;
  description: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": "ContactPoint";
    email: string;
    contactType: string;
  };
}

interface DonateActionSchema {
  "@context": "https://schema.org";
  "@type": "DonateAction";
  recipient: {
    "@type": "NGO";
    name: string;
  };
  url: string;
}

export function OrganizationStructuredData() {
  const schema: OrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Help Westmoreland",
    url: "https://helpwestmoreland.org",
    logo: "https://helpwestmoreland.org/images/logo.png",
    description:
      "Help Westmoreland provides disaster relief and rebuilding support to families in Westmoreland, Jamaica affected by Hurricane Melissa.",
    sameAs: [
      "https://instagram.com/helpwestmoreland",
      "https://facebook.com/helpwestmoreland",
      "https://tiktok.com/@helpwestmoreland",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "helpwestmoreland@gmail.com",
      contactType: "customer service",
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function DonateActionStructuredData() {
  const schema: DonateActionSchema = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    recipient: {
      "@type": "NGO",
      name: "Help Westmoreland",
    },
    url: "https://helpwestmoreland.org/donate",
  };

  return (
    <Script
      id="donate-action-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbStructuredData({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://helpwestmoreland.org${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
