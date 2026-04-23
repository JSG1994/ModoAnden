'use client'

import { useState } from 'react'
import { escapes } from '@/data/escapes'
import { filterEscapes, sortEscapes } from '@/lib/filters'
import type { SortOption } from '@/lib/filters'
import type { FilterState } from '@/types'
import FilterSidebar from '@/components/escapes/FilterSidebar'
import SortBar from '@/components/escapes/SortBar'
import EscapeCard from '@/components/escapes/EscapeCard'
import EmptyState from '@/components/ui/EmptyState'

const defaultFilters: FilterState = {
  departureCity: '',
  durationNights: null,
  category: null,
}

export default function EscapasClient() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [sort, setSort] = useState<SortOption>('relevancia')

  const filtered = filterEscapes(escapes, filters)
  const sorted = sortEscapes(filtered, sort)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-4 gap-8">
        <aside className="col-span-1">
          <FilterSidebar filters={filters} onChange={setFilters} />
        </aside>
        <div className="col-span-3">
          <SortBar count={sorted.length} sort={sort} onSortChange={setSort} />
          {sorted.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid gap-6 mt-6">
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
