export type Category = 'naturaleza' | 'ciudad' | 'playa' | 'gastronomia' | 'cultura' | 'aventura' | 'relax'

export interface FAQItem {
  question: string
  answer: string
}

export interface AccommodationRecommendation {
  name: string
  description: string
  whyItFits: string
  affiliateUrl?: string
}

export interface DurationVariant {
  nights: number
  title: string
  summary: string
  forWhom: string[]
  whatToDo: string
  whatNotToDo: string
  verdict: string
  accommodations: AccommodationRecommendation[]
  tip: string
  ctaText: string
}

export interface BudgetItem {
  concept: string
  level: string
}

export interface BudgetVariant {
  nights: number
  label: string
  items: BudgetItem[]
  summary: string
}

export interface AffiliateLinks {
  hotelUrl?: string
  activityUrl?: string
  transportUrl?: string
}

export interface RealExperience {
  title: string
  intro: string
  officialReading: string
  realTravelerReading: string
  honestVerdict: string
}

export interface DetailedItinerary {
  title: string
  intro: string
  oneDayFromMadrid: {
    title: string
    plan: string
    warning: string
  }
  oneNight: {
    title: string
    plan: string
    whyItWorks: string
  }
  twoNights: {
    title: string
    plan: string
    whyItWorks: string
  }
  threeNights: {
    title: string
    plan: string
    warning: string
  }
}

export interface RestaurantArea {
  name: string
  description: string
}

export interface RecommendedRestaurant {
  name: string
  type: string
  priceFeeling: string
  whyItFits: string
  bestFor: string
  caution: string
}

export interface FoodAndRestaurants {
  title: string
  intro: string
  foodIdentity: string
  areas: RestaurantArea[]
  recommendedRestaurants: RecommendedRestaurant[]
  budgetAdvice: string
  editorialTip: string
}

export interface SeasonalPlan {
  name: string
  when: string
  whyItFits: string
  idealFor: string
  caution?: string
}

export interface SeasonalPlans {
  title: string
  intro: string
  plans: SeasonalPlan[]
}

export interface HotelDecisionOption {
  hotel: string
  bestFor: string
  realWhy: string
  caution: string
}

export interface HotelDecisionGuide {
  title: string
  intro: string
  options: HotelDecisionOption[]
  verdict: string
}

export interface HonestWarningItem {
  title: string
  text: string
}

export interface HonestWarnings {
  title: string
  items: HonestWarningItem[]
}

export interface SeoBlockItem {
  title: string
  text: string
}

export interface EscapeSeoBlocks {
  whatToSee: SeoBlockItem
  howToArrive: SeoBlockItem
  whereToEat: SeoBlockItem
  isItWorthSleeping: SeoBlockItem
}

export interface Escape {
  id: string
  slug: string
  title: string
  subtitle: string
  location: string
  departureCity: string
  alternativeDepartureCities?: string[]
  heroImage: string
  heroImageAlt?: string
  category: Category
  tags: string[]
  featured: boolean
  shortDescription: string
  overview: {
    summary: string
    bestFor: string[]
    lessRecommendedFor: string[]
    bestSeason: string
    generalAdvice: string
  }
  quickSummary: {
    text: string
    keys: string[]
  }
  durationVariants: DurationVariant[]
  practical: {
    intro: string
    items: { label: string; value: string }[]
    howToGetThere: string
    howToGetThereExtra?: string
    budgetIntro: string
    budgets: BudgetVariant[]
    ticketsText: string
    ticketsTip: string
  }
  editorial: {
    accommodationIntro?: string
    commonMistakes: string[]
    weatherIntro: string
    weatherHot: string[]
    weatherRainy: string[]
    firstTimeAdvice: { title: string; text: string }
    quickWeekendAdvice: { title: string; text: string }
    closing: { title: string; text: string }
  }
  realExperience?: RealExperience
  detailedItinerary?: DetailedItinerary
  foodAndRestaurants?: FoodAndRestaurants
  seasonalPlans?: SeasonalPlans
  hotelDecisionGuide?: HotelDecisionGuide
  honestWarnings?: HonestWarnings
  seoBlocks?: EscapeSeoBlocks
  faq: FAQItem[]
  affiliateLinks?: AffiliateLinks
}

export interface FilterState {
  departureCity: string
  durationNights: number | null
  category: Category | null
}