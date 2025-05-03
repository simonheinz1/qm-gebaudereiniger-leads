import React from 'react';
import Link from 'next/link';

// SVG Icons (Beispiele - ersetzen durch passende Icons)
const CheckBadgeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-blue-500">
      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.007a.75.75 0 10-1.06-1.06l-3.72 3.72-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z" clipRule="evenodd" />
    </svg>
);
const ChartBarIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-green-500">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 9.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm3.75.75a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008zm2.25-.75a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm3.75.75a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008zM8.25 9a.75.75 0 00-.75.75v6c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75H8.25zm3.75 0a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-.008zm3.75 0a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-.008zm3 0a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-1.5a.75.75 0 00-.75-.75h-.008z" clipRule="evenodd" />
    </svg>
);
const UserCircleIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-gray-400">
      <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 016.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-6.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
    </svg>
);
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block ml-1">
        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
    </svg>
);

export default function Home() {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section */}
      <section className="relative text-center pt-24 pb-20 md:pt-32 md:pb-28 bg-blue-50 overflow-hidden">
          {/* Optional: Add subtle background shapes/elements if needed */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            <span className="text-blue-600">Mehr Aufträge gewinnen</span> als Gebäudereiniger – mit System!
          </h1>
          <p className="text-lg md:text-xl text-indigo-700 font-semibold mb-6">
            Praxisnahes QM/UM vom erfahrenen Auditor (Simon Heinz), tätig für NormCert: Ihr Schlüssel zu Ausschreibungen & anspruchsvollen Kunden.
          </p>
          <p className="text-md md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schluss mit verlorenen Ausschreibungen wegen fehlender Nachweise! Erfüllen Sie Anforderungen nach DIN 9001 & 14001 effizient und überzeugen Sie mit nachweisbarer Qualität – ohne Bürokratie-Ballast.
          </p>
          <Link href="/leistungen"
                className="inline-flex items-center bg-blue-600 text-white px-10 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition duration-300 shadow-md">
            Jetzt Auftragschancen erhöhen!
            <ArrowRightIcon />
          </Link>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="grid md:grid-cols-2 gap-10 lg:gap-16 px-4 container mx-auto">
        {/* Fokus Ausschreibungen */}
        <div className="flex flex-col p-8 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex justify-center mb-5">
              <CheckBadgeIcon />
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">Nie wieder an Nachweisen scheitern</h2>
          <p className="text-gray-600 mb-8 flex-grow text-center">
            Fehlende QM/UM-Nachweise sind oft das K.O.-Kriterium bei attraktiven Vergaben. Unser effizienter Ansatz hilft Ihnen, die Hürden nach DIN 9001/14001 zu meistern und Ihre Zuschlagschancen signifikant zu verbessern.
          </p>
          <div className="text-center mt-auto">
             <Link href="/zertifizierung-ausschreibung"
                    className="inline-block bg-blue-100 text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-blue-200 transition-colors duration-200 shadow hover:shadow-md">
                Strategie für Ausschreibungen
             </Link>
          </div>
        </div>

        {/* Fokus Allgemeine Vorteile / Profitabilität */}
        <div className="flex flex-col p-8 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
           <div className="flex justify-center mb-5">
               <ChartBarIcon />
           </div>
           <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">Effizienter arbeiten, profitabler sein</h2>
          <p className="text-gray-600 mb-8 flex-grow text-center">
            Ein gutes QM/UM-System ist mehr als nur ein Nachweis: Es optimiert Abläufe, reduziert Fehlerkosten und steigert die Effizienz. Das Ergebnis: Bessere Margen und mehr Wettbewerbsfähigkeit.
          </p>
           <div className="text-center mt-auto">
              <Link href="/qualitaetsnachweis-gebaeudereinigung"
                    className="inline-block bg-green-100 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors duration-200 shadow hover:shadow-md">
                Qualität & Effizienz steigern
              </Link>
          </div>
        </div>
      </section>

      {/* Neuer Teaser für den Selbstcheck */}
      <section className="container mx-auto px-4 text-center">
        <div className="bg-sky-50 p-8 rounded-xl border border-sky-200 shadow-md">
            <h3 className="text-2xl font-bold text-sky-800 mb-3">Wie fit ist Ihr Betrieb für DIN 9001 & 14001?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Machen Sie unseren kostenlosen, praxisnahen Selbstcheck und erhalten Sie eine erste Einschätzung – schnell und unkompliziert.
            </p>
            <Link href="/werkzeuge/qm-um-selbstcheck"
                    className="inline-flex items-center bg-sky-600 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-sky-700 transition duration-300 shadow hover:shadow-md">
                Zum QM/UM-Selbstcheck
                {/* Ggf. passendes Icon hinzufügen */}
            </Link>
        </div>
      </section>

      {/* USP Section */}
      <section className="text-center py-16 md:py-20 bg-white rounded-xl mt-16 md:mt-24 border border-gray-200 px-6">
         <div className="flex justify-center mb-6">
             <UserCircleIcon />
         </div>
         <h2 className="text-3xl font-bold text-gray-800 mb-4">Ihr Vorteil: Praxis-Wissen für Ihren Erfolg</h2>
         <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
             Mit meiner Erfahrung als Auditor, tätig für NormCert, kenne ich die Anforderungen von Prüfern und Auftraggebern sowie die Realität in Ihrem Betrieb. Ich helfe Ihnen, ein QM/UM-System aufzubauen, das wirkt, anerkannt wird und Sie vor unnötigen Kosten schützt.
         </p>
         <Link href="/ueber-uns"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 text-lg">
            Mehr über den pragmatischen Ansatz
            <ArrowRightIcon />
          </Link>
      </section>

    </div>
  );
}
