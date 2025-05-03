import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="QM Gebäudereiniger Logo"
                width={80}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Praxisnahes QM/UM für Gebäudereiniger - Ihr Partner für erfolgreiche Ausschreibungen und nachweisbare Qualität.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors duration-200">Startseite</Link></li>
              <li><Link href="/leistungen" className="text-sm hover:text-white transition-colors duration-200">Leistungen</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-white transition-colors duration-200">Ratgeber</Link></li>
              <li><Link href="/ueber-uns" className="text-sm hover:text-white transition-colors duration-200">Über Uns</Link></li>
              <li><Link href="/kontakt" className="text-sm hover:text-white transition-colors duration-200">Kontakt</Link></li>
            </ul>
          </div>

          {/* Themenbereiche */}
          <div>
            <h4 className="text-white font-semibold mb-4">Themen</h4>
            <ul className="space-y-2">
              <li><Link href="/din-9001-gebaeudereiniger" className="text-sm hover:text-white transition-colors duration-200">DIN 9001</Link></li>
              <li><Link href="/din-14001-gebaeudereiniger" className="text-sm hover:text-white transition-colors duration-200">DIN 14001</Link></li>
              <li><Link href="/kmu-qm-gebaeudereiniger" className="text-sm hover:text-white transition-colors duration-200">QM für KMU</Link></li>
              <li><Link href="/krankenhausreinigung-qm" className="text-sm hover:text-white transition-colors duration-200">Klinikreinigung</Link></li>
              <li><Link href="/lebensmittelindustrie-gastronomie-reinigung" className="text-sm hover:text-white transition-colors duration-200">Lebensmittel & Gastro</Link></li>
            </ul>
          </div>

          {/* Kontakt und Rechtliches */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt & Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/kontakt" className="text-sm hover:text-white transition-colors duration-200">Kontakt aufnehmen</Link></li>
              <li><Link href="/impressum" className="text-sm hover:text-white transition-colors duration-200">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-sm hover:text-white transition-colors duration-200">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Heinz Consulting | Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 