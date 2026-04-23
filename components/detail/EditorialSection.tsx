import type { Escape } from '@/types'
import { Train, Wallet, Ticket, Sun, CloudRain, Star, Calendar, AlertCircle } from 'lucide-react'

export default function EditorialSection({ escape }: { escape: Escape }) {
  const { practical, editorial } = escape

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Train size={20} className="text-brand-accent" />
          Cómo llegar
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">{practical.howToGetThere}</p>
        {practical.howToGetThereExtra && (
          <p className="text-slate-600 leading-relaxed">{practical.howToGetThereExtra}</p>
        )}
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Wallet size={20} className="text-brand-accent" />
          Presupuesto orientativo
        </h2>
        <p className="text-slate-600 leading-relaxed mb-4">{practical.budgetIntro}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {practical.budgets.map(b => (
            <div key={b.nights} className="bg-slate-50 rounded-lg p-4">
              <h4 className="font-semibold text-slate-900 mb-2">{b.label}</h4>
              <dl className="space-y-1.5 mb-3">
                {b.items.map(item => (
                  <div key={item.concept} className="flex justify-between text-sm">
                    <dt className="text-slate-500">{item.concept}</dt>
                    <dd className="text-slate-700">{item.level}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-xs text-slate-500">{b.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Ticket size={20} className="text-brand-accent" />
          Entradas y visitas
        </h2>
        <p className="text-slate-600 leading-relaxed mb-3">{practical.ticketsText}</p>
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
          <p className="text-sm text-slate-700">{practical.ticketsTip}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
          <AlertCircle size={20} className="text-amber-500" />
          Errores comunes
        </h2>
        <ul className="space-y-2">
          {editorial.commonMistakes.map((m, i) => (
            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
              <span className="text-amber-500 mt-0.5">✗</span>
              {m}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold text-slate-900 mb-3">Según el tiempo</h2>
        <p className="text-slate-600 leading-relaxed mb-4">{editorial.weatherIntro}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <Sun size={16} className="text-orange-500" />
              Con calor
            </h4>
            <ul className="space-y-1">
              {editorial.weatherHot.map((t, i) => (
                <li key={i} className="text-sm text-slate-600">• {t}</li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <CloudRain size={16} className="text-blue-500" />
              Con lluvia
            </h4>
            <ul className="space-y-1">
              {editorial.weatherRainy.map((t, i) => (
                <li key={i} className="text-sm text-slate-600">• {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-accent/5 border border-brand-accent/20 rounded-xl p-6">
        <h2 className="text-lg font-bold text-brand mb-2 flex items-center gap-2">
          <Star size={18} className="text-brand-accent" />
          {editorial.firstTimeAdvice.title}
        </h2>
        <p className="text-slate-700 leading-relaxed">{editorial.firstTimeAdvice.text}</p>
      </section>

      <section className="bg-slate-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Calendar size={18} className="text-brand-accent" />
          {editorial.quickWeekendAdvice.title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{editorial.quickWeekendAdvice.text}</p>
      </section>

      {escape.faq.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {escape.faq.map((f, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg">
                <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">
                  {f.question}
                </summary>
                <p className="px-4 pb-3 text-sm text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold text-slate-900 mb-3">{editorial.closing.title}</h2>
        <p className="text-slate-600 leading-relaxed">{editorial.closing.text}</p>
      </section>
    </div>
  )
}
