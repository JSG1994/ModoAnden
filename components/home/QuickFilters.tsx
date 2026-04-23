'use client'

import Link from 'next/link'
import { Clock, Search } from 'lucide-react'

const durations = [
  { nights: 1, label: '1 noche' },
  { nights: 2, label: '2 noches' },
  { nights: 3, label: '3 noches' },
]

export default function QuickFilters() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
          <Clock size={15} className="text-brand-accent" />
          Duracion:
        </div>
        <div className="flex gap-2">
          {durations.map(d => (
            <Link
              key={d.nights}
              href={`/escapadas?noches=${d.nights}`}
              className="text-sm px-4 py-1.5 rounded-full border border-slate-300 hover:border-brand-accent hover:text-brand-accent transition-colors"
            >
              {d.label}
            </Link>
          ))}
        </div>
        <Link
          href="/escapadas"
          className="ml-auto flex items-center gap-1.5 text-sm font-medium text-brand-accent hover:underline"
        >
          <Search size={14} />
          Ver todas
        </Link>
      </div>
    </section>
  )
}
