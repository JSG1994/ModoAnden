import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import type { Escape } from '@/types'
import Badge from '@/components/ui/Badge'

interface Props {
  escape: Escape
}

export default function EscapeCard({ escape }: Props) {
  const minNights = Math.min(...escape.durationVariants.map(d => d.nights))
  const maxNights = Math.max(...escape.durationVariants.map(d => d.nights))
  const nightsLabel = minNights === maxNights ? `${minNights} noche${minNights > 1 ? 's' : ''}` : `${minNights}-${maxNights} noches`
  const imageAlt = escape.heroImageAlt || `${escape.title} - Escapada sin coche desde ${escape.departureCity}`

  return (
    <Link href={`/escapadas/${escape.slug}`} className="group flex flex-col sm:flex-row rounded-xl border border-slate-200 hover:border-brand-accent overflow-hidden transition-colors">
      <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0">
        <Image src={escape.heroImage} alt={imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 224px" />
      </div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between mb-2">
            <Badge>{escape.category}</Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin size={11} />
              {escape.departureCity}
            </span>
          </div>
          <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-accent transition-colors">{escape.title}</h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">{escape.subtitle}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-slate-400">{nightsLabel}</span>
          <span className="flex items-center gap-1 text-brand-accent text-sm font-medium">
            Ver escapada <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}
