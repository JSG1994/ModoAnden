import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import QuickFilters from './QuickFilters'

export default function HeroSection() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-1.5 text-teal-700 text-sm font-semibold mb-4">
            <MapPin size={14} />
            Escapadas por España
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Escapadas fáciles<br className="hidden sm:block" /> de 1 a 3 noches
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Selección curada de escapadas fáciles de organizar. Filtra por ciudad de salida,
            presupuesto y si necesitas coche. Decide en minutos, reserva sin perder tiempo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/escapadas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
            >
              Ver todas las escapadas
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sobre-velqia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
            >
              Cómo funciona
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <QuickFilters />
        </div>
      </div>
    </section>
  )
}
