import React from 'react';
import Link from 'next/link';

export default function BlogPage() {
  // Beispiel-Artikel (später dynamisch laden)
  const posts = [
    { slug: 'checkliste-ausschreibungen', title: 'Checkliste: Diese Anforderungen gelten bei Reinigungs-Ausschreibungen' },
    { slug: 'qm-mehrwert', title: 'QM in der Gebäudereinigung: Mehr als nur ein Zertifikat' },
  ];

  return (
    <div>
      <h1>Blog / Ratgeber</h1>
      <p>Hilfreiche Artikel rund um Qualitätsmanagement, Umweltmanagement und Ausschreibungen für Gebäudereiniger.</p>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 