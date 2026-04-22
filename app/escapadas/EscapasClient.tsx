'use client'

import { useState } from 'react'
import { escapes } from '@/data/escapes'
import { filterEscapes, sortEscapes, type SortOption } from '@/lib/filters'
import type { FilterState } from '@/types'
import EscapeCard from '@/components/escapes/EscapeCard'
import FilterSidebar from '@/components/escapes/FilterSidebar'
import SortBar from '@/components/escapes/SortBar'
import EmptyState from '@/components/ui/EmptyState'
import { SlidersHorizontal, X } from 'lucide-react'

const defaultFilters: FilterState = {
  departureCity: '',
  durationNights: null,
  budgetLevel: null,
  category: null,
  carRequired: null,
}

interface EscapasClientProps {
  initialCity?: string
  initialDuration?: string
  initialBudget?: string
  initialNoCar?: boolean
}

export default function EscapasClient({
  initialCity = '',
  initialDuration = '',
  initialBudget = '',
  initialNoCar = false,
}: EscapasClientProps) {
  const [filters, setFilters] = useState<FilterState>({
    ...defaultFilters,
    departureCity: initialCity,
    durationNights: initialDuration ? Number(initialDuration) : null,
    budgetLevel: initialBudget as FilterState['budgetLevel'] || null,
    carRequired: initialNoCar ? false : null,
  })
  const [sort, setSort] = useState<SortOption>('relevancia')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filtered = filterEscapes(escapes, filters)
  const sorted = sortEscapes(filtered, sort)

  const hasActiveFilters =
    filters.departureCity !== '' ||
    filters.durationNights !== null ||
    filters.budgetLevel !== null ||
    filters.category !== null ||
    filters.carRequired !== null

  function resetFilters() {
    setFilters(defaultFilters)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Escapadas</h1>
        <p className="text-slate-600">
          Selección de escapadas de 1 a 3 noches. Filtra por lo que necesitas y decide rápido.
        </p>
      </div>

      <div className="flex lg:hidden mb-4 justify-between items-center gap-3">
        <button
          onClick={() => setSidebarOpen(v => !v)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filtros
          {hasActiveFilters && (
            <span className="w-5 h-5 rounded-full bg-teal-600 text-white text-xs flex items-center justify-center">
              !
            </span>
          )}
        </button>
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X size={14} />
            Limpiar
          </button>
        )}
      </div>

      {sidebarOpen && (
        <div className="lg:hidden mb-6 bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
          <FilterSidebar filters={filters} onChange={setFilters} onReset={resetFilters} />
        </div>
      )}

      <div className="flex gap-8">
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-20">
            <FilterSidebar filters={filters} onChange={setFilters} onReset={resetFilters} />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <SortBar sort={sort} total={sorted.length} onChange={setSort} />
          {sorted.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {sorted.map(escape => (
                <EscapeCard key={escape.id} escape={escape} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
