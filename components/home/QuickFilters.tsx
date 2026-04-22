'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'

const cities = ['Madrid', 'Barcelona', 'Sevilla', 'Bilbao']
const durations = [
  { value: '', label: 'Cualquier duración' },
  { value: '1', label: '1 noche' },
  { value: '2', label: '2 noches' },
  { value: '3', label: '3 noches' },
]
const budgets = [
  { value: '', label: 'Cualquier presupuesto' },
  { value: 'bajo', label: 'Presupuesto bajo' },
  { value: 'medio', label: 'Presupuesto medio' },
  { value: 'alto', label: 'Presupuesto alto' },
]

export default function QuickFilters() {
  const router = useRouter()
  const [city, setCity] = useState('')
  const [duration, setDuration] = useState('')
  const [budget, setBudget] = useState('')
  const [noCar, setNoCar] = useState(false)

  function handleSearch() {
    const params = new URLSearchParams()
    if (city) params.set('city', city)
    if (duration) params.set('duration', duration)
    if (budget) params.set('budget', budget)
    if (noCar) params.set('noCar', '1')
    router.push(`/escapadas?${params.toString()}`)
  }

  const selectClass =
    'w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Busca tu escapada</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <select value={city} onChange={e => setCity(e.target.value)} className={selectClass} aria-label="Ciudad de salida">
          <option value="">Ciudad de salida</option>
          {cities.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={duration} onChange={e => setDuration(e.target.value)} className={selectClass} aria-label="Duración">
          {durations.map(d => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>

        <select value={budget} onChange={e => setBudget(e.target.value)} className={selectClass} aria-label="Presupuesto">
          {budgets.map(b => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>

        <div className="flex items-center gap-3 flex-wrap">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={noCar}
              onChange={e => setNoCar(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
            />
            <span className="text-sm text-slate-700">Sin coche</span>
          </label>
          <button
            onClick={handleSearch}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            <Search size={15} />
            Buscar
          </button>
        </div>
      </div>
    </div>
  )
}
