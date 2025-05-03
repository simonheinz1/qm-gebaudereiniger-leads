import { MetadataRoute } from 'next'

// TODO: Dynamische Routen (Blog, Fallstudien, Landingpages) hinzufügen
// TODO: Basis-URL aus Umgebungsvariablen holen
const BASE_URL = 'https://qm-gebaeudereiniger.de'; // Angepasst!

export default function sitemap(): MetadataRoute.Sitemap {
  // Liste der Landing Page Pfade (ohne BASE_URL)
  const landingPages = [
    '/din-9001-gebaeudereiniger',
    '/din-14001-gebaeudereiniger',
    '/kunden-gewinnen-gebaeudereiniger',
    '/qm-fuer-ausschreibungen',
    '/zertifizierung-ausschreibung',
    '/praxis-qm-gebaeudereiniger',
    '/lebensmittelindustrie-gastronomie-reinigung',
    '/kmu-qm-gebaeudereiniger',
    '/krankenhausreinigung-qm',
    '/qualitaetsnachweis-gebaeudereinigung',
    '/nachhaltigkeit-gebaeudereinigung',
    '/nachhaltigkeit-gebaeudereiniger',
     // Füge hier weitere Landing Pages hinzu, falls nötig
  ];

  const landingPageEntries = landingPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[0]['changeFrequency'], // Korrekter Typ
    priority: 0.7,
  }));


  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ueber-uns`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Dynamisch hinzugefügte Landing Pages
    ...landingPageEntries,
    // Füge hier weitere statische oder später dynamische URLs hinzu (z.B. Blog, Werkzeuge)
  ]
} 