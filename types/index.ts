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

export interface Escape {
  id: string
  slug: string
  title: string
  subtitle: string
  location: string
  departureCity: string
  heroImage: string
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
  faq: FAQItem[]
  affiliateLinks?: AffiliateLinks
}

export interface FilterState {
  departureCity: string
  durationNights: number | null
  category: Category | null
}