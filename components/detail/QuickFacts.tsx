import type { Escape } from '@/types'

interface Props {
  escape: Escape
}

export default function QuickFacts({ escape }: Props) {
  return (
    <div className="bg-slate-50 rounded-xl p-5 space-y-5">
      <h2 className="font-bold text-slate-900 text-sm uppercase tracking-wide">Datos practicos</h2>
      <dl className="space-y-3">
        {escape.practical.items.map(item => (
          <div key={item.label}>
            <dt className="text-xs text-slate-400 font-medium">{item.label}</dt>
            <dd className="text-sm text-slate-700">{item.value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <p className="text-xs text-slate-400 font-medium mb-2 uppercase tracking-wide">En resumen</p>
        <ul className="space-y-1">
          {escape.quickSummary.keys.map(k => (
            <li key={k} className="text-sm text-slate-600 before:content-['•'] before:mr-2 before:text-brand-accent">{k}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
