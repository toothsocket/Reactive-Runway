import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Reactive Runway | Custom Fashion Commissions",
  description: "Reactive Fashion Designed by Isabel DiFabio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} layout-container`}>
        <CustomCursor />
        <header className="site-header">
          <Link href="/" className="site-logo font-serif" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src="/logo.png" alt="Reactive Runway Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
            Reactive Runway
          </Link>
          <nav className="site-nav">
            <Link href="/portfolio" className="nav-link">Portfolio</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/commission" className="nav-link">Commission</Link>
          </nav>
        </header>
        <main className="main-content fade-in">
          {children}
        </main>
        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Reactive Runway. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
