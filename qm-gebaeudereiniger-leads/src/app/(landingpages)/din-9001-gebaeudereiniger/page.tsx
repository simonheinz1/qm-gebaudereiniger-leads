import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
    BriefcaseIcon,
    BoltIcon,
    StarIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    ShieldExclamationIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: 'DIN ISO 9001 für Gebäudereiniger | Qualität sichern, Aufträge gewinnen',
  description: 'Praxisnahes Qualitätsmanagement (QM) nach DIN ISO 9001 speziell für Gebäudereiniger. Effizient QM-Anforderungen für Ausschreibungen erfüllen & Kundenzufriedenheit steigern.',
};

export default function DIN9001Page() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-cyan-200">Qualitätsmanagement nach Maß</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            ISO 9001 für Gebäudereiniger: Qualität sichern, Aufträge gewinnen
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ihr praxisorientierter Weg zu nachweisbarer Qualität, optimierten Abläufen und besseren Chancen bei Ausschreibungen – effizient und kostengünstig.
          </p>
          <Link
            href="/kontakt"
            className="bg-white text-teal-700 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
          >
            Jetzt Erstgespräch vereinbaren
          </Link>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">

        {/* Was bringt QM? Section */}
        <section className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">
            Warum ein QM-System nach ISO 9001 für Ihr Unternehmen entscheidend ist
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Ein systematisches Qualitätsmanagement (QM) nach ISO 9001 ist der international anerkannte Standard, um die Qualität Ihrer Dienstleistungen kontinuierlich zu sichern und zu verbessern. Für Gebäudereiniger bedeutet das konkret:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
                <li><strong>Konstante Reinigungsqualität:</strong> Klare Arbeitsanweisungen, definierte Prozesse (z.B. Reinigungspläne, Checklisten) und Kontrollen sichern ein gleichbleibend hohes Niveau.</li>
                <li><strong>Erfüllung von Kundenanforderungen:</strong> Nachweisbare Einhaltung spezifischer Vorgaben, z.B. bei Hygienevorschriften oder besonderen Objekten.</li>
                <li><strong>Effiziente Prozesse:</strong> Optimierte Abläufe von der Angebotserstellung über die Leistungserbringung bis zur Abrechnung reduzieren Fehler und Kosten.</li>
                <li><strong>Qualifizierte Mitarbeiter:</strong> Strukturierte Einarbeitung und regelmäßige Schulungen stellen sicher, dass Ihr Team kompetent arbeitet.</li>
                <li><strong>Professionelles Reklamationsmanagement:</strong> Ein definierter Prozess zum Umgang mit Beschwerden stärkt das Kundenvertrauen.</li>
              </ul>
            </div>
            <div className="flex items-center justify-center p-6 bg-teal-50 rounded-lg">
               {/* Placeholder Icon/Grafik */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
          </div>
          <p className="mt-6 text-lg font-medium text-center text-teal-800">
            Investieren Sie in Qualität und Professionalität – für zufriedenere Kunden, motivierte Mitarbeiter und einen entscheidenden Wettbewerbsvorteil.
          </p>
        </section>

        {/* Vorteile Section */}
        <section className="bg-teal-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-teal-800 mb-8">
            Ihre Vorteile auf einen Blick
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {/* Vorteil 1 */}
            <div className="p-4">
              <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-green-100 rounded-full">
                 <BriefcaseIcon className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1 text-lg">Mehr Aufträge & Ausschreibungen</h3>
              <p className="text-gray-600">
                Erfüllen Sie QM-Anforderungen & überzeugen Sie potenzielle Auftraggeber.
              </p>
            </div>
            {/* Vorteil 2 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-cyan-100 rounded-full">
                    <BoltIcon className="h-7 w-7 text-cyan-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Effizienz steigern</h3>
              <p className="text-gray-600">
                Optimieren Sie Abläufe, reduzieren Sie Fehler & sparen Sie Kosten.
              </p>
            </div>
            {/* Vorteil 3 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-yellow-100 rounded-full">
                   <StarIcon className="h-7 w-7 text-yellow-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Kundenzufriedenheit erhöhen</h3>
              <p className="text-gray-600">
                Liefern Sie konstant hohe Qualität & binden Sie Kunden langfristig.
              </p>
            </div>
            {/* Vorteil 4 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-purple-100 rounded-full">
                    <ShieldCheckIcon className="h-7 w-7 text-purple-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Nachweisbare Professionalität</h3>
              <p className="text-gray-600">
                Stärken Sie Ihr Image und heben Sie sich positiv vom Wettbewerb ab.
              </p>
            </div>
            {/* Vorteil 5 */}
            <div className="p-4">
               <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-blue-100 rounded-full">
                    <UserGroupIcon className="h-7 w-7 text-blue-600" />
               </div>
              <h3 className="font-semibold mb-1 text-lg">Team stärken</h3>
              <p className="text-gray-600">
                Schaffen Sie klare Strukturen & erleichtern Sie die Einarbeitung.
              </p>
            </div>
            {/* Vorteil 6 */}
            <div className="p-4">
                <div className="flex items-center justify-center h-12 w-12 mx-auto mb-3 bg-red-100 rounded-full">
                    <ShieldExclamationIcon className="h-7 w-7 text-red-600" />
                </div>
              <h3 className="font-semibold mb-1 text-lg">Risiken minimieren</h3>
              <p className="text-gray-600">
                Reduzieren Sie Haftungsrisiken durch dokumentierte Prozesse.
              </p>
            </div>
          </div>
        </section>

        {/* Praxisnaher Ansatz Section */}
        <section className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-teal-700 mb-6 text-center">
            Unser Ansatz: Praxisnahes QM speziell für Gebäudereiniger
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-700 mb-4">
                Eine vollständige ISO 9001 Zertifizierung durch externe Stellen ist oft aufwändig und kostenintensiv (initial 3.000€ - 10.000€, plus jährliche Überwachungskosten). Gerade für kleine und mittlere Reinigungsunternehmen ist dies nicht immer der wirtschaftlichste Weg.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Als <strong>erfahrener Berater und Kenner der Gebäudereinigungsbranche</strong> unterstütze ich Sie dabei, ein QM-System aufzubauen, das <strong>wirklich funktioniert, Ihnen im Alltag hilft und die Anforderungen vieler Ausschreibungen erfüllt</strong> – auch ohne teures externes Zertifikat.
              </p>
              <p className="text-lg font-medium text-gray-800 mb-2">Unser Fokus liegt auf:</p>
              <ul className="list-disc list-inside space-y-1 mt-2 text-lg text-gray-700">
                <li><strong>Branchenspezifischer Relevanz:</strong> Wir konzentrieren uns auf die QM-Aspekte, die für Gebäudereiniger den größten Mehrwert bringen (z.B. Prozessoptimierung, Mitarbeiterschulung, Kundenzufriedenheit).</li>
                <li><strong>Effizienz & Praktikabilität:</strong> Schlanke, verständliche Dokumentation (digital & papierbasiert), die Ihre Arbeit unterstützt, statt sie zu behindern.</li>
                <li><strong>Individueller Anpassung:</strong> Keine Standardlösungen, sondern ein auf Ihr Unternehmen zugeschnittenes System.</li>
                <li><strong>Nachweisbarkeit für Ausschreibungen:</strong> Erfüllung der gängigen Anforderungen an ein funktionierendes QM-System.</li>
                <li><strong>Kosteneffizienz:</strong> Deutlich geringere Kosten im Vergleich zur klassischen externen Zertifizierung.</li>
                <li><strong>Schneller Implementierung:</strong> Zielgerichtete Einführung in überschaubarer Zeit (oft 2-3 Monate bis zur Einsatzbereitschaft).</li>
              </ul>
              <p className="mt-4 text-lg text-gray-700">
                  <strong>Starthilfe benötigt?</strong> Nutzen Sie unseren <Link href="/werkzeuge/qm-doku-generator" className="text-teal-600 font-semibold hover:underline">QM-Doku-Generator</Link> für kostenlose Vorlagen wichtiger QM-Dokumente.
              </p>
            </div>
            <div className="order-1 md:order-2 bg-teal-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-teal-700 mb-3">
                Ihr Qualitätsnachweis für Ausschreibungen
              </h3>
              <p className="text-gray-700 mb-3">
                Häufig wird in Ausschreibungen kein *zertifiziertes*, sondern ein
                *funktionierendes* QM-System nach ISO 9001 oder gleichwertig
                gefordert.
              </p>
              <p className="text-gray-700 font-medium">
                Mit unserem praxisorientierten System weisen Sie die geforderte Qualität nach – effektiv und kostengünstiger als mit einer externen Zertifizierung.
              </p>
               <Link href="/blog/checkliste-ausschreibung-qm-um-gebaeudereiniger" className="text-teal-600 hover:underline mt-3 inline-block">
                 Zur Checkliste für Ausschreibungen &rarr;
              </Link>
              <br />
              <Link href="/werkzeuge/ausschreibung-checkliste" className="text-teal-600 hover:underline mt-1 inline-block">
                 Direkt zum Checklisten-Werkzeug &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pt-12 border-t">
           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Häufige Fragen (FAQ)
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Ist eine DIN 9001 Zertifizierung Pflicht?
                 <span className="text-teal-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Gesetzlich nicht, aber oft eine Bedingung von Auftraggebern, insbesondere bei öffentlichen Ausschreibungen. Häufig reicht jedoch der Nachweis eines funktionierenden, an ISO 9001 angelehnten Systems aus. Unsere <Link href="/blog/checkliste-ausschreibung-qm-um-gebaeudereinigung" className="text-teal-600 hover:underline">Checkliste für Ausschreibungen</Link> gibt Ihnen Orientierung.
              </p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                 Wie lange dauert die Einführung?
                  <span className="text-teal-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Die Dauer hängt von der Größe Ihres Unternehmens und den bestehenden Strukturen ab. Mit unserem fokussierten Ansatz ist die Implementierung eines funktionierenden QM-Systems oft innerhalb von <strong>2 bis 3 Monaten</strong> realisierbar. Ein externes Zertifizierungsaudit (falls gewünscht) nimmt dann nur noch wenige Tage in Anspruch. Mehr Details finden Sie in unserem <Link href="/blog/dauer-qm-einfuehrung-realistisch" className="text-teal-600 hover:underline">Blogbeitrag zur Einführungsdauer</Link>.
              </p>
            </details>
             <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Wird der Qualitätsnachweis akzeptiert?
                 <span className="text-teal-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Ja, in sehr vielen Fällen. Viele Auftraggeber fordern explizit ein "funktionierendes" oder "an ISO 9001 angelehntes" QM-System. Unser praxisnaher Ansatz mit entsprechender Dokumentation und internen Audits erfüllt diese Anforderungen üblicherweise. Wir unterstützen Sie dabei, dies gegenüber potenziellen Kunden transparent darzustellen.
              </p>
            </details>
             <details className="p-4 bg-white rounded-lg shadow group">
              <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                Was ist der Unterschied zu reinen Beratern?
                <span className="text-teal-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Als erfahrener Berater mit Branchenkenntnis fokussiere ich auf funktionierende, schlanke Systeme ohne unnötigen
                Ballast, die echten Mehrwert im Alltag bringen und auf die spezifischen Bedürfnisse von Gebäudereinigern zugeschnitten sind.
              </p>
            </details>
            <details className="p-4 bg-white rounded-lg shadow group">
               <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                 Lohnt sich QM auch für kleine Betriebe?
                 <span className="text-teal-600 transform group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <p className="text-gray-700 mt-3">
                Nein, im Gegenteil. Durch optimierte Prozesse, weniger Fehler und Reklamationen sowie effizienteren Ressourceneinsatz können Sie langfristig Kosten sparen. Die Investition in ein QM-System zahlt sich durch gesteigerte Effizienz und mehr Aufträge aus.
              </p>
            </details>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center pt-12 border-t">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Bereit für nachweisbare Qualität?
          </h2>
          <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
            Lassen Sie uns unverbindlich besprechen, wie Ihr
            Gebäudereinigungsbetrieb von einem maßgeschneiderten
            Qualitätsmanagement nach DIN ISO 9001 profitieren kann.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-teal-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-md hover:shadow-lg"
          >
            Jetzt kostenloses Erstgespräch
          </Link>
        </section>
      </div>
    </div>
  );
} 