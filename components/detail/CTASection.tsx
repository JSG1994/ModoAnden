import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import type { AffiliateLinks } from '@/types'

interface CTASectionProps {
  affiliateLinks: AffiliateLinks
}

export default function CTASection({ affiliateLinks }: CTASectionProps) {
  return (
    <section className="bg-slate-900 rounded-2xl p-8 sm:p-10 mt-10">
      <h2 className="text-xl font-bold text-white mb-2">¿Lista la escapada?</h2>
      <p className="text-slate-400 text-sm mb-6">
        Usa los enlaces de abajo para reservar directamente. Algunos pueden ser de afiliación, sin coste adicional para ti.
      </p>
      <div className="flex flex-wrap gap-3">
        {affiliateLinks.hotelUrl && (
          <a
            href={affiliateLinks.hotelUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors"
          >
            Ver alojamiento
            <ExternalLink size={14} />
          </a>
        )}
        {affiliateLinks.activityUrl && (
          <a
            href={affiliateLinks.activityUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Ver actividades
            <ExternalLink size={14} />
          </a>
        )}
        {affiliateLinks.transportUrl && (
          <a
            href={affiliateLinks.transportUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Ver transporte
            <ExternalLink size={14} />
          </a>
        )}
      </div>
      <div className="mt-6 pt-6 border-t border-slate-700">
        <Link
          href="/escapadas"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          Ver más escapadas
        </Link>
      </div>
    </section>
  )
}
