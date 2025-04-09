import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-3 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200">
          QM Gebäudereiniger
        </Link>
        <ul className="flex items-center space-x-6">
          <li><Link href="/ueber-uns" className="text-base hover:text-blue-200 transition-colors duration-200">Über Uns</Link></li>
          <li><Link href="/leistungen" className="text-base hover:text-blue-200 transition-colors duration-200">Leistungen</Link></li>
          <li><Link href="/fallstudien" className="text-base hover:text-blue-200 transition-colors duration-200">Fallstudien</Link></li>
          {/* Landing Pages evtl. nicht direkt in Hauptnavi? Eher über CTAs */}
          {/* <li><Link href="/zertifizierung-ausschreibung" className="hover:text-blue-200">Für Ausschreibungen</Link></li> */}
          {/* <li><Link href="/qualitaetsnachweis-gebaeudereinigung" className="hover:text-blue-200">Praxis-QM</Link></li> */}
          <li><Link href="/blog" className="text-base hover:text-blue-200 transition-colors duration-200">Ratgeber</Link></li>
          <li>
            <Link href="/kontakt" 
                  className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 font-semibold transition-colors duration-200 shadow hover:shadow-lg text-sm">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 