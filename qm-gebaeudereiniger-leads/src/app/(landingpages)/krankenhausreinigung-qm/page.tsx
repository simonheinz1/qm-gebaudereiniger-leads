import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QM für Krankenhausreinigung & Praxen | Hygiene-Profi | NormCert',
  description: 'Spezialisiertes QM-System für Gebäudereiniger im Gesundheitswesen. Mit NormCert Hygienestandards (KRINKO, RKI) erfüllen & Aufträge von Kliniken & Praxen gewinnen.',
};

export default function KrankenhausReinigungPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
       <section className="text-center">
         <h1 className="text-4xl font-bold text-indigo-700 mb-4">
           Krankenhausreinigung & Praxen: Mit QM höchste Hygiene-Standards erfüllen
         </h1>
         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
           Die Reinigung im Gesundheitswesen erfordert höchste Sorgfalt und nachweisbare Prozesse. Sichern Sie sich das Vertrauen von Kliniken, Arztpraxen und Pflegeeinrichtungen mit einem spezialisierten QM-System von NormCert – praxisnah und effizient.
         </p>
       </section>

      <section className="p-6 bg-indigo-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-indigo-800 mb-4 text-center">Die Hygiene-Herausforderung im Gesundheitswesen</h2>
         <div className="grid md:grid-cols-2 gap-6 items-center">
             <div>
                <h3 className="font-semibold text-lg mb-2 text-red-700">Das Risiko</h3>
                <p className="text-gray-700 mb-4">Strikte Hygienestandards (KRINKO, RKI), Infektionsschutzgesetz, Risikobereiche, Desinfektionspläne, Dokumentationspflichten – Fehler können gravierende Folgen haben und Aufträge kosten.</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg mb-2 text-green-700">Die NormCert-Lösung</h3>
                <p className="text-gray-700">Ein QM-System, speziell für Gebäudereiniger im Gesundheitswesen. Basierend auf Praxiserfahrung als **Adiutor bei NormCert**, fokussiert es auf relevante Hygiene- und Qualitätspunkte, integriert Richtlinien und bleibt dabei praktikabel.</p>
            </div>
        </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Vorteile unseres spezialisierten Gesundheits-QM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
             {/* Vorteil 1 */}
             <div className="p-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a4 4 0 00-5.656 0M11.343 11.343a4 4 0 105.657 5.657M11.343 11.343l5.657 5.657" /></svg>
               <h3 className="font-semibold mb-1">Maßgeschneidert</h3>
               <p className="text-sm text-gray-600">Prozesse & Dokumente für Klinik-, Praxis- & Pflege-Anforderungen.</p>
             </div>
              {/* Vorteil 2 */}
              <div className="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <h3 className="font-semibold mb-1">Richtlinienkonform</h3>
                <p className="text-sm text-gray-600">Berücksichtigt KRINKO, RKI, IfSG, Basishygiene etc.</p>
              </div>
             {/* Vorteil 3 */}
             <div className="p-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
               <h3 className="font-semibold mb-1">Praxisnah & Klar</h3>
               <p className="text-sm text-gray-600">Klare Anweisungen für Risikobereiche & Arbeitsabläufe.</p>
             </div>
             {/* Vorteil 4 */}
            <div className="p-4">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7c0-1.1.9-2 2-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" /></svg>
               <h3 className="font-semibold mb-1">Nachweisbar</h3>
               <p className="text-sm text-gray-600">Effektive Dokumentation für Kontrollen, Audits & Ausschreibungen.</p>
            </div>
            {/* Vorteil 5 */}
            <div className="p-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
              <h3 className="font-semibold mb-1">Gezielte Schulung</h3>
              <p className="text-sm text-gray-600">Fokus auf Hygiene, Desinfektion & Infektionsprävention.</p>
            </div>
             {/* Vorteil 6 */}
             <div className="p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M15 8a3 3 0 10-6 0 3 3 0 006 0z" /></svg>
               <h3 className="font-semibold mb-1">Effizient & Schlank</h3>
               <p className="text-sm text-gray-600">Praxis-Know-how sorgt für Strukturen ohne unnötigen Ballast.</p>
             </div>
          </div>
      </section>

       <section className="grid md:grid-cols-2 gap-8 my-10 items-start">
         <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200 shadow-sm">
           <h3 className="text-xl font-semibold text-yellow-800 mb-4">Ihr Weg zum spezialisierten Gesundheits-QM:</h3>
           <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-700">
             <li><strong>Analyse-Gespräch:</strong> Ihre spezifischen Anforderungen?</li>
             <li><strong>Prozess-Check:</strong> Abgleich mit Hygiene-Standards.</li>
             <li><strong>System-Entwicklung:</strong> Erstellung spezifischer QM-Dokumente.</li>
             <li><strong>Abstimmung & Anpassung:</strong> Gemeinsame Prüfung.</li>
             <li><strong>Hygiene-Schulung:</strong> Vorbereitung Ihres Teams.</li>
             <li><strong>Implementierung & internes Audit:</strong> Funktionstest im Alltag.</li>
             <li><strong>Zertifikat & Support:</strong> Nachweis erhalten & Unterstützung.</li>
           </ol>
           <p className="mt-4 font-medium text-yellow-800"><strong className="text-gray-800">Ziel:</strong> Ein verlässliches System, das Sicherheit gibt und Aufträge sichert.</p>
         </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Wichtige integrierte Standards</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>DIN EN ISO 9001 (Qualitätsmanagement)</li>
            <li>DIN EN ISO 14001 (Umweltaspekte, z.B. Desinfektionsmittel)</li>
            <li>KRINKO/RKI-Empfehlungen (Hygiene)</li>
            <li>Infektionsschutzgesetz (IfSG)</li>
            <li>Vorgaben zur Basishygiene</li>
            <li>Arbeitsschutzaspekte (z.B. Umgang mit Gefahrstoffen)</li>
             {/* Ggf. weitere bereichsspezifische Normen/Vorgaben */} 
          </ul>
        </div>
      </section>


      <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm my-10">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Erfolg in der Praxis (Beispiel)</h3>
        <blockquote className="italic text-gray-600 mb-4 max-w-2xl mx-auto">
          "Dank des QM-Systems mit klarem Hygiene-Fokus konnten wir unsere Prozesse in der Klinikreinigung professionalisieren. Die bereichsspezifischen Anweisungen sind Gold wert. Bei der letzten Ausschreibung eines großen Klinikums haben wir mit diesem Nachweis überzeugt – trotz höherem Preis."
        </blockquote>
        <p className="text-right text-sm text-gray-500 max-w-2xl mx-auto">
          - Gebäudereinigung Mustermann (Beispiel)
        </p>
      </section>

      <section className="text-center mt-12 border-t pt-10">
        <h2 className="text-3xl font-semibold mb-5 text-indigo-700">Bereit für anspruchsvolle Klinik- & Praxis-Aufträge?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Sichern Sie sich die Kompetenz für höchste Hygienestandards. Kontaktieren Sie NormCert für ein kostenloses Erstgespräch zu Ihren Herausforderungen im Gesundheitswesen.</p>
        <Link href="/kontakt"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg hover:shadow-xl">
          Jetzt Gesundheits-QM anfragen
        </Link>
      </section>

      <section className="mt-12 p-6 bg-gray-100 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Häufige Fragen (FAQ) zum QM im Gesundheitswesen</h3>
        <div className="space-y-5 mt-4 max-w-3xl mx-auto">
          <div>
            <h4 className="font-semibold text-lg mb-1">Welche Schulungen sind für Klinik-/Praxis-Personal nötig?</h4>
            <p className="text-gray-700">Neben Grundlagen sind spezielle Schulungen zu Basishygiene, Infektionsprävention, Desinfektionsverfahren und PSA unerlässlich. Diese sind Teil unseres QM-Pakets und berücksichtigen auch Aspekte der [Arbeitssicherheit](/blog/arbeitssicherheit-als-qualitaetsmerkmal-gebaeudereinigung).</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Reicht ein allgemeines DIN 9001 Zertifikat für Kliniken?</h4>
            <p className="text-gray-700">Oft nicht. Es muss nachweisbar sein, dass spezifische Hygiene-Richtlinien (KRINKO etc.) im QM-System verankert sind. Unser spezialisierter NormCert-Ansatz stellt dies sicher.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Ist das System auch für Arztpraxen oder Pflegeheime geeignet?</h4>
            <p className="text-gray-700">Ja, absolut. Wir passen das System an die spezifischen Anforderungen und die Größe Ihrer Objekte an – von der kleinen Praxis bis zum großen Pflegeheim.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 