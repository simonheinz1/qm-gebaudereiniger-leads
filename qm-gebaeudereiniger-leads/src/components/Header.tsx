"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="QM Gebäudereiniger Logo"
              width={120}
              height={120}
              className="h-24 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/ueber-uns" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Über Uns</Link>
            <Link href="/leistungen" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Leistungen</Link>
            <Link href="/werkzeuge" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Werkzeuge</Link>
            <Link href="/fallstudien" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Fallstudien</Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">Ratgeber</Link>
            <Link href="/kontakt" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow text-sm">
              Kontakt
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label="Menü öffnen/schließen"
            aria-expanded={isMobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> // Close icon
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4 border-t border-gray-200`}>
          <ul className="flex flex-col space-y-3 pt-4">
            <li><Link href="/ueber-uns" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded">Über Uns</Link></li>
            <li><Link href="/leistungen" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded">Leistungen</Link></li>
            <li><Link href="/werkzeuge" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded">Werkzeuge</Link></li>
            <li><Link href="/fallstudien" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded">Fallstudien</Link></li>
            <li><Link href="/blog" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 px-2 py-1 rounded">Ratgeber</Link></li>
            <li>
              <Link href="/kontakt" 
                    className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow mt-2">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 