import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import { escapes } from '@/data/escapes'
import Badge from '@/components/ui/Badge'
import SectionHeading from '@/components/ui/SectionHeading'

export default function FeaturedEscapes() {
  const featured = escapes.filter(e => e.featured)

  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Escapadas destacadas" subtitle="Seleccion editorial de los mejores destinos" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featured.map(escape => (
            <Link key={escape.id} href={`/escapadas/${escape.slug}`} className="group rounded-xl overflow-hidden border border-slate-200 hover:border-brand-accent transition-colors">
              <div className="relative h-48">
                <Image src={escape.heroImage} alt={escape.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge>{escape.category}</Badge>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin size={11} />
                    {escape.departureCity}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-brand-accent transition-colors">{escape.title}</h3>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{escape.subtitle}</p>
                <div className="flex items-center gap-1 text-brand-accent text-sm font-medium mt-3">
                  Ver escapada <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
