import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://modoanden.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  manifest: '/manifest.webmanifest',
  title: {
    default: 'ModoAndén — Escapadas y viajes sin coche',
    template: '%s | ModoAndén',
  },
  description:
    'Escapadas fáciles de organizar sin necesidad de coche. Selección curada de destinos accesibles en tren o bus. Decide rápido, reserva sin perder tiempo.',
  keywords: ['escapadas sin coche', 'viajes en tren', 'fin de semana sin coche', 'escapadas España', 'viajes en tren desde Madrid', 'destinos accesibles sin coche'],
  authors: [{ name: 'ModoAndén', url: siteUrl }],
  creator: 'ModoAndén',
  publisher: 'ModoAndén',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': `${siteUrl}`,
      'es': `${siteUrl}`,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/brand/logo-modoanden.png', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/brand/logo-modoanden.png', type: 'image/png' }],
  },
  openGraph: {
    title: 'ModoAndén — Escapadas y viajes sin coche',
    description:
      'Escapadas fáciles de organizar sin coche. Destinos accesibles en tren o bus desde las principales ciudades de España.',
    url: '/',
    images: [
      {
        url: '/brand/logo-modoanden.png',
        width: 1024,
        height: 768,
        alt: 'ModoAndén - Escapadas y viajes sin coche',
      },
    ],
    siteName: 'ModoAndén',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModoAndén — Escapadas y viajes sin coche',
    description:
      'Escapadas fáciles de organizar sin coche. Destinos accesibles en tren o bus desde las principales ciudades de España.',
    images: ['/brand/logo-modoanden.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'ModoAndén',
    url: siteUrl,
    logo: `${siteUrl}/brand/logo-modoanden.png`,
    description: 'Recomendaciones de escapadas cortas por España sin necesidad de coche.',
    sameAs: ['https://www.instagram.com/modoanden', 'https://www.facebook.com/modoanden', 'https://twitter.com/modoanden'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'hola@modoanden.com',
      availableLanguage: 'es',
    },
    areaServed: 'ES',
    serviceType: 'Travel Planning',
  }

  return (
    <html lang="es" className={inter.className}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
