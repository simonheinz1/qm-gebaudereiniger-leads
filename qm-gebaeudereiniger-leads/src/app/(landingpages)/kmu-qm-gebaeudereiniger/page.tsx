import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QM für KMU Gebäudereiniger | Schlank, Praxisnah & Bezahlbar',
  description: 'Speziell für kleine & mittlere Gebäudereiniger: Unsere QM-Lösung. Effizient, kostenoptimiert & ohne unnötige Bürokratie zum Qualitätsnachweis.',
};

export default function KMUQualitaetsmanagementPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-orange-700 mb-4">
          QM für kleine & mittlere Gebäudereiniger: Schlank, praktisch, bezahlbar
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Sie führen einen KMU-Reinigungsbetrieb und Qualität ist Ihnen wichtig – aber eine komplexe ISO-Zertifizierung passt nicht? Zu teuer, zu viel Bürokratie? <strong>Genau dafür bieten wir als erfahrener Partner die Lösung.</strong>
        </p>
        <Link href="/kontakt"
              className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300 shadow-lg hover:shadow-xl mt-6">
          Jetzt KMU-Beratung anfordern
        </Link>
      </section>

      {/* NEUER ABSCHNITT FÜR SELBSTCHECK-LINK */}
      <section className="my-8 text-center">
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            <strong>Wo stehen Sie aktuell mit Ihrem Qualitäts- und Umweltmanagement?</strong><br /> Starten Sie mit unserem <Link href="/werkzeuge/qm-um-selbstcheck" className="text-orange-600 font-semibold hover:underline">kostenlosen QM/UM-Selbstcheck</Link>!
          </p>
      </section>
      {/* ENDE NEUER ABSCHNITT */}

      <section className="p-6 bg-orange-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-orange-800 mb-4 text-center">Das QM-Dilemma für KMU – und unser Weg</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
                <h3 className="font-semibold text-lg mb-2 text-red-700">Das Problem vieler KMU</h3>
                <p className="text-gray-700 mb-4">Klassische QM-Systeme sind oft zu komplex, kosten viel Geld und binden Personal, das Sie eigentlich für Ihre Kunden brauchen. Viele Standardlösungen ignorieren die Realität kleiner Teams.</p>
            </div>
             <div>
                <h3 className="font-semibold text-lg mb-2 text-green-700">Unsere Lösung</h3>
                <p className="text-gray-700">Ein maßgeschneidertes QM-System, basierend auf Praxiserfahrung. Wir wissen, was für Ausschreibungen und zufriedene Kunden nötig ist – und welcher Ballast für KMU überflüssig ist. Pragmatisch, kostengünstig, mit echtem Mehrwert.</p>
            </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-orange-700 mb-6">Ihr Nutzen als KMU mit unserem Ansatz</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {/* Vorteil 1 */}
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <h3 className="font-semibold mb-1">Minimaler Aufwand</h3>
              <p className="text-sm text-gray-600">Fokus aufs Wesentliche. Nur die Dokumente, die Sie wirklich brauchen.</p>
            </div>
             {/* Vorteil 2 */}
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <h3 className="font-semibold mb-1">Branchenspezifisch</h3>
              <p className="text-sm text-gray-600">Vorlagen & Prozesse speziell für Gebäudereiniger, nicht allgemein.</p>
            </div>
             {/* Vorteil 3 */}
             <div className="p-4">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
               <h3 className="font-semibold mb-1">Verständlich & Umsetzbar</h3>
               <p className="text-sm text-gray-600">Klare Sprache, persönliche Unterstützung bei der Einführung.</p>
             </div>
             {/* Vorteil 4 */}
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M15 8a3 3 0 10-6 0 3 3 0 006 0z" /></svg>
               <h3 className="font-semibold mb-1">Budgetfreundlich</h3>
               <p className="text-sm text-gray-600">Deutlich günstiger als ISO-Zertifizierung (oft 60-70% Ersparnis).</p>
             </div>
            {/* Vorteil 5 */}
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               <h3 className="font-semibold mb-1">Anerkannter Nachweis</h3>
               <p className="text-sm text-gray-600">Ideal für viele Ausschreibungen & als Qualitätsbeweis für Kunden.</p>
            </div>
            {/* Vorteil 6 */}
             <div className="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <h3 className="font-semibold mb-1">Schnelle Umsetzung</h3>
               <p className="text-sm text-gray-600">Fertiges System oft schon in 4-8 Wochen.</p>
             </div>
          </div>
      </section>

      {/* Korrigierter Abschnitt: KMU-Paket und Weg */}
      <section className="grid md:grid-cols-2 gap-8 my-10">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md h-full flex flex-col">
          <h3 className="text-xl font-semibold text-orange-700 mb-4">Ihr individuelles KMU-Paket enthält:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Schlankes QM-Handbuch (digital & praxistauglich)</li>
            <li>Anpassbare Arbeitsanweisungen & Checklisten</li>
            <li>Vorlagen für Schulungen & Protokolle</li>
            <li>Ihr individueller QM-Nachweis/Zertifikat</li>
            <li>Persönliche Einführung & Begleitung</li>
            <li>Optional: UM-Ergänzung (Aspekte der ISO 14001)</li>
          </ul>
          <div className="mt-auto pt-4 border-t border-gray-200">
            <blockquote className="text-sm italic text-gray-600">
              "Endlich ein QM-System, das wir wirklich nutzen und das uns im Alltag hilft. Die Zusammenarbeit war unkompliziert und auf unsere Größe zugeschnitten. Absolut empfehlenswert!"
            </blockquote>
            <p className="text-right text-xs text-gray-500 mt-1">- Zufriedener Kunde (Gebäudereinigung, 15 Mitarbeiter) <span className="italic">(Beispiel)</span></p>
          </div>
        </div>
        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200 shadow-sm flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Der Weg zu Ihrem KMU-QM:</h3>
          <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-700">
            <li><strong>Unverbindliches Erstgespräch:</strong> Passen wir zusammen?</li>
            <li><strong>Praxis-Check bei Ihnen:</strong> Wie arbeiten Sie aktuell?</li>
            <li><strong>Erstellung Ihres Systems:</strong> Wir erstellen die Basis-Doku.</li>
            <li><strong>Gemeinsame Anpassung:</strong> Wir feilen am System, bis es passt.</li>
            <li><strong>Kompakte Einführung:</strong> Ihr Team lernt das System kennen.</li>
            <li><strong>Zertifikat & Loslegen!</strong> Nachweis erhalten & profitieren.</li>
          </ol>
          <p className="mt-4 font-medium text-blue-700 text-center"><strong className="text-gray-800">Dauer:</strong> Nur ca. 4-8 Wochen!</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Ist unser KMU-QM das Richtige für Sie?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-5 rounded-lg bg-green-50">
            <h3 className="font-semibold text-lg mb-2 text-green-800">Ideal für:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Gebäudereiniger mit ca. 5-50 Mitarbeitern</li>
              <li>Teilnahme an regionalen/öffentlichen Ausschreibungen</li>
              <li>Wunsch nach besseren Strukturen & weniger Fehlern</li>
              <li>Betriebe mit begrenztem QM-Budget</li>
              <li>Unternehmer, die eine pragmatische Lösung suchen</li>
            </ul>
          </div>
          <div className="border p-5 rounded-lg bg-red-50">
            <h3 className="font-semibold text-lg mb-2 text-red-800">Weniger geeignet für:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Großbetriebe (&gt; 50-100 MA) mit komplexen Strukturen</li>
              <li>Fälle, wo explizit eine *akkreditierte* ISO-Zertifizierung zwingend gefordert ist</li>
              <li>Sehr international tätige Unternehmen</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center mt-12 border-t pt-10">
        <h2 className="text-3xl font-semibold mb-5 text-orange-700">QM für Ihr KMU – Einfach, effektiv, fair.</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Passt unser Ansatz zu Ihnen? Lassen Sie es uns in einem kostenlosen Gespräch herausfinden – unverbindlich und auf Augenhöhe.</p>
        <Link href="/kontakt"
              className="inline-block bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300 shadow-lg hover:shadow-xl">
          Jetzt kostenloses KMU-Gespräch
        </Link>
      </section>

      <section className="mt-12 p-6 bg-gray-100 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Häufige Fragen zum KMU-QM</h3>
        <div className="space-y-5 mt-4 max-w-3xl mx-auto">
          <div>
            <h4 className="font-semibold text-lg mb-1">Wird dieser QM-Nachweis bei Ausschreibungen anerkannt?</h4>
            <p className="text-gray-700">Sehr oft ja, insbesondere bei regionalen und vielen öffentlichen Vergaben, wo es um den Nachweis eines *funktionierenden* QM-Systems geht (siehe <Link href="/qm-fuer-ausschreibungen" className="text-blue-600 hover:underline">QM für Ausschreibungen</Link>). Wenn explizit eine *akkreditierte ISO-Zertifizierung* gefordert ist, reicht es nicht. Das klären wir im Erstgespräch.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Was kostet unsere KMU-QM Lösung ungefähr?</h4>
            <p className="text-gray-700">Deutlich weniger als eine ISO-Zertifizierung! Typischerweise zwischen 1.500€ - 3.500€, je nach Größe und Bedarf. Der interne Zeitaufwand ist ebenfalls viel geringer. Mehr zu [Kosten vs. Nutzen](/blog/kosten-nutzen-qm-um-gebaeudereiniger).</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Wie viel meiner Zeit wird benötigt?</h4>
            <p className="text-gray-700">Planen Sie ca. 2-3 Manntage ein, verteilt über 1-2 Monate. Den Großteil der Dokumentationsarbeit übernehmen wir, basierend auf unserem Praxis-Check.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 