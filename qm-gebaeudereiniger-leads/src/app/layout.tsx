import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "DIN 9001 & DIN 14001 Zertifizierung für Gebäudereiniger | Praxisnahes QM/UM",
  description: "Erfüllen Sie Ausschreibungsanforderungen als Gebäudereiniger mit einer Zertifizierung nach DIN 9001 (Qualität) & DIN 14001 (Umwelt). Wir bieten praxisnahe QM/UM-Beratung.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable}`}>
      <body className="font-sans text-gray-800 antialiased bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-16 pt-24 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
