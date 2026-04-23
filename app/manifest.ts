import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ModoAndén - Escapadas y viajes sin coche',
    short_name: 'ModoAndén',
    description: 'Escapadas fáciles de organizar sin necesidad de coche.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f2c6e',
    lang: 'es-ES',
    icons: [
      {
        src: '/brand/logo-modoanden.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/brand/logo-modoanden.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
