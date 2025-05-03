import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { UserCircleIcon } from '@heroicons/react/24/outline'; // Icon importiert
// import { UserCircleIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'; // Icons entfernt

// SEO Metadaten für die Über Uns Seite (angepasst für weniger persönlichen Fokus)
export const metadata: Metadata = {
  title: 'Über Uns: Praxisnahes QM/UM für Gebäudereiniger | Unser Ansatz', // Geändert
  description:
    'Erfahren Sie mehr über unseren praxisnahen Ansatz für Qualitäts- & Umweltmanagement (QM/UM) speziell für Gebäudereiniger. Entwickelt mit Auditor-Erfahrung.', // Geändert
};

export default function UeberUnsPage() {
  return (
    <div className="bg-gray-50">
       {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-700 to-gray-800 py-20 text-white mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Über Uns: Ihr Partner für QM/UM mit Praxisbezug
          </h1>
          {/* Untertitel angepasst */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Vom Auditor entwickelt: Unser Ansatz für Ihren Erfolg als Gebäudereiniger.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl space-y-12 pb-16">

        <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-md">
          <div className="md:w-1/4 flex justify-center">
            {/* Platzhalter durch Icon ersetzt */}
            <UserCircleIcon className="h-24 w-24 text-teal-600" />
          </div>
          <div className="md:w-3/4">
            {/* Überschrift und Text angepasst */}
            <h2 className="text-2xl font-semibold text-teal-700 mb-3">Der Ansatz: Erfahrung trifft Praxis</h2>
            <p className="text-lg text-gray-700 mb-4">
              Dieser Ansatz wurde von Simon Heinz entwickelt, einem spezialisierten Partner für Qualitäts- (QM) und Umweltmanagement (UM) in der Gebäudereinigungsbranche. Mit Erfahrung als <strong>selbstständiger Auditor, tätig für NormCert,</strong> und über 10 Jahren Branchenkenntnis basiert dieser Ansatz auf dem Verständnis dafür, worauf es bei Ausschreibungen ankommt und welche QM/UM-Maßnahmen in der Praxis wirklich funktionieren.
            </p>
            <p className="text-lg text-gray-700">
              Das Ziel dieses Ansatzes ist es, Ihnen zu helfen, <strong>mehr Aufträge zu gewinnen</strong> und Ihre Abläufe zu optimieren – mit einem Managementsystem, das Ihnen dient, statt Sie zu belasten. Er übersetzt die Anforderungen von DIN 9001 und DIN 14001 in praktikable Lösungen für Ihren Betrieb.
            </p>
          </div>
        </section>

        <section className="p-8 bg-teal-50 rounded-lg shadow-md">
          {/* Überschriften angepasst */}
          <h2 className="text-2xl font-semibold text-teal-800 mb-4 text-center">Warum dieser Ansatz anders (und oft besser) ist</h2>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
            Die klassische ISO-Zertifizierung ist oft teuer, zeitaufwändig und voller Bürokratie, die kleinen und mittleren Gebäudereinigern wenig nützt. Viele Anforderungen in Ausschreibungen lassen sich aber auch mit einem <strong>nachweislich funktionierenden, praxisorientierten Managementsystem</strong> erfüllen.
          </p>
          <h3 className="text-xl font-semibold text-teal-700 mb-3 text-center">
            Die Vorteile dieses Ansatzes für Sie:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700 mb-6">
             <li className="flex items-start">
               {/* <CheckBadgeIcon className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" /> Icon entfernt */}
               <span className="text-green-600 mr-2 mt-1">✓</span> {/* Text-Häkchen als Ersatz */}
               <span><strong>Fokus aufs Wesentliche:</strong> Wissen, welche Norm-Aspekte für Ausschreibungen und Kunden wirklich relevant sind.</span>
            </li>
            <li className="flex items-start">
               {/* <CheckBadgeIcon className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" /> Icon entfernt */}
                <span className="text-green-600 mr-2 mt-1">✓</span> {/* Text-Häkchen als Ersatz */}
              <span><strong>Praxisnahe Umsetzung:</strong> Keine Theorie, sondern maßgeschneiderte, funktionierende Checklisten & Prozesse.</span>
            </li>
             <li className="flex items-start">
               {/* <CheckBadgeIcon className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" /> Icon entfernt */}
                <span className="text-green-600 mr-2 mt-1">✓</span> {/* Text-Häkchen als Ersatz */}
              <span><strong>Effizienz & Kostenersparnis:</strong> Verzicht auf unnötige Bürokratie und teure externe Audits spart Zeit und Geld.</span>
            </li>
             <li className="flex items-start">
               {/* <CheckBadgeIcon className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" /> Icon entfernt */}
                <span className="text-green-600 mr-2 mt-1">✓</span> {/* Text-Häkchen als Ersatz */}
              <span><strong>Verständliche Sprache:</strong> Klare Erklärungen und einfache Unterstützung bei der Dokumentation.</span>
            </li>
            <li className="flex items-start">
               {/* <CheckBadgeIcon className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" /> Icon entfernt */}
                <span className="text-green-600 mr-2 mt-1">✓</span> {/* Text-Häkchen als Ersatz */}
              <span><strong>Anerkannter Nachweis:</strong> Eine Bestätigung, die Ihr Engagement belegt und bei vielen Auftraggebern als Nachweis dient.</span> {/* Korrekter Kommentar */} 
            </li>
          </ul>
          <p className="text-lg text-gray-700 text-center">
            Das Ergebnis: Sie erfüllen wichtige Anforderungen, verbessern Ihre Abläufe und steigern Ihre Chancen im Wettbewerb – mit einem System, das für Sie arbeitet.
            <Link href="/leistungen" className="text-teal-600 hover:underline ml-1 font-medium">So funktioniert der Prozess.</Link>
          </p>
        </section>

        <section className="text-center mt-12 border-t pt-10">
             {/* Text leicht angepasst, "mein" entfernt */}
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sind Sie bereit für QM/UM mit Augenmaß?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">Lassen Sie uns unverbindlich besprechen, wie dieser praxisnahe Ansatz Ihrem Gebäudereinigungsunternehmen helfen kann.</p>
            <Link href="/kontakt"
                className="inline-block bg-teal-600 text-white px-10 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-300 shadow hover:shadow-md">
              Kostenloses Erstgespräch vereinbaren
            </Link>
        </section>

      </div>
    </div>
  );
} 