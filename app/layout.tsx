import type { Metadata } from "next";
import { Playfair_Display, Lora, Montserrat } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — The Beauty & Power of Dance`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Misty Copeland",
    "Misty Copeland Foundation",
    "ballet",
    "dance education",
    "diversity in ballet",
    "BE BOLD",
    "arts nonprofit",
    "donate ballet",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — The Beauty & Power of Dance`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: "/video/programs-poster.jpg", width: 1600, height: 900, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/video/programs-poster.jpg"],
  },
  icons: {
    icon: "/logo/icon.png",
    apple: "/logo/icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo/logo-horizontal.png`,
    description: SITE.description,
    founder: { "@type": "Person", name: "Misty Copeland" },
    foundingDate: "2021",
    sameAs: [
      "https://www.instagram.com/mistycopelandfdn",
      "https://www.facebook.com/profile.php?id=100095322892478",
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <div className="film-grain" aria-hidden="true" />
      </body>
    </html>
  );
}
