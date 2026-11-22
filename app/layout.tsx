import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightEffects from "@/components/SpotlightEffects";
import CookieBanner from "@/components/CookieBanner";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pineforge.digital"),
  title: {
    default:
      "Website Designer & Custom Software in Kenosha, WI | Pineforge Digital",
    template: "%s | Pineforge Digital",
  },
  description:
    "Pineforge Digital LLC builds custom websites, web applications, internal dashboards, and API integrations for businesses in Kenosha and Southeastern Wisconsin.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/images/favicon_optimized.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },
  openGraph: {
    siteName: "Pineforge Digital",
    type: "website",
    locale: "en_US",
    url: "https://pineforge.digital",
    images: [
      {
        url: "/images/logo-social.jpg",
        width: 1200,
        height: 630,
        alt: "Pineforge Digital LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo-social.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
        <SpotlightEffects />
        <CookieBanner />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
