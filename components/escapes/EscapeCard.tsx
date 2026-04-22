import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Moon, Train, Car } from 'lucide-react'
import type { Escape } from '@/types'
import Badge from '@/components/ui/Badge'
import { budgetLevelLabel, budgetLevelColor, categoryLabel, durationLabel } from '@/lib/utils'

interface EscapeCardProps {
  escape: Escape
}

export default function EscapeCard({ escape }: EscapeCardProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={escape.heroImage}
          alt={`Vista de ${escape.location}`}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {escape.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded-full bg-teal-600 text-white text-xs font-semibold">
              Destacada
            </span>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          <Badge className={budgetLevelColor(escape.budgetLevel)}>
            {budgetLevelLabel(escape.budgetLevel)}
          </Badge>
          <Badge variant="teal">{categoryLabel(escape.category)}</Badge>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-1">{escape.title}</h3>

        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 flex-wrap">
          <span className="flex items-center gap-1">
            <MapPin size={11} />
            {escape.departureCity} → {escape.location}
          </span>
          <span className="flex items-center gap-1">
            <Moon size={11} />
            {durationLabel(escape.durationNights)}
          </span>
          <span className="flex items-center gap-1">
            {escape.carRequired ? <Car size={11} /> : <Train size={11} />}
            {escape.carRequired ? 'Con coche' : 'Sin coche'}
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 flex-1">
          {escape.shortDescription}
        </p>

        <div className="mt-4">
          <p className="text-xs text-slate-400 mb-3">{escape.budgetEstimate}</p>
          <Link
            href={`/escapadas/${escape.slug}`}
            className="block w-full text-center px-4 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
          >
            Ver escapada
          </Link>
        </div>
      </div>
    </article>
  )
}
