'use client'

import type { FilterState, Category } from '@/types'
import { departureCities } from '@/data/escapes'

const categories: Category[] = ['ciudad', 'naturaleza', 'playa', 'cultura', 'gastronomia']
const durations = [1, 2, 3]

interface Props {
  filters: FilterState
  onChange: (f: FilterState) => void
}

export default function FilterSidebar({ filters, onChange }: Props) {
  function setCity(departureCity: string) {
    onChange({ ...filters, departureCity })
  }

  function setNights(durationNights: number | null) {
    onChange({ ...filters, durationNights: filters.durationNights === durationNights ? null : durationNights })
  }

  function setCategory(category: Category | null) {
    onChange({ ...filters, category: filters.category === category ? null : category })
  }

  function clear() {
    onChange({ departureCity: '', durationNights: null, category: null })
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Ciudad de salida</label>
        <select
          value={filters.departureCity}
          onChange={e => setCity(e.target.value)}
          className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          <option value="">Todas</option>
          {departureCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Duracion</p>
        <div className="flex flex-wrap gap-2">
          {durations.map(n => (
            <button
              key={n}
              onClick={() => setNights(n)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${filters.durationNights === n ? 'bg-brand-accent text-white border-brand-accent' : 'border-slate-300 hover:border-brand-accent'}`}
            >
              {n} noche{n > 1 ? 's' : ''}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Categoria</p>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm border capitalize transition-colors ${filters.category === cat ? 'bg-brand-accent text-white border-brand-accent' : 'border-slate-300 hover:border-brand-accent'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <button onClick={clear} className="text-xs text-slate-400 hover:text-slate-700 underline">
        Limpiar filtros
      </button>
    </div>
  )
}
