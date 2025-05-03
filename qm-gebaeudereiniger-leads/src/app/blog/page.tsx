import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
// Importiere die neue Funktion zum Laden der Posts und den Typ
import { getSortedPostsData, PostData } from '../../../lib/posts'; // Korrekter relativer Pfad

// Metadaten für die Blog-Übersichtsseite
export const metadata: Metadata = {
  title: 'Blog & Ratgeber für Gebäudereiniger | QM/UM Praxis',
  description:
    'Aktuelle Artikel, Tipps und Checklisten zu Qualitätsmanagement, Umweltmanagement und Ausschreibungen für Gebäudereinigungsunternehmen.',
};

export default function BlogPage() {
  // Lade die sortierten Post-Daten beim Build der Seite
  const allPosts = getSortedPostsData();

  return (
    <div className="space-y-8 max-w-3xl mx-auto py-12 px-4"> {/* Layout angepasst */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b pb-4 mb-6">
        Blog / Ratgeber
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Hilfreiche Artikel rund um Qualitätsmanagement, Umweltmanagement,
        Kundengewinnung und Ausschreibungen für Gebäudereiniger.
      </p>

      {/* Liste der Blogbeiträge */}
      <ul className="space-y-8"> {/* Mehr Abstand */}
        {allPosts.length > 0 ? (
          allPosts.map(({ slug, date, title, description }: PostData) => (
            <li key={slug} className="border-b border-gray-200 pb-6"> {/* Dezentere Trennlinie */}
              <Link href={`/blog/${slug}`} className="group block">
                <h2 className="text-2xl font-semibold text-teal-700 group-hover:text-teal-800 group-hover:underline mb-2">
                  {title}
                </h2>
                {date && (
                  <p className="text-sm text-gray-500 mb-3">
                    Veröffentlicht am: {new Date(date).toLocaleDateString('de-DE', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}
                  </p>
                )}
                {description && (
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                )}
                 <span className="mt-3 inline-block text-teal-600 group-hover:text-teal-800 font-medium">
                    Weiterlesen →
                  </span>
              </Link>
            </li>
          ))
        ) : (
          <p>Momentan sind keine Beiträge verfügbar.</p>
        )}
      </ul>
    </div>
  );
} 