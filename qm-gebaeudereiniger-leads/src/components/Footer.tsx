import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {currentYear} Heinz Consulting | Alle Rechte vorbehalten.
        </p>
        <div className="mt-4 space-x-4">
          {/* Platzhalter für Impressum & Datenschutz - Deutlicher als Links */}
          <Link href="/impressum" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200">Impressum</Link>
          <span className="text-gray-600">|</span>
          <Link href="/datenschutz" className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 