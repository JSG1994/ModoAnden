import type { Metadata } from 'next'
import EscapasClient from './EscapasClient'

export const metadata: Metadata = {
  title: 'Escapadas sin coche',
  description: 'Encuentra tu próxima escapada sin coche en España y filtra por ciudad de salida, categoría y duración.',
  alternates: {
    canonical: '/escapadas',
  },
  openGraph: {
    title: 'Escapadas sin coche | ModoAndén',
    description:
      'Descubre escapadas cortas en tren o bus. Filtra por salida, categoría y noches para encontrar tu plan ideal.',
    url: '/escapadas',
    type: 'website',
  },
}

export default function EscapasPage() {
  return <EscapasClient />
}
