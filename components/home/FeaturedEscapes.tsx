import Link from 'next/link'
import { escapes } from '@/data/escapes'
import EscapeCard from '@/components/escapes/EscapeCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { ArrowRight } from 'lucide-react'

export default function FeaturedEscapes() {
  const featured = escapes.filter(e => e.featured).slice(0, 8)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <SectionHeading
          title="Escapadas destacadas"
          subtitle="Una selección de planes bien pensados para decidir rápido."
        />
        <Link
          href="/escapadas"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors shrink-0"
        >
          Ver todas
          <ArrowRight size={15} />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map(escape => (
          <EscapeCard key={escape.id} escape={escape} />
        ))}
      </div>
    </section>
  )
}
