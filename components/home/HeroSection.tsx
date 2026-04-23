import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="bg-brand text-white py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-brand-light text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <MapPin size={14} className="text-brand-accent" />
          Escapadas sin coche desde Espana
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Escapadas y viajes sin coche
        </h1>
        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Destinos pensados para ir en tren. Guias editoriales con opinion, no listas de enlaces.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/escapadas"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver escapadas
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/sobre-nosotros"
            className="inline-flex items-center gap-2 border border-slate-400 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Sobre nosotros
          </Link>
        </div>
      </div>
    </section>
  )
}
