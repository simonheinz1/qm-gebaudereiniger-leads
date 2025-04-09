import { MetadataRoute } from 'next'

// TODO: Dynamische Routen (Blog, Fallstudien, Landingpages) hinzufügen
// TODO: Basis-URL aus Umgebungsvariablen holen
const BASE_URL = 'https://DEINE_DOMAIN.de'; // Bitte anpassen!

export default function sitemap(): MetadataRoute.Sitemap {
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
    // Füge hier weitere statische oder später dynamische URLs hinzu
  ]
} 