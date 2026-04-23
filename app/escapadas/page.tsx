import type { Metadata } from 'next'
import EscapasClient from './EscapasClient'

export const metadata: Metadata = {
  title: 'Escapadas sin coche',
  description: 'Encuentra tu proxima escapada sin coche.',
}

export default function EscapasPage() {
  return <EscapasClient />
}
