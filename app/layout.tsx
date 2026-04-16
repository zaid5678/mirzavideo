import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mirzavideo — Videography, Photography & Cinematography | Birmingham, UK",
  description:
    "Birmingham-based videography, photography and cinematography studio. Available for weddings, events, brands and creative projects across the United Kingdom.",
  openGraph: {
    title: "Mirzavideo — Videography, Photography & Cinematography | Birmingham, UK",
    description:
      "Birmingham-based videography, photography and cinematography studio. Available for weddings, events, brands and creative projects across the United Kingdom.",
    siteName: "Mirzavideo",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${instrumentSerif.variable} ${inter.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
