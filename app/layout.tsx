import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://modoanden.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'ModoAndén — Escapadas y viajes sin coche',
    template: '%s | ModoAndén',
  },
  description:
    'Escapadas fáciles de organizar sin necesidad de coche. Selección curada de destinos accesibles en tren o bus. Decide rápido, reserva sin perder tiempo.',
  keywords: ['escapadas sin coche', 'viajes en tren', 'fin de semana sin coche', 'escapadas España'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ModoAndén — Escapadas y viajes sin coche',
    description:
      'Escapadas fáciles de organizar sin coche. Destinos accesibles en tren o bus desde las principales ciudades de España.',
    url: '/',
    siteName: 'ModoAndén',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModoAndén — Escapadas y viajes sin coche',
    description:
      'Escapadas fáciles de organizar sin coche. Destinos accesibles en tren o bus desde las principales ciudades de España.',
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
  return (
    <html lang="es" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
