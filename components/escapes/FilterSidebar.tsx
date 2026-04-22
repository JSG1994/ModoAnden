'use client'

import type { FilterState, BudgetLevel, Category } from '@/types'
import { departureCities } from '@/data/escapes'

interface FilterSidebarProps {
  filters: FilterState
  onChange: (filters: FilterState) => void
  onReset: () => void
}

const budgetOptions: { value: BudgetLevel; label: string }[] = [
  { value: 'bajo', label: 'Presupuesto bajo' },
  { value: 'medio', label: 'Presupuesto medio' },
  { value: 'alto', label: 'Presupuesto alto' },
]

const categoryOptions: { value: Category; label: string }[] = [
  { value: 'cultura', label: 'Cultura' },
  { value: 'naturaleza', label: 'Naturaleza' },
  { value: 'gastronomia', label: 'Gastronomía' },
  { value: 'playa', label: 'Playa' },
  { value: 'ciudad', label: 'Ciudad' },
  { value: 'aventura', label: 'Aventura' },
  { value: 'relax', label: 'Relax' },
]

const durationOptions = [1, 2, 3]

const labelClass = 'block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2'
const selectClass =
  'w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500'

export default function FilterSidebar({ filters, onChange, onReset }: FilterSidebarProps) {
  function update(partial: Partial<FilterState>) {
    onChange({ ...filters, ...partial })
  }

  return (
    <aside className="space-y-6">
      <div>
        <label htmlFor="city-filter" className={labelClass}>Ciudad de salida</label>
        <select
          id="city-filter"
          value={filters.departureCity}
          onChange={e => update({ departureCity: e.target.value })}
          className={selectClass}
        >
          <option value="">Todas las ciudades</option>
          {departureCities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <p className={labelClass}>Duración</p>
        <div className="flex flex-wrap gap-2">
          {durationOptions.map(n => (
            <button
              key={n}
              onClick={() => update({ durationNights: filters.durationNights === n ? null : n })}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                filters.durationNights === n
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
              }`}
            >
              {n} {n === 1 ? 'noche' : 'noches'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className={labelClass}>Presupuesto</p>
        <div className="space-y-1.5">
          {budgetOptions.map(opt => (
            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="budget"
                value={opt.value}
                checked={filters.budgetLevel === opt.value}
                onChange={() =>
                  update({ budgetLevel: filters.budgetLevel === opt.value ? null : opt.value })
                }
                className="w-4 h-4 text-teal-600 border-slate-300 focus:ring-teal-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className={labelClass}>Tipo de plan</p>
        <div className="space-y-1.5">
          {categoryOptions.map(opt => (
            <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.category === opt.value}
                onChange={() =>
                  update({ category: filters.category === opt.value ? null : opt.value })
                }
                className="w-4 h-4 rounded text-teal-600 border-slate-300 focus:ring-teal-500"
              />
              <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.carRequired === false}
            onChange={e => update({ carRequired: e.target.checked ? false : null })}
            className="w-4 h-4 rounded text-teal-600 border-slate-300 focus:ring-teal-500"
          />
          <span className="text-sm font-medium text-slate-700">Solo sin coche</span>
        </label>
      </div>

      <button
        onClick={onReset}
        className="w-full text-sm text-slate-500 underline underline-offset-2 hover:text-slate-800 transition-colors text-left"
      >
        Limpiar filtros
      </button>
    </aside>
  )
}
