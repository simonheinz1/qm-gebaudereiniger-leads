import React from 'react';
import Link from 'next/link';
// Importiere Platzhalter-Icons (ersetze diese durch echte Icons, z.B. von react-icons)
// import { FaCheckCircle, FaChartLine, FaUsers } from 'react-icons/fa'; 

// Platzhalter-Komponenten für Icons
const FaCheckCircle = () => <span className="text-blue-500">[ICON]</span>;
const FaChartLine = () => <span className="text-green-500">[ICON]</span>;


export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24"> {/* Mehr Abstand zwischen Sektionen */}
      {/* Hero Section - Mehr Padding, größerer Textabstand */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-blue-50 via-white to-green-50 rounded-xl shadow-inner">
        {/* Optional: Hintergrund-Pattern */} 
        {/* <div className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-5"></div> */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Zertifizierung nach DIN 9001 & DIN 14001: QM/UM für Gebäudereiniger
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto px-4">
            Gewinnen Sie mehr Aufträge durch erfüllte Ausschreibungsanforderungen (oft DIN 9001 & DIN 14001 gefordert). Optimieren Sie Abläufe mit maßgeschneiderten Qualitäts- (QM) und Umweltmanagement-Systemen (UM). Steigern Sie Kundenzufriedenheit und Mitarbeitermotivation.
          </p>
          <Link href="/kontakt"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>

      {/* Problem / Lösung & Links zu Landing Pages - Mehr Padding, Buttons statt Links, Icons */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Fokus Ausschreibungen */}
        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
          <FaCheckCircle /> {/* Icon hinzugefügt */}
          <h2 className="text-2xl font-semibold text-blue-700 my-4">DIN 9001 & DIN 14001 für Ausschreibungen?</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Erfüllen Sie Qualitäts- (DIN 9001) und Umweltanforderungen (DIN 14001) in Ausschreibungen mit den anerkannten Zertifikaten – oft einfacher und kosteneffizienter als Sie denken.
          </p>
          <Link href="/zertifizierung-ausschreibung"
                className="mt-auto inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-blue-200 transition-colors duration-200">
            Mehr erfahren
          </Link>
        </div>

        {/* Fokus Allgemeine Vorteile */}
        <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center text-center">
          <FaChartLine /> {/* Icon hinzugefügt */}
          <h2 className="text-2xl font-semibold text-green-700 my-4">Mehr als nur Zertifikate: Effizienz & Qualität steigern</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Ein nach DIN 9001 und DIN 14001 aufgebautes System optimiert Ihre Betriebsabläufe, motiviert Ihr Team und steigert nachhaltig die Kundenzufriedenheit – weit über die reine Zertifizierung hinaus.
          </p>
          <Link href="/qualitaetsnachweis-gebaeudereinigung"
                className="mt-auto inline-block bg-green-100 text-green-700 px-6 py-2 rounded-md font-semibold hover:bg-green-200 transition-colors duration-200">
            Vorteile entdecken
          </Link>
        </div>
      </section>

      {/* Kurzer Abschnitt über den Ansatz - Mehr Abstand, klarere Trennung */}
      <section className="text-center py-16 border-t border-gray-200 mt-16 md:mt-24">
         {/* Optional: Icon <FaUsers /> */}
         <h2 className="text-3xl font-bold text-gray-800 mb-4">Ihr Partner für praxisnahe Lösungen</h2>
         <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto px-4">
             Wir verstehen die Gebäudereinigungsbranche. Deshalb bieten wir individuelle Unterstützung, die Sie wirklich weiterbringt – ohne Standard-Bürokratie.
         </p>
         <Link href="/ueber-uns"
              className="text-blue-600 font-semibold hover:underline text-lg">
            Erfahren Sie mehr über uns & unser Vorgehen &raquo;
          </Link>
      </section>

    </div>
  );
}
