import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="bg-brand text-white py-14 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-extrabold mb-3">Te encaja esta escapada?</h2>
        <p className="text-slate-300 mb-8">Explora mas destinos o escribenos si tienes alguna duda.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/escapadas"
            className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Ver mas escapadas <ArrowRight size={16} />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 border border-slate-400 hover:border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  )
}
