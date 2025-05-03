import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
    BanknotesIcon,
    ClipboardDocumentListIcon,
    SparklesIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ArrowTrendingUpIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: 'DIN ISO 14001 Gebäudereiniger | Umwelt schützen, Kosten senken',
  description:
    'Praxisnahes Umweltmanagement (UM) nach DIN ISO 14001 für Gebäudereiniger. Nachhaltig handeln, Kosten reduzieren und bei Ausschreibungen punkten.',
};

export default function DIN14001Page() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-emerald-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-emerald-200">Nachhaltiges Umweltmanagement</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            ISO 14001 für Gebäudereiniger: Umwelt schützen, Kosten senken, Image stärken
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Implementieren Sie ein praxisnahes Umweltmanagementsystem, das wirkt: Reduzieren Sie Ihren ökologischen Fußabdruck, sparen Sie Ressourcen und gewinnen Sie umweltbewusste Kunden.
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-emerald-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Jetzt Erstgespräch anfordern
          </Link>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">

        {/* Warum UM? Section */}
        <section className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center">
            Warum Umweltmanagement (ISO 14001) für Gebäudereiniger unerlässlich ist
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Ihre tägliche Arbeit hat direkte Auswirkungen auf die Umwelt – vom Umgang mit Reinigungschemikalien über den Wasser- und Energieverbrauch bis hin zur Abfallentsorgung und den Fahrten Ihrer Mitarbeiter. Ein systematisches Umweltmanagement (UM) nach ISO 14001 hilft Ihnen, diese Umweltauswirkungen gezielt zu steuern und zu minimieren:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li><strong>Ressourcenverbrauch optimieren:</strong> Gezielte Maßnahmen zur Reduzierung von Wasser, Energie und Reinigungsmitteln.</li>
                <li><strong>Effektives Abfallmanagement:</strong> Konzepte zur Abfallvermeidung, korrekten Trennung und umweltgerechten Entsorgung (inkl. Sonderabfälle).</li>
                <li><strong>Sicherer Umgang mit Gefahrstoffen:</strong> Einhaltung von Vorschriften bei Lagerung, Anwendung und Entsorgung spezifischer Chemikalien.</li>
                <li><strong>Emissionen reduzieren:</strong> Optimierte Tourenplanung, Förderung umweltfreundlicher Mobilität, Einsatz energieeffizienter Maschinen.</li>
                <li><strong>Rechtssicherheit gewährleisten:</strong> Systematische Einhaltung aller relevanten Umweltgesetze und -vorschriften.</li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-6 bg-green-50 rounded-lg">
              {/* Placeholder Icon/Grafik */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m4.5 9c0 2.485-4.03 4.5-4.5 4.5S7.5 14.485 7.5 12 9.515 7.5 12 7.5s4.5 2.015 4.5 4.5z" /></svg>
            </div>
          </div>
          <p className="mt-6 text-lg font-medium text-center text-emerald-800">
            Aktives Umweltmanagement ist mehr als nur ein "grüner Anstrich": Es ist ein strategischer Vorteil, der Kosten senkt, die Rechtssicherheit erhöht und Ihr Unternehmen für Kunden und Mitarbeiter attraktiver macht.
          </p>
        </section>

        {/* Vorteile Section */}
        <section className="bg-green-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
            Ihre Vorteile auf einen Blick
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Vorteil 1 */}
            <div className="p-4">
              <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-green-100 rounded-full">
                <BanknotesIcon className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1 text-lg">Kosten senken</h3>
              <p className="text-gray-600">
                Reduzieren Sie Verbrauch von Wasser, Energie & Chemie.
              </p>
            </div>
            {/* Vorteil 2 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-teal-100 rounded-full">
                <ClipboardDocumentListIcon className="h-7 w-7 text-teal-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Bessere Chancen bei Ausschreibungen</h3>
              <p className="text-gray-600">
                Erfüllen Sie Umweltkriterien & punkten Sie mit nachweisbarer Nachhaltigkeit.
              </p>
            </div>
            {/* Vorteil 3 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-yellow-100 rounded-full">
                 <SparklesIcon className="h-7 w-7 text-yellow-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Image verbessern</h3>
              <p className="text-gray-600">
                Positionieren Sie sich als verantwortungsvolles Unternehmen.
              </p>
            </div>
            {/* Vorteil 4 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-purple-100 rounded-full">
                <ShieldCheckIcon className="h-7 w-7 text-purple-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Rechtssicherheit & Compliance</h3>
              <p className="text-gray-600">
                Stellen Sie die Einhaltung relevanter Umweltvorschriften sicher.
              </p>
            </div>
            {/* Vorteil 5 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-cyan-100 rounded-full">
                <UserGroupIcon className="h-7 w-7 text-cyan-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Mitarbeiter motivieren</h3>
              <p className="text-gray-600">
                Fördern Sie das Umweltbewusstsein im Team.
              </p>
            </div>
            {/* Vorteil 6 */}
            <div className="p-4">
                <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-blue-100 rounded-full">
                 <ArrowTrendingUpIcon className="h-7 w-7 text-blue-600" />
                </div>
              <h3 className="font-semibold mb-1 text-lg">Wettbewerbsvorteil sichern</h3>
              <p className="text-gray-600">Heben Sie sich von Mitbewerbern ab.</p>
            </div>
          </div>
        </section>

        {/* Praxisnaher Ansatz Section */}
        <section className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-emerald-700 mb-6 text-center">
            Unser Ansatz: Effektives Umweltmanagement statt bürokratischer Hürden
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 mb-4">
                Eine externe Zertifizierung nach ISO 14001 ist oft komplex, zeitaufwändig und kostspielig. Doch viele Auftraggeber und Ausschreibungen fordern nicht zwingend ein Zertifikat, sondern den Nachweis eines <strong>funktionierenden und systematischen Umweltmanagementsystems</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Mit <strong>Praxiserfahrung in der Implementierung von Managementsystemen</strong> entwickle ich mit Ihnen ein **schlankes, wirksames und branchenspezifisches UM-System**, das:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-lg text-gray-700">
                <li><strong>Messbare Einsparungen</strong> bei Wasser, Energie und Verbrauchsmaterialien ermöglicht.</li>
                <li>Sich auf die **wesentlichen Umweltaspekte der Gebäudereinigung** konzentriert (Chemie, Abfall, Mobilität etc.).</li>
                <li>Ihnen hilft, Ihre <strong>Umweltleistung nachvollziehbar zu dokumentieren</strong> und gegenüber Kunden/Behörden nachzuweisen.</li>
                <li>**Praktikabel im Betriebsalltag** ist und von Ihren Mitarbeitern akzeptiert und gelebt wird.</li>
                <li>Eine **kosteneffiziente Alternative** zur aufwändigen externen Zertifizierung darstellt.</li>
              </ul>
            </div>
             <div className="order-1 md:order-2 bg-green-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                Konkrete Maßnahmen für Gebäudereiniger
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Einsatz zertifizierter Öko-Reinigungsmittel</li>
                  <li>Optimierte Dosiersysteme</li>
                  <li>Wassersparende Reinigungstechniken</li>
                  <li>Systematische Mülltrennung & -vermeidung</li>
                  <li>Energieeffiziente Geräte & Tourenplanung</li>
                  <li>Regelmäßige Mitarbeiterschulungen</li>
                </ul>
                <Link href="/nachhaltigkeit-gebaeudereinigung" className="text-green-600 hover:underline mt-3 inline-block font-medium">
                   Mehr zu Nachhaltigkeit & Details &rarr;
                </Link>
            </div>
          </div>
        </section>

         {/* Optional: Hinweis auf Kombi-System */}
        <section className="p-8 bg-teal-50 rounded-lg border border-teal-200 shadow-md">
          <h3 className="text-2xl font-semibold text-teal-800 mb-4 text-center">
            Effizienz²: Qualitäts- & Umweltmanagement kombinieren
          </h3>
          <p className="mb-6 text-center text-lg text-gray-700 max-w-2xl mx-auto">
            Da viele Ausschreibungen Nachweise für Qualität (ISO 9001) UND Umwelt
            (ISO 14001) fordern, ist ein **integriertes Managementsystem (IMS)**
            oft die sinnvollste Lösung. Profitieren Sie von Synergien und
            erfüllen Sie alle Anforderungen effizient aus einer Hand.
          </p>
          <div className="text-center">
            <Link
              href="/leistungen"
              className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 shadow"
            >
              Mehr über integrierte Systeme
            </Link>
          </div>
        </section>

         {/* FAQ Section */}
        <section className="pt-12 border-t">
           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Häufige Fragen (FAQ) zum Umweltmanagement
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
             <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Hilft mir DIN 14001 wirklich bei Ausschreibungen?
                 <span className="text-emerald-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Ja, definitiv. Nachhaltigkeits- und Umweltaspekte werden bei der Auftragsvergabe immer wichtiger. Ein nachweisbares UM-System kann oft den entscheidenden Vorteil bringen oder ist sogar eine Grundvoraussetzung. Unsere <Link href="/blog/checkliste-ausschreibung-qm-um-gebaeudereinigung" className="text-teal-600 hover:underline">Checkliste für Ausschreibungen</Link> zeigt typische Anforderungen auf.
              </p>
            </details>
             <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Ist dieser Ansatz günstiger als eine Zertifizierung?
                  <span className="text-emerald-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Ja, unser Ansatz konzentriert sich auf die Implementierung eines funktionierenden Systems und die interne Dokumentation. Dadurch entfallen die hohen Kosten für externe Auditoren und Zertifizierungsstellen. Die Ersparnis ist erheblich.
              </p>
            </details>
             <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Macht Umweltmanagement meine Dienstleistung teurer?
                 <span className="text-emerald-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Nicht zwangsläufig. Oftmals führen die durch das UM-System erzielten Einsparungen bei Energie, Wasser und Reinigungsmitteln sogar zu einer Kostensenkung. Zudem können Sie durch die verbesserte Effizienz und das positive Image neue Aufträge gewinnen, was die Investition schnell amortisiert.
              </p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow group">
               <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                 Was ist der Unterschied zu reinen Beratern?
                <span className="text-emerald-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Ich bringe praktische Erfahrung in der Implementierung von UM-Systemen ein und stelle
                sicher, dass Ihr System funktioniert und Anforderungen (z.B.
                für Ausschreibungen) erfüllt, ohne unnötigen Verwaltungsaufwand zu erzeugen.
              </p>
            </details>
             <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Sollte ich DIN 14001 mit DIN 9001 kombinieren?
                <span className="text-emerald-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Oft ist das die effizienteste Lösung, um umfassende Anforderungen
                zu erfüllen. Unser{' '}
                <Link href="/leistungen" className="text-teal-600 hover:underline">
                  integrierter Ansatz
                </Link>
                {' '}nutzt Synergien.
              </p>
            </details>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center pt-12 border-t">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Starten Sie jetzt: Nachhaltiger handeln!
          </h2>
          <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Entdecken Sie Ihr Einsparpotenzial und stärken Sie Ihre Marktposition
            durch praxisnahes Umweltmanagement. Vereinbaren Sie ein
            unverbindliches Gespräch.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Kostenloses Erstgespräch
          </Link>
        </section>
      </div>
    </div>
  );
} 