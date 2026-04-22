import type { Escape } from '@/types'
import { categoryLabel } from '@/lib/utils'
import { Users, Moon, Wallet, Sun, Train, Car, Tag } from 'lucide-react'

interface QuickFactsProps {
  escape: Escape
}

function Fact({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
        <Icon size={16} className="text-teal-700" />
      </div>
      <div>
        <p className="text-xs text-slate-500 font-medium">{label}</p>
        <p className="text-sm font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  )
}

export default function QuickFacts({ escape }: QuickFactsProps) {
  return (
    <div className="bg-slate-50 rounded-xl border border-slate-100 p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">Datos rápidos</h2>
      <div className="space-y-4">
        <Fact icon={Users} label="Ideal para" value={escape.idealFor.join(', ')} />
        <Fact icon={Moon} label="Duración recomendada" value={`${escape.durationNights} ${escape.durationNights === 1 ? 'noche' : 'noches'}`} />
        <Fact icon={Wallet} label="Presupuesto estimado" value={escape.budgetEstimate} />
        <Fact icon={Sun} label="Mejor época" value={escape.bestSeason.join(', ')} />
        <Fact
          icon={escape.carRequired ? Car : Train}
          label="Transporte"
          value={escape.carRequired ? 'Necesitas coche' : 'Sin coche necesario'}
        />
        <Fact icon={Tag} label="Tipo de plan" value={categoryLabel(escape.category)} />
      </div>
    </div>
  )
}
