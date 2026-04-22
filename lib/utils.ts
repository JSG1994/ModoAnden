import type { BudgetLevel, Category } from '@/types'

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function budgetLevelLabel(level: BudgetLevel): string {
  const map: Record<BudgetLevel, string> = {
    bajo: 'Presupuesto bajo',
    medio: 'Presupuesto medio',
    alto: 'Presupuesto alto',
  }
  return map[level]
}

export function budgetLevelColor(level: BudgetLevel): string {
  const map: Record<BudgetLevel, string> = {
    bajo: 'bg-emerald-100 text-emerald-800',
    medio: 'bg-amber-100 text-amber-800',
    alto: 'bg-rose-100 text-rose-800',
  }
  return map[level]
}

export function categoryLabel(category: Category): string {
  const map: Record<Category, string> = {
    naturaleza: 'Naturaleza',
    ciudad: 'Ciudad',
    playa: 'Playa',
    gastronomia: 'Gastronomía',
    cultura: 'Cultura',
    aventura: 'Aventura',
    relax: 'Relax',
  }
  return map[category]
}

export function durationLabel(nights: number): string {
  return nights === 1 ? '1 noche' : `${nights} noches`
}

export function transportLabel(type: string): string {
  const map: Record<string, string> = {
    tren: 'Tren',
    bus: 'Bus',
    coche: 'Coche',
    avion: 'Avión',
    mixto: 'Mixto',
  }
  return map[type] ?? type
}
