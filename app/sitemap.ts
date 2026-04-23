import type { MetadataRoute } from 'next'
import { escapes } from '@/data/escapes'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://modoanden.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}/escapadas`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/sobre-nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/aviso-legal`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const escapeRoutes: MetadataRoute.Sitemap = escapes.map(escape => ({
    url: `${siteUrl}/escapadas/${escape.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...escapeRoutes]
}
