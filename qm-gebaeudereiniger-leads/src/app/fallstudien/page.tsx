import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next'; // Import Metadata type

// SEO Metadaten für die Übersichtsseite
export const metadata: Metadata = {
  title: 'Fallstudien Gebäudereinigung | Erfolgsbeispiele | NormCert',
  description: 'Lesen Sie Erfolgsgeschichten von Gebäudereinigern, die mit NormCert ihre Qualität verbesserten, Audits bestanden und Ausschreibungen gewonnen haben.',
};

// Daten für Fallstudien (später ggf. aus CMS oder DB laden)
const fallstudien = [
  {
    slug: 'kmu-gewinnt-ausschreibung-mit-qm', // Slug entspricht dem Verzeichnisnamen
    title: 'KMU Gebäudereiniger gewinnt Ausschreibung dank praxisnahem QM',
    summary: 'Wie die "SauberGlanz Gebäudeservice GmbH" durch ein maßgeschneidertes QM-System von NormCert eine wichtige Ausschreibung für ein Verwaltungsgebäude gewann.'
  },
  {
    slug: 'arztpraxis-hygiene-optimiert',
    title: 'Arztpraxis optimiert Hygiene & Abläufe mit QM',
    summary:
      'Wie eine Arztpraxis durch ein einfaches QM-System die Hygiene verbesserte und das Praxisteam entlastete.',
  },
  {
    slug: 'effizienz-kostenreduktion-durch-qm',
    title: 'Effizienz & Kostenreduktion durch QM bei Blitz-Blank',
    summary:
      'Erfahren Sie, wie die Gebäudereinigung Blitz-Blank durch Prozessoptimierung Kosten senkte und die Mitarbeiterzufriedenheit steigerte.',
  },
  {
    slug: 'ausschreibung-gewonnen-dank-qm',
    title: 'Ausschreibung gewonnen dank QM: Gebäudereinigung Klar & Rein',
    summary:
      'Wie der Nachweis eines ISO 9001 Systems half, einen wichtigen öffentlichen Auftrag zu sichern.',
  },
  // Füge hier weitere Fallstudien hinzu, sobald sie als Seiten existieren
];

export default function FallstudienPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-gray-800 border-b pb-3">
          Erfolgsgeschichten & Fallstudien
        </h1>
        <p className="text-lg text-gray-600">
          Sehen Sie anhand konkreter Beispiele, wie Gebäudereinigungsunternehmen von unserem praxisnahen Ansatz für Qualitäts- und Umweltmanagement profitieren und ihre Ziele erreichen.
        </p>

        <div className="space-y-6">
          {fallstudien.length > 0 ? (
            fallstudien.map((studie) => (
              <div key={studie.slug} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
                <h2 className="text-xl font-semibold text-blue-700 mb-2">
                  <Link href={`/fallstudien/${studie.slug}`} className="hover:underline">
                    {studie.title}
                  </Link>
                </h2>
                <p className="text-gray-700 mb-3">{studie.summary}</p>
                <Link href={`/fallstudien/${studie.slug}`} className="text-blue-600 font-semibold hover:underline">
                  Zur Fallstudie &raquo;
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">Aktuell sind noch keine Fallstudien verfügbar. Schauen Sie bald wieder vorbei!</p>
          )}
        </div>
      </div>
    </div>
  );
} 