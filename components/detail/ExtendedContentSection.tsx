import type { Escape } from '@/types'
import { Compass, UtensilsCrossed, CalendarClock, Bed, AlertTriangle, Search, Layers } from 'lucide-react'

interface Props {
  escape: Escape
}

export default function ExtendedContentSection({ escape }: Props) {
  const {
    deepEssence,
    realExperience,
    detailedItinerary,
    foodAndRestaurants,
    seasonalPlans,
    hotelDecisionGuide,
    honestWarnings,
    seoBlocks,
  } = escape

  const hasText = (value?: string) => Boolean(value && value.trim().length > 0)

  const seoItems = seoBlocks
    ? [
        seoBlocks.whatToSee,
        seoBlocks.howToArrive,
        seoBlocks.oneDay,
        seoBlocks.weekend,
        seoBlocks.whereToEat,
        seoBlocks.isItWorthSleeping,
        seoBlocks.sleepingThere,
      ].filter((block): block is NonNullable<typeof block> =>
        block !== undefined && (hasText(block.title) || hasText(block.text)),
      )
    : []

  const hasExtendedContent =
    !!deepEssence ||
    !!realExperience ||
    !!detailedItinerary ||
    !!foodAndRestaurants ||
    !!seasonalPlans ||
    !!hotelDecisionGuide ||
    !!honestWarnings ||
    seoItems.length > 0

  if (!hasExtendedContent) return null

  return (
    <div className="space-y-12">
      {deepEssence && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Layers size={20} className="text-brand-accent" />
            {deepEssence.title}
          </h2>
          {deepEssence.text.split('\n\n').map((p, i) => (
            <p key={i} className="text-slate-600 leading-relaxed mb-3">{p}</p>
          ))}
        </section>
      )}

      {realExperience && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3">{realExperience.title}</h2>
          <p className="text-slate-600 leading-relaxed mb-3">{realExperience.intro}</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Lectura oficial</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{realExperience.officialReading}</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">Lectura real de viajeros</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{realExperience.realTravelerReading}</p>
            </div>
          </div>
          <div className="mt-4 bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-4">
            <p className="text-sm text-slate-700">{realExperience.honestVerdict}</p>
          </div>
        </section>
      )}

      {detailedItinerary && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Compass size={20} className="text-brand-accent" />
            {detailedItinerary.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">{detailedItinerary.intro}</p>

          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">{detailedItinerary.oneDayFromMadrid.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">{detailedItinerary.oneDayFromMadrid.plan}</p>
              <p className="text-sm text-amber-700">{detailedItinerary.oneDayFromMadrid.warning}</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">{detailedItinerary.oneNight.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">{detailedItinerary.oneNight.plan}</p>
              <p className="text-sm text-slate-700">{detailedItinerary.oneNight.whyItWorks}</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">{detailedItinerary.twoNights.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">{detailedItinerary.twoNights.plan}</p>
              <p className="text-sm text-slate-700">{detailedItinerary.twoNights.whyItWorks}</p>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">{detailedItinerary.threeNights.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-2">{detailedItinerary.threeNights.plan}</p>
              <p className="text-sm text-amber-700">{detailedItinerary.threeNights.warning}</p>
            </div>
          </div>
        </section>
      )}

      {foodAndRestaurants && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <UtensilsCrossed size={20} className="text-brand-accent" />
            {foodAndRestaurants.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-3">{foodAndRestaurants.intro}</p>
          {hasText(foodAndRestaurants.howToThinkAboutIt) && (
            <p className="text-slate-600 leading-relaxed mb-3">{foodAndRestaurants.howToThinkAboutIt}</p>
          )}
          {hasText(foodAndRestaurants.foodIdentity) && (
            <p className="text-slate-600 leading-relaxed mb-4">{foodAndRestaurants.foodIdentity}</p>
          )}

          {foodAndRestaurants.areas.length > 0 && (
            <div className="grid gap-3 md:grid-cols-3 mb-5">
              {foodAndRestaurants.areas.filter(area => hasText(area.name) || hasText(area.description)).map(area => (
                <div key={area.name} className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900 mb-1">{area.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          )}

          {foodAndRestaurants.recommendedRestaurants.length > 0 && (
            <div className="space-y-3 mb-5">
              {foodAndRestaurants.recommendedRestaurants
                .filter(restaurant => hasText(restaurant.name))
                .map(restaurant => (
                <article key={restaurant.name} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-900">{restaurant.name}</h3>
                  <p className="text-sm text-slate-500 mb-2">{restaurant.type} · {restaurant.priceFeeling}</p>
                  <p className="text-sm text-slate-600 mb-2">{restaurant.whyItFits}</p>
                  <p className="text-sm text-slate-700 mb-2">{restaurant.bestFor}</p>
                  <p className="text-sm text-amber-700">{restaurant.caution}</p>
                </article>
                ))}
            </div>
          )}

          {hasText(foodAndRestaurants.editorialTip) && (
            <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-4">
              <p className="text-sm text-slate-700">{foodAndRestaurants.editorialTip}</p>
            </div>
          )}
        </section>
      )}

      {seasonalPlans && seasonalPlans.plans.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <CalendarClock size={20} className="text-brand-accent" />
            {seasonalPlans.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">{seasonalPlans.intro}</p>
          <div className="space-y-3">
            {seasonalPlans.plans.filter(plan => hasText(plan.name)).map(plan => (
              <article key={plan.name} className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-500 mb-1">{plan.when}</p>
                <p className="text-sm text-slate-600 mb-1">{plan.whyItFits}</p>
                <p className="text-sm text-slate-700 mb-1">{plan.idealFor}</p>
                {plan.caution && <p className="text-sm text-amber-700">{plan.caution}</p>}
              </article>
            ))}
          </div>
        </section>
      )}

      {hotelDecisionGuide && hotelDecisionGuide.options.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Bed size={20} className="text-brand-accent" />
            {hotelDecisionGuide.title}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">{hotelDecisionGuide.intro}</p>
          <div className="space-y-3 mb-4">
            {hotelDecisionGuide.options.filter(option => hasText(option.hotel)).map(option => (
              <article key={option.hotel} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{option.hotel}</h3>
                <p className="text-sm text-slate-700 mb-1">{option.bestFor}</p>
                <p className="text-sm text-slate-600 mb-1">{option.realWhy}</p>
                <p className="text-sm text-amber-700">{option.caution}</p>
              </article>
            ))}
          </div>
          <div className="bg-brand-accent/5 border border-brand-accent/20 rounded-lg p-4">
            <p className="text-sm text-slate-700">{hotelDecisionGuide.verdict}</p>
          </div>
        </section>
      )}

      {honestWarnings && honestWarnings.items.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <AlertTriangle size={20} className="text-amber-500" />
            {honestWarnings.title}
          </h2>
          <div className="space-y-3">
            {honestWarnings.items.filter(item => hasText(item.title) || hasText(item.text)).map(item => (
              <article key={item.title} className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {seoItems.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Search size={20} className="text-brand-accent" />
            Bloques SEO complementarios
          </h2>
          <div className="space-y-3">
            {seoItems.map(block => (
              <article key={block.title} className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-1">{block.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{block.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
