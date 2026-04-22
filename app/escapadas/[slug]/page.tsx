import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { escapes } from '@/data/escapes'
import { getEscapeBySlug } from '@/lib/filters'
import EscapeDetailHero from '@/components/detail/EscapeDetailHero'
import QuickFacts from '@/components/detail/QuickFacts'
import ItinerarySection from '@/components/detail/ItinerarySection'
import { AccommodationSection, ActivitiesSection } from '@/components/detail/RecommendationsSection'
import CTASection from '@/components/detail/CTASection'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return escapes.map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const escape = getEscapeBySlug(escapes, params.slug)
  if (!escape) return {}
  return {
    title: escape.title,
    description: escape.shortDescription,
    openGraph: {
      title: escape.title,
      description: escape.shortDescription,
      images: [{ url: escape.heroImage }],
    },
  }
}

export default function EscapeDetailPage({ params }: Props) {
  const escape = getEscapeBySlug(escapes, params.slug)
  if (!escape) notFound()

  return (
    <>
      <EscapeDetailHero escape={escape} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Sobre esta escapada</h2>
              <p className="text-slate-600 leading-relaxed">{escape.fullDescription}</p>
            </section>

            <ItinerarySection itinerary={escape.itinerary} />
            <AccommodationSection recommendations={escape.accommodationRecommendations} />
            <ActivitiesSection recommendations={escape.activityRecommendations} />

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-5">Consejos útiles</h2>
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-sm w-20 flex-shrink-0">Cómo llegar</span>
                  <span className="text-sm text-slate-600">{escape.travelTime}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-sm w-20 flex-shrink-0">Ideal para</span>
                  <span className="text-sm text-slate-600">{escape.idealFor.join(', ')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-sm w-20 flex-shrink-0">Mejor época</span>
                  <span className="text-sm text-slate-600">{escape.bestSeason.join(', ')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-sm w-20 flex-shrink-0">Presupuesto</span>
                  <span className="text-sm text-slate-600">{escape.budgetEstimate}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-sm w-20 flex-shrink-0">¿Coche?</span>
                  <span className="text-sm text-slate-600">
                    {escape.carRequired
                      ? 'Sí es necesario'
                      : 'No hace falta. Accesible en transporte público.'}
                  </span>
                </div>
              </div>
            </section>

            <CTASection affiliateLinks={escape.affiliateLinks} />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <QuickFacts escape={escape} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
