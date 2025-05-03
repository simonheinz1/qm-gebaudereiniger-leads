import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllPostSlugs, getPostData, PostData } from '../../../../lib/posts';

// Diese Funktion generiert die Metadaten für den Head der Seite
export async function generateMetadata({
  params,
}: { params: { slug: string } }): Promise<Metadata> {
  try {
    const post = getPostData(params.slug);
    return {
      title: `${post.title} | Blog Gebäudereinigung QM/UM`,
      description: post.description || 'Praxisnahe Tipps und Informationen für Gebäudereiniger.',
    };
  } catch (error) {
    // Wenn Post nicht gefunden wird, Standard-Metadaten oder Fehlerseite
    return {
      title: 'Artikel nicht gefunden',
      description: 'Dieser Blogartikel konnte nicht gefunden werden.',
    };
  }
}

// Diese Funktion generiert die statischen Pfade für alle Blogartikel beim Build
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

// Die eigentliche Seitenkomponente
export default async function PostPage({ params }: { params: { slug: string } }) {
  let post: PostData;
  try {
    post = getPostData(params.slug);
  } catch (error) {
    // Wenn der Post nicht gefunden wird (z.B. Tippfehler in URL), zeige 404-Seite
    notFound();
  }

  return (
    <article className="prose prose-teal lg:prose-xl max-w-3xl mx-auto py-12 px-4">
      {/* Breadcrumbs */}
       <div className="mb-6 text-sm text-gray-500 not-prose">
          <Link href="/" className="hover:text-teal-600">
            Startseite
          </Link>
          {' > '}
          <Link href="/blog" className="hover:text-teal-600">
            Blog
          </Link>
          {' > '} {post.title}
        </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>Veröffentlicht am: {new Date(post.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        {post.author && <span> | Von: {post.author}</span>}
      </div>

      {/* Hier wird der Markdown-Inhalt gerendert */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>

      {/* Zurück-Link */}
      <div className="mt-12 pt-6 border-t not-prose">
        <Link href="/blog" className="text-teal-600 hover:text-teal-800">
          ← Zurück zur Blog-Übersicht
        </Link>
      </div>
    </article>
  );
} 