'use client'

import { useState } from 'react'
import type { DurationVariant } from '@/types'
import { Moon, CheckCircle, AlertTriangle, Lightbulb, Hotel } from 'lucide-react'

export default function DurationTabs({ variants }: { variants: DurationVariant[] }) {
  const [active, setActive] = useState(variants.length > 1 ? 1 : 0)
  const v = variants[active]

  return (
    <div>
      <div className="flex gap-2 mb-6">
        {variants.map((variant, i) => (
          <button
            key={variant.nights}
            onClick={() => setActive(i)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === i
                ? 'bg-brand-accent text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Moon size={14} />
            {variant.nights} noche{variant.nights > 1 ? 's' : ''}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">{v.title}</h3>
          <p className="text-slate-600 leading-relaxed">{v.summary}</p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <CheckCircle size={16} className="text-brand-accent" />
            Para quién encaja
          </h4>
          <ul className="space-y-1.5">
            {v.forWhom.map((item, i) => (
              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-brand-accent mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2">Qué hacer</h4>
          {v.whatToDo.split('\n\n').map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed mb-3">{p}</p>
          ))}
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-500" />
            Qué no haría
          </h4>
          <p className="text-slate-600 leading-relaxed">{v.whatNotToDo}</p>
        </div>

        <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-4">
          <h4 className="font-semibold text-brand mb-2">Veredicto</h4>
          <p className="text-slate-700 leading-relaxed">{v.verdict}</p>
        </div>

        {v.accommodations.length > 0 && (
          <div>
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Hotel size={16} className="text-brand-accent" />
              Alojamientos recomendados para {v.nights} noche{v.nights > 1 ? 's' : ''}
            </h4>
            <div className="grid gap-3">
              {v.accommodations.map(acc => (
                <div key={acc.name} className="bg-white border border-slate-200 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-1">{acc.name}</h5>
                  <p className="text-sm text-slate-600 mb-1">{acc.description}</p>
                  <p className="text-xs text-brand-accent">{acc.whyItFits}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {v.tip && (
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-lg p-4">
            <Lightbulb size={18} className="text-amber-500 mt-0.5 shrink-0" />
            <p className="text-sm text-slate-700">{v.tip}</p>
          </div>
        )}
      </div>
    </div>
  )
}
