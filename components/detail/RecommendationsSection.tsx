import type { AccommodationRecommendation, ActivityRecommendation } from '@/types'
import { ExternalLink } from 'lucide-react'
import Badge from '@/components/ui/Badge'

interface AccommodationProps {
  recommendations: AccommodationRecommendation[]
}

interface ActivitiesProps {
  recommendations: ActivityRecommendation[]
}

const activityTypeLabel: Record<ActivityRecommendation['type'], string> = {
  principal: 'Principal',
  alternativa: 'Alternativa',
  opcional: 'Opcional',
}

const activityTypeColor: Record<ActivityRecommendation['type'], string> = {
  principal: 'bg-teal-100 text-teal-800',
  alternativa: 'bg-slate-100 text-slate-700',
  opcional: 'bg-amber-100 text-amber-800',
}

export function AccommodationSection({ recommendations }: AccommodationProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-5">Dónde alojarse</h2>
      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">{rec.name}</h3>
            <p className="text-sm text-slate-600 mb-2">{rec.description}</p>
            <p className="text-xs text-teal-700 font-medium mb-4">
              ✓ {rec.whyItFits}
            </p>
            <a
              href={rec.affiliateUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Ver alojamiento
              <ExternalLink size={13} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ActivitiesSection({ recommendations }: ActivitiesProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-5">Qué reservar</h2>
      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-semibold text-slate-900">{rec.name}</h3>
              <Badge className={activityTypeColor[rec.type]}>
                {activityTypeLabel[rec.type]}
              </Badge>
            </div>
            <p className="text-sm text-slate-600 mb-4">{rec.description}</p>
            <a
              href={rec.affiliateUrl ?? '#'}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Ver actividad
              <ExternalLink size={13} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
