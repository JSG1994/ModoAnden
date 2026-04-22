import type { ItineraryDay } from '@/types'

interface ItinerarySectionProps {
  itinerary: ItineraryDay[]
}

export default function ItinerarySection({ itinerary }: ItinerarySectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-slate-900 mb-6">Itinerario sugerido</h2>
      <div className="space-y-6">
        {itinerary.map(day => (
          <div key={day.day} className="flex gap-5">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 text-white text-sm font-bold flex items-center justify-center">
              {day.day}
            </div>
            <div className="flex-1 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
              <h3 className="text-base font-semibold text-slate-900 mb-2">{day.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">{day.description}</p>
              {day.highlights.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {day.highlights.map(h => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
