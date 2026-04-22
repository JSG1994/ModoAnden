import Image from 'next/image'
import type { Escape } from '@/types'
import Badge from '@/components/ui/Badge'
import { budgetLevelColor, budgetLevelLabel, categoryLabel, durationLabel, transportLabel } from '@/lib/utils'
import { MapPin, Moon, Train, Car, Clock } from 'lucide-react'

interface EscapeDetailHeroProps {
  escape: Escape
}

export default function EscapeDetailHero({ escape }: EscapeDetailHeroProps) {
  return (
    <section>
      <div className="relative w-full h-72 sm:h-96 lg:h-[480px] overflow-hidden">
        <Image
          src={escape.heroImage}
          alt={`${escape.location} — ${escape.title}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={budgetLevelColor(escape.budgetLevel)}>
              {budgetLevelLabel(escape.budgetLevel)}
            </Badge>
            <Badge variant="teal">{categoryLabel(escape.category)}</Badge>
            {!escape.carRequired && (
              <Badge className="bg-white/20 text-white backdrop-blur-sm">Sin coche</Badge>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {escape.title}
          </h1>
        </div>
      </div>

      <div className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-teal-600" />
              {escape.departureCity} → {escape.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Moon size={14} className="text-teal-600" />
              {durationLabel(escape.durationNights)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-teal-600" />
              {escape.travelTime}
            </span>
            <span className="flex items-center gap-1.5">
              {escape.carRequired ? (
                <Car size={14} className="text-amber-500" />
              ) : (
                <Train size={14} className="text-teal-600" />
              )}
              {transportLabel(escape.transportType)}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
