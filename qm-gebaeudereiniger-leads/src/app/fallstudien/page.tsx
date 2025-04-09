import React from 'react';
import Link from 'next/link';

// Beispiel-Daten für Fallstudien (später durch echte Daten ersetzen)
const fallstudien = [
  {
    slug: 'gebaeudereinigung-mueller-klinikum',
    title: 'Gebäudereinigung Müller: Erfolgreich bei Klinikum-Ausschreibung dank Praxis-QM',
    summary: 'Wie ein mittelständischer Reiniger durch unser maßgeschneidertes System eine wichtige Ausschreibung gewann.'
  },
  {
    slug: 'reinigungsservice-schmidt-effizienz',
    title: 'Reinigungsservice Schmidt: Effizienzsteigerung und Kostensenkung im Fokus',
    summary: 'Durch optimierte Abläufe und gezielte Schulungen konnte der Materialverbrauch gesenkt und die Planung verbessert werden.'
  },
  // Füge hier weitere Fallstudien hinzu
];

export default function FallstudienPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-2">
        Erfolgsgeschichten & Fallstudien
      </h1>
      <p className="text-lg text-gray-600">
        Sehen Sie anhand konkreter Beispiele, wie Gebäudereinigungsunternehmen von unserem praxisnahen Ansatz für Qualitäts- und Umweltmanagement profitieren und ihre Ziele erreichen.
      </p>

      <div className="space-y-6">
        {fallstudien.length > 0 ? (
          fallstudien.map((studie) => (
            <div key={studie.slug} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {/* Später Link zur Detailseite: <Link href={`/fallstudien/${studie.slug}`}> */} 
                {studie.title}
                {/* </Link> */} 
              </h2>
              <p className="text-gray-700 mb-3">{studie.summary}</p>
              {/* Später Link zur Detailseite */}
              {/* <Link href={`/fallstudien/${studie.slug}`} className="text-blue-600 font-semibold hover:underline">
                Mehr lesen &raquo;
              </Link> */}
              <p className="text-sm text-gray-500">(Detailseite folgt in Kürze)</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">Aktuell sind noch keine Fallstudien verfügbar. Schauen Sie bald wieder vorbei!</p>
        )}
      </div>
    </div>
  );
} 