import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadaten für die Leistungsseite
export const metadata: Metadata = {
  title: 'Leistungen: Qualitätsnachweis & Zertifikat für Gebäudereiniger',
  description: 'Unser praxisnaher Qualitäts- & Umweltnachweis (QM/UM) für Gebäudereiniger. Effizient, verständlich und auf Ihren Betrieb zugeschnitten. Alternative zur ISO.',
  // Weitere Metadaten könnten hier hinzugefügt werden.
};

export default function LeistungenPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">
        Unsere Leistung: Ihr praxisnaher Qualitäts- & Umweltnachweis
      </h1>

      <section>
        <p className="text-lg text-gray-700 mb-4">
          Sie sind Gebäudereiniger und suchen nach einem Weg, Ihre Qualität und Ihr Umweltbewusstsein sichtbar zu machen – ohne den komplexen und oft teuren Weg über eine DIN ISO-Zertifizierung? Genau hier setzen wir an.
        </p>
        <p className="text-lg text-gray-700">
          Wir bieten Ihnen einen <strong>maßgeschneiderten Qualitäts- und Umweltnachweis (QM/UM)</strong>, der speziell auf die Bedürfnisse und Realitäten von Reinigungsunternehmen zugeschnitten ist. Unser Ziel: Maximaler praktischer Nutzen für Sie, minimaler bürokratischer Aufwand.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Der Weg zu Ihrem Nachweis: Effizient & Verständlich</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unser Prozess ist darauf ausgelegt, Sie schnell und unkompliziert ans Ziel zu bringen:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-700">
          <li>
            <strong>Kostenloses Erstgespräch:</strong> Wir lernen uns kennen und besprechen Ihre Ziele und die spezifischen Gegebenheiten Ihres Betriebs.
          </li>
          <li>
            <strong>Bestandsaufnahme & Planung:</strong> Gemeinsam analysieren wir Ihre bestehenden Abläufe und definieren die relevanten QM- und UM-Aspekte.
          </li>
          <li>
            <strong>Umsetzung mit Unterstützung:</strong> Wir stellen Ihnen verständliche Vorlagen und Anleitungen zur Verfügung und begleiten Sie bei der Implementierung der notwendigen Maßnahmen (z.B. Arbeitsanweisungen, Checklisten, Mitarbeiterschulung).
          </li>
          <li>
            <strong>Praxis-Audit:</strong> Ein interner Audit stellt sicher, dass die Systeme funktionieren und die Anforderungen erfüllt sind. Wir prüfen die praktische Umsetzung, nicht nur Papier.
          </li>
          <li>
            <strong>Zertifikatserteilung:</strong> Nach erfolgreichem Audit erhalten Sie Ihren Qualitäts- und Umweltnachweis, der Ihr Engagement für Professionalität und Nachhaltigkeit bestätigt.
          </li>
        </ol>
        <p className="mt-4 text-md text-gray-600">
          Die Dauer des Prozesses hängt von der Größe Ihres Betriebs und den vorhandenen Strukturen ab, ist aber in der Regel deutlich kürzer und kostengünstiger als eine formale ISO-Zertifizierung.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Was beinhaltet der Nachweis? Fokus auf das Wesentliche</h2>
        <p className="text-lg text-gray-700 mb-4">
          Unser QM/UM-Nachweis deckt die Kernbereiche ab, die für Gebäudereiniger relevant sind. Damit können Sie nicht nur <Link href="/(landingpages)/qualitaetsnachweis-gebaeudereinigung" className="text-green-600 hover:underline">Ihre Effizienz steigern und Kunden überzeugen</Link>, sondern erfüllen auch wichtige <Link href="/(landingpages)/zertifizierung-ausschreibung" className="text-blue-600 hover:underline">Anforderungen bei Ausschreibungen</Link>. Die Kernpunkte sind:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded border">
            <h3 className="font-semibold text-xl mb-2">Qualitätsmanagement (QM)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Strukturierte Arbeitsabläufe & Anweisungen</li>
              <li>Regelmäßige Qualitätskontrollen</li>
              <li>Systematischer Umgang mit Reklamationen</li>
              <li>Mitarbeiterschulung & Qualifikation</li>
              <li>Dokumentenmanagement (vereinfacht)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded border">
            <h3 className="font-semibold text-xl mb-2">Umweltmanagement (UM)</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Einsatz umweltfreundlicher Reinigungsmittel</li>
              <li>Richtige Dosierung & Anwendungstechnik</li>
              <li>Abfallvermeidung & -trennung</li>
              <li>Wassersparmaßnahmen</li>
              <li>Schulung zum umweltbewussten Handeln</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optional: Abschnitt für weitere Leistungen */} 
      {/* 
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Weitere Unterstützungsangebote</h2>
        <p className="text-lg text-gray-700">...</p>
      </section>
      */}

      <section className="text-center mt-10 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">Interessiert an einem Qualitätsnachweis, der wirklich zu Ihnen passt?</h2>
          <p className="text-lg text-gray-700 mb-6">Lassen Sie uns unverbindlich besprechen, wie wir Sie unterstützen können.</p>
          <Link href="/kontakt"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Jetzt Erstgespräch vereinbaren
          </Link>
      </section>

    </div>
  );
} 