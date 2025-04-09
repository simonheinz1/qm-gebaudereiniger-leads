import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

// SEO Metadaten für die Über Uns Seite
export const metadata: Metadata = {
  title: 'Über Uns | Praxisnahes QM/UM für Gebäudereiniger | Ihr Vorteil',
  description: 'Erfahren Sie mehr über unseren praxisnahen Ansatz für Qualitäts- & Umweltmanagement (QM/UM) speziell für Gebäudereiniger. Die effiziente Alternative zur ISO-Norm.',
  // Weitere Metadaten könnten hier hinzugefügt werden.
};

export default function UeberUnsPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">
        Über Uns: Praxisnahes QM/UM für Gebäudereiniger
      </h1>

      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Wer wir sind & Was uns antreibt</h2>
        <p className="text-lg text-gray-700 mb-4">
          Wir sind [Dein Name / Name der Firma], Ihr spezialisierter Partner für Qualitäts- und Umweltmanagement in der Gebäudereinigungsbranche. Mit [Anzahl] Jahren Erfahrung in [Bereich, z.B. QM-Beratung, Gebäudereinigung selbst] verstehen wir die täglichen Herausforderungen und spezifischen Anforderungen Ihres Geschäfts.
        </p>
        <p className="text-lg text-gray-700">
          Unser Antrieb? Wir glauben fest daran, dass Managementsysteme <strong>praktischen Nutzen stiften</strong> und nicht nur bürokratische Hürden sein sollten. Deshalb haben wir einen Ansatz entwickelt, der sich auf das Wesentliche konzentriert: Ihre Prozesse zu verbessern, Ihre Kunden zufriedenzustellen und Ihnen einen echten Wettbewerbsvorteil zu verschaffen.
        </p>
      </section>

      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Ihr Vorteil: Der Praxis-Ansatz statt Standard-DIN</h2>
        <p className="text-lg text-gray-700 mb-4">
          Viele Gebäudereiniger scheuen den Aufwand und die Kosten einer formellen DIN ISO 9001/14001 Zertifizierung durch akkreditierte Stellen. Und das oft zu Recht! Häufig sind diese Prozesse überladen und wenig auf die Realität kleinerer und mittlerer Reinigungsbetriebe zugeschnitten.
        </p>
        <p className="text-lg text-gray-700 font-semibold mb-2">
          Unser Weg ist anders:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-4">
          <li><strong>Maßgeschneidert:</strong> Wir passen das QM/UM-System an Ihre Betriebsgröße und Ihre spezifischen Dienstleistungen an.</li>
          <li><strong>Effizient:</strong> Schlanke Dokumentation und Fokus auf die wirklich relevanten Prozesse sparen Ihnen Zeit und Geld.</li>
          <li><strong>Verständlich:</strong> Keine komplizierte Normensprache, sondern klare, umsetzbare Anleitungen und Vorlagen.</li>
          <li><strong>Begleitend:</strong> Wir unterstützen Sie persönlich bei der Einführung und Umsetzung – von Anfang bis Ende.</li>
          <li><strong>Anerkannt:</strong> Auch wenn nicht akkreditiert, dient unser Zertifikat vielen Kunden als glaubwürdiger Nachweis für funktionierende Qualitäts- und Umweltstandards.</li>
        </ul>
        <p className="text-lg text-gray-700">
          Das Ergebnis ist ein Managementsystem, das lebt, Ihnen im Alltag hilft und Ihre Chancen bei Ausschreibungen und Kundenakquise verbessert – ohne unnötigen Ballast.
          <Link href="/leistungen" className="text-blue-600 hover:underline ml-1">Erfahren Sie hier mehr über unsere Leistungen und den detaillierten Prozess.</Link>
        </p>
      </section>

      <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold mb-4">Bereit für einen unkomplizierten Weg zu mehr Qualität und Erfolg?</h2>
          <Link href="/kontakt"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Lassen Sie uns sprechen!
          </Link>
      </section>

    </div>
  );
} 