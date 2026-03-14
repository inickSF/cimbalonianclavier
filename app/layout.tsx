import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

const navigation = [
  { href: "/", label: "Home" },
  { href: "/instruments", label: "Instruments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const metadata: Metadata = {
  metadataBase: new URL("https://cimbalonianclavier.com"),
  title: {
    default: "Cimbalonian Clavier",
    template: "%s | Cimbalonian Clavier"
  },
  description:
    "Elegant early keyboard instrument rental in Corfu, Greece, offering harpsichords, spinets, clavichords, and refined support for concerts, festivals, and private residences.",
  openGraph: {
    title: "Cimbalonian Clavier",
    description:
      "Early keyboard instrument rental in Corfu, Greece, with a dark classical presentation and refined service for performances, recordings, and cultural events.",
    url: "https://cimbalonianclavier.com",
    siteName: "Cimbalonian Clavier",
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable}`}>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="brand" aria-label="Cimbalonian Clavier home">
              <span className="brand-mark">CC</span>
              <span>
                <strong>Cimbalonian Clavier</strong>
                <em>Corfu, Greece</em>
              </span>
            </Link>
            <nav className="site-nav" aria-label="Primary navigation">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div>
              <p className="footer-title">Cimbalonian Clavier</p>
              <p>Early keyboard instrument rental for Corfu concerts, recordings, and private salons.</p>
            </div>
            <div>
              <p className="footer-title">Enquiries</p>
              <p>hello@cimbalonianclavier.com</p>
              <p>Corfu, Ionian Islands, Greece</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
