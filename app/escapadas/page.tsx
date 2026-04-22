import type { Metadata } from 'next'
import EscapasClient from './EscapasClient'

export const metadata: Metadata = {
  title: 'Escapadas',
  description:
    'Explora todas las escapadas de VELQIA. Filtra por ciudad de salida, duración, presupuesto y si necesitas coche. Decide en minutos.',
}

interface Props {
  searchParams: {
    city?: string
    duration?: string
    budget?: string
    noCar?: string
  }
}

export default function EscapadasPage({ searchParams }: Props) {
  return (
    <EscapasClient
      initialCity={searchParams.city ?? ''}
      initialDuration={searchParams.duration ?? ''}
      initialBudget={searchParams.budget ?? ''}
      initialNoCar={searchParams.noCar === '1'}
    />
  )
}
