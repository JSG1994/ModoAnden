import type { Escape, FilterState } from '@/types'

export type SortOption = 'relevancia' | 'destacados'

export function filterEscapes(escapes: Escape[], filters: FilterState): Escape[] {
  return escapes.filter(e => {
    if (filters.departureCity && e.departureCity !== filters.departureCity) return false
    if (filters.durationNights !== null && !e.durationVariants.some(d => d.nights === filters.durationNights)) return false
    if (filters.category && e.category !== filters.category) return false
    return true
  })
}

export function sortEscapes(escapes: Escape[], sort: SortOption): Escape[] {
  if (sort === 'destacados') return [...escapes].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  return escapes
}

export function getEscapeBySlug(escapes: Escape[], slug: string): Escape | undefined {
  return escapes.find(e => e.slug === slug)
}