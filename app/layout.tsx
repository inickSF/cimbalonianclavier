import type { Metadata } from "next";
import Image from "next/image";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Link from "next/link";
import { SiteNav } from "../components/site-nav";
import goldenLogo from "../Images/Golden_Logo_Trans.png";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
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
    "Elegant early keyboard instrument rental based primarily in Greece, offering harpsichord and fortepiano service for concerts, festivals, recordings, and private residences across Southern Europe.",
  openGraph: {
    title: "Cimbalonian Clavier",
    description:
      "Harpsichord and fortepiano rental based primarily in Greece, with selected service across Italy, Bulgaria, Hungary, Austria, Germany, and France for performances, recordings, and cultural events.",
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
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link href="/" className="site-logo" aria-label="Cimbalonian Clavier home">
              <Image
                src={goldenLogo}
                alt="Cimbalonian Clavier"
                priority
                className="site-logo-image"
              />
            </Link>
            <SiteNav items={navigation} />
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div>
              <p className="footer-title">Cimbalonian Clavier</p>
              <p>Early keyboard instrument rental for concerts, recordings, festivals, and private salons across Southern Europe.</p>
            </div>
            <div>
              <p className="footer-title">Enquiries</p>
              <p>hello@cimbalonianclavier.com</p>
              <p>Based in Greece, serving Italy, Bulgaria, Hungary, Austria, Germany, and France.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
