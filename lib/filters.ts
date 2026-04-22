import type { Escape, FilterState, BudgetLevel } from '@/types'

export type SortOption = 'relevancia' | 'presupuesto-asc' | 'presupuesto-desc' | 'duracion-asc' | 'destacados'

function budgetOrder(level: BudgetLevel): number {
  return { bajo: 1, medio: 2, alto: 3 }[level]
}

export function filterEscapes(escapes: Escape[], filters: FilterState): Escape[] {
  return escapes.filter(escape => {
    if (filters.departureCity && escape.departureCity !== filters.departureCity) return false
    if (filters.durationNights !== null && escape.durationNights !== filters.durationNights) return false
    if (filters.budgetLevel !== null && escape.budgetLevel !== filters.budgetLevel) return false
    if (filters.category !== null && escape.category !== filters.category) return false
    if (filters.carRequired !== null && escape.carRequired !== filters.carRequired) return false
    return true
  })
}

export function sortEscapes(escapes: Escape[], sort: SortOption): Escape[] {
  const copy = [...escapes]
  switch (sort) {
    case 'destacados':
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured))
    case 'presupuesto-asc':
      return copy.sort((a, b) => budgetOrder(a.budgetLevel) - budgetOrder(b.budgetLevel))
    case 'presupuesto-desc':
      return copy.sort((a, b) => budgetOrder(b.budgetLevel) - budgetOrder(a.budgetLevel))
    case 'duracion-asc':
      return copy.sort((a, b) => a.durationNights - b.durationNights)
    default:
      return copy
  }
}

export function getEscapeBySlug(escapes: Escape[], slug: string): Escape | undefined {
  return escapes.find(e => e.slug === slug)
}
