import type { Category } from '@/types'

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function categoryLabel(category: Category): string {
  const map: Record<Category, string> = {
    naturaleza: 'Naturaleza',
    ciudad: 'Ciudad',
    playa: 'Playa',
    gastronomia: 'Gastronomia',
    cultura: 'Cultura',
    aventura: 'Aventura',
    relax: 'Relax',
  }
  return map[category]
}