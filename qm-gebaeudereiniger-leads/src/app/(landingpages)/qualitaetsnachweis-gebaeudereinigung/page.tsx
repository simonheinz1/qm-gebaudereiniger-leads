import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadaten für die Seite
export const metadata: Metadata = {
  title: 'Praxisnaher Qualitätsnachweis Gebäudereinigung | Effizienz steigern & Kunden überzeugen',
  description: 'Verbessern Sie Abläufe und überzeugen Sie Kunden mit unserem Qualitäts- & Umweltnachweis für Gebäudereiniger. Praxisnah, effizient, ohne ISO-Bürokratie.',
  // Weitere Metadaten könnten hier hinzugefügt werden.
};

export default function QualitaetsnachweisPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-green-700">
        Praxisnaher Qualitätsnachweis Gebäudereinigung: Effizienz steigern & Kunden überzeugen
      </h1>
      <p className="text-lg">
        Sie möchten Ihre Abläufe verbessern, Kunden begeistern und Ihr Team stärken, ohne sich in komplexer Bürokratie zu verlieren? Unser praxisorientierter Ansatz für Qualitäts- und Umweltmanagement ist speziell für die Gebäudereinigungsbranche entwickelt.
      </p>

      <div className="p-4 bg-green-50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-3">Ihre Vorteile auf einen Blick:</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Effizienz steigern:</strong> Optimierte Prozesse sparen Zeit und Kosten bei der täglichen Arbeit.
          </li>
          <li>
            <strong>Kunden überzeugen:</strong> Ein sichtbarer Qualitätsnachweis und gelebtes Umweltbewusstsein schaffen Vertrauen und binden Kunden langfristig.
          </li>
          <li>
            <strong>Mitarbeiter motivieren:</strong> Klare Abläufe und Verantwortlichkeiten fördern die Zufriedenheit im Team.
          </li>
          <li>
            <strong>Rechtssicherheit erhöhen:</strong> Systematische Einhaltung von Vorschriften minimiert Risiken.
          </li>
          <li>
            <strong>Fokus auf das Wesentliche:</strong> Wir konzentrieren uns auf das, was Ihnen in der Praxis wirklich hilft – ohne unnötigen Ballast.
          </li>
        </ul>
        <p>
          Im Gegensatz zur reinen DIN ISO-Zertifizierung steht bei unserem Ansatz der direkte, praktische Nutzen für Ihr Gebäudereinigungs-Unternehmen im Vordergrund – weniger Theorie, mehr spürbare Verbesserung im Arbeitsalltag.
        </p>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold mb-4">Bereit für spürbare Verbesserungen in Ihrem Betrieb?</h2>
        <p className="mb-4">Lassen Sie uns unverbindlich darüber sprechen, wie unser Ansatz Ihr Unternehmen voranbringen kann.</p>
        <Link href="/kontakt"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
          Kostenloses Erstgespräch vereinbaren
        </Link>
      </div>
    </div>
  );
} 