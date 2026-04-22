'use client'

import type { SortOption } from '@/lib/filters'

interface SortBarProps {
  sort: SortOption
  total: number
  onChange: (sort: SortOption) => void
}

const options: { value: SortOption; label: string }[] = [
  { value: 'relevancia', label: 'Relevancia' },
  { value: 'destacados', label: 'Destacadas primero' },
  { value: 'presupuesto-asc', label: 'Precio: menor a mayor' },
  { value: 'presupuesto-desc', label: 'Precio: mayor a menor' },
  { value: 'duracion-asc', label: 'Más cortas primero' },
]

export default function SortBar({ sort, total, onChange }: SortBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <p className="text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{total}</span>{' '}
        {total === 1 ? 'escapada encontrada' : 'escapadas encontradas'}
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort-select" className="text-xs text-slate-500 font-medium whitespace-nowrap">
          Ordenar por
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={e => onChange(e.target.value as SortOption)}
          className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
