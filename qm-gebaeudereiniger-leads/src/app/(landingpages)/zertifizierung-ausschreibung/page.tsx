import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadaten für die Seite
export const metadata: Metadata = {
  title: 'Ausschreibungen Gebäudereinigung: Gewinnen mit Praxisnachweis (9001/14001)',
  description: 'Erfüllen Sie Ausschreibungs-Anforderungen (DIN 9001, 14001) mit dem NormCert Praxisnachweis für Gebäudereiniger. Kosteneffizient & Audit-erfahren. Mehr Aufträge!',
  // Weitere Metadaten wie keywords (obwohl weniger wichtig für Google heute), canonical URL etc. könnten hier hinzugefügt werden.
};

export default function ZertifizierungAusschreibungPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
       <section className="text-center">
         <h1 className="text-4xl font-bold text-blue-700 mb-4">
           Ausschreibungen gewinnen: Der smarte Qualitäts- & Umweltnachweis für Gebäudereiniger
         </h1>
         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
           Frustriert über verlorene Ausschreibungen wegen fehlender Nachweise nach DIN 9001 oder DIN 14001? Ist Ihnen die klassische ISO-Zertifizierung zu teuer und aufwändig? <strong>NormCert bietet die praxisnahe Alternative!</strong>
         </p>
       </section>

      <section className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Die Lösung: Praxisnachweis statt teurem Zertifikat – entwickelt vom Experten</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
                <p className="text-gray-700 mb-4">
                  Als **Adiutor bei NormCert** kenne ich die Anforderungen von Ausschreibungen genau. Oft ist kein voll akkreditiertes ISO-Zertifikat nötig, sondern der **Nachweis eines funktionierenden QM/UM-Systems**. Genau diesen praxisnahen, effizienten Nachweis bieten wir – speziell für Gebäudereiniger.
                </p>
                <p className="text-gray-700 italic">
                    Wichtig: Wir prüfen gemeinsam, ob für Ihre Ziel-Ausschreibungen unser praxisnaher Nachweis ausreicht oder ob explizit eine akkreditierte Zertifizierung gefordert wird.
                </p>
             </div>
             <div className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Basierend auf Standards:</h3>
                 <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li><Link href="/din-9001-gebaeudereiniger" className="hover:underline">DIN EN ISO 9001 (Qualität)</Link></li>
                      <li><Link href="/din-14001-gebaeudereiniger" className="hover:underline">DIN EN ISO 14001 (Umwelt)</Link></li>
                      <li>Branchenspezifische Anforderungen</li>
                 </ul>
                 <Link href="/werkzeuge/ausschreibung-checkliste" className="text-blue-600 hover:underline mt-3 inline-block text-sm font-semibold">
                    Zur interaktiven Ausschreibungs-Checkliste →
                  </Link>
             </div>
         </div>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Ihr Schlüssel zu mehr Ausschreibungserfolg</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
                {/* Vorteil 1 */}
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="font-semibold mb-1">Anforderungen erfüllen</h3>
                  <p className="text-sm text-gray-600">Decken Sie relevante QM/UM-Punkte für Vergaben ab.</p>
                </div>
                 {/* Vorteil 2 */}
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M15 8a3 3 0 10-6 0 3 3 0 006 0z" /></svg>
                  <h3 className="font-semibold mb-1">Kosten & Zeit sparen</h3>
                  <p className="text-sm text-gray-600">Deutlich günstiger & schneller als klassische ISO-Zertifizierung.</p>
                </div>
                 {/* Vorteil 3 */}
                 <div className="p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                   <h3 className="font-semibold mb-1">Praxisrelevanz</h3>
                   <p className="text-sm text-gray-600">Ein System, das im Alltag hilft, nicht nur auf dem Papier.</p>
                 </div>
                 {/* Vorteil 4 */}
                <div className="p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   <h3 className="font-semibold mb-1">Glaubwürdigkeit</h3>
                   <p className="text-sm text-gray-600">Ein vom Branchen-Insider entwickelter Nachweis schafft Vertrauen.</p>
                </div>
                {/* Vorteil 5 */}
                <div className="p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                  <h3 className="font-semibold mb-1">Höhere Zuschlagschancen</h3>
                  <p className="text-sm text-gray-600">Demonstrieren Sie Professionalität & erfüllen Sie K.O.-Kriterien.</p>
                </div>
                 {/* Vorteil 6 */}
                 <div className="p-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5l-3 3m0 0l-3-3m3 3V9" /></svg>
                  <h3 className="font-semibold mb-1">KMU-Fokus</h3>
                  <p className="text-sm text-gray-600">Speziell auf die Bedürfnisse kleiner & mittlerer Betriebe zugeschnitten.</p>
                </div>
             </div>
       </section>

      <section className="text-center mt-12 border-t pt-10">
        <h2 className="text-3xl font-semibold mb-5 text-blue-700">Schluss mit verlorenen Ausschreibungen!</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Sichern Sie sich jetzt Ihren Wettbewerbsvorteil. Lassen Sie uns unverbindlich besprechen, wie Sie mit dem richtigen Nachweis von NormCert bei der nächsten Vergabe punkten.</p>
        <Link href="/kontakt"
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
          Jetzt Strategiegespräch anfordern
        </Link>
        <p className="mt-4">
         <Link href="/qm-fuer-ausschreibungen" className="text-blue-600 hover:underline">
            Mehr Details zu QM speziell für Ausschreibungen &rarr;
         </Link>
        </p>
      </section>
    </div>
  );
} 