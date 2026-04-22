import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'VELQIA — Escapadas cortas fáciles de organizar',
    template: '%s | VELQIA',
  },
  description:
    'Encuentra escapadas de 1 a 3 noches fáciles de organizar, sin coche o con logística sencilla. Selección curada para decidir rápido y reservar sin perder tiempo.',
  keywords: ['escapadas', 'viajes cortos', 'fin de semana', 'sin coche', 'escapadas España'],
  openGraph: {
    title: 'VELQIA — Escapadas cortas fáciles de organizar',
    description:
      'Selección curada de escapadas de 1 a 3 noches. Filtra por ciudad de salida, presupuesto y tipo de plan. Reserva rápido.',
    siteName: 'VELQIA',
    locale: 'es_ES',
    type: 'website',
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
