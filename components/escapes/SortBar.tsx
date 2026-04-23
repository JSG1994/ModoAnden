'use client'

import type { SortOption } from '@/lib/filters'

interface Props {
  count: number
  sort: SortOption
  onSortChange: (s: SortOption) => void
}

export default function SortBar({ count, sort, onSortChange }: Props) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-200">
      <p className="text-sm text-slate-500">{count} escapada{count !== 1 ? 's' : ''}</p>
      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-xs text-slate-400">Ordenar por</label>
        <select
          id="sort"
          value={sort}
          onChange={e => onSortChange(e.target.value as SortOption)}
          className="text-sm border border-slate-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-brand-accent"
        >
          <option value="relevancia">Relevancia</option>
          <option value="destacados">Destacados</option>
        </select>
      </div>
    </div>
  )
}
