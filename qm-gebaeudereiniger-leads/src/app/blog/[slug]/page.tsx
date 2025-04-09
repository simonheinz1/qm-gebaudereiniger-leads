import React from 'react';
import { notFound } from 'next/navigation'; // Für 404-Fehler

// Importiere die Artikel-Komponenten mit Alias-Pfad (ohne Endung)
import ChecklisteAusschreibungen from '@/app/blog/_posts/ChecklisteAusschreibungen';
// Importiere den neuen Artikel
import QmMehrwert from '@/app/blog/_posts/QmMehrwert';

// Mapping von Slug zu Komponente
const posts: { [key: string]: React.ComponentType } = {
  'checkliste-ausschreibungen': ChecklisteAusschreibungen,
  // Füge den neuen Artikel zum Mapping hinzu
  'qm-mehrwert': QmMehrwert,
};

// Diese Funktion wird verwendet, um die Parameter (hier: slug) aus der URL zu extrahieren.
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Finde die passende Komponente zum Slug
  const PostComponent = posts[slug];

  // Wenn kein Artikel zum Slug gefunden wurde, zeige 404-Seite
  if (!PostComponent) {
    notFound();
  }

  return (
    <div>
      {/* Rufe die gefundene Artikel-Komponente auf */}
      <PostComponent />
    </div>
  );
}

// Optional/Empfohlen: Statische Pfade generieren für bessere Performance
// Dies teilt Next.js mit, welche Blog-Slugs existieren.
export async function generateStaticParams() {
  // Gib ein Array von Objekten zurück, jedes mit einem `slug`-Property
  return Object.keys(posts).map((slug) => ({
    slug,
  }));
} 