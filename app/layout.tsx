import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpotlightEffects from "@/components/SpotlightEffects";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pineforge.digital"),
  title: {
    default: "Website Designer in Kenosha, WI | Pineforge Digital",
    template: "%s | Pineforge Digital",
  },
  description:
    "Pineforge Digital is Kenosha's premier website designer and custom software development studio. We build websites that bring in local customers.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon_optimized.png", sizes: "192x192", type: "image/png" },
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
        <Navbar />
        {children}
        <Footer />
        <SpotlightEffects />
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
