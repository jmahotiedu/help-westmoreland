import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationStructuredData } from "@/components/seo/StructuredData";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import SkipToContent from "@/components/accessibility/SkipToContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://helpwestmoreland.org";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Help Westmoreland | Disaster Relief for Jamaica",
    template: "%s | Help Westmoreland",
  },
  description:
    "Supporting families in Westmoreland, Jamaica after Hurricane Melissa. Donate, volunteer, or partner to rebuild lives and restore hope.",
  keywords: [
    "Jamaica",
    "disaster relief",
    "Hurricane Melissa",
    "Westmoreland",
    "charity",
    "donate",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Help Westmoreland",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Help Westmoreland - Disaster Relief",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@helpwestmoreland",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased min-w-0 overflow-x-hidden">
        <OrganizationStructuredData />
        <GoogleAnalytics />
        <SkipToContent />
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
