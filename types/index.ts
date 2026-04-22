export type BudgetLevel = 'bajo' | 'medio' | 'alto'
export type TransportType = 'tren' | 'bus' | 'coche' | 'avion' | 'mixto'
export type Category =
  | 'naturaleza'
  | 'ciudad'
  | 'playa'
  | 'gastronomia'
  | 'cultura'
  | 'aventura'
  | 'relax'
export type Season = 'primavera' | 'verano' | 'otoño' | 'invierno' | 'todo-el-año'

export interface AffiliateLinks {
  hotelUrl?: string
  activityUrl?: string
  transportUrl?: string
}

export interface AccommodationRecommendation {
  name: string
  description: string
  whyItFits: string
  affiliateUrl?: string
}

export interface ActivityRecommendation {
  name: string
  description: string
  type: 'principal' | 'alternativa' | 'opcional'
  affiliateUrl?: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
  highlights: string[]
}

export interface Escape {
  id: string
  slug: string
  title: string
  location: string
  departureCity: string
  durationNights: number
  budgetLevel: BudgetLevel
  budgetEstimate: string
  category: Category
  tags: string[]
  shortDescription: string
  fullDescription: string
  idealFor: string[]
  bestSeason: Season[]
  transportType: TransportType
  carRequired: boolean
  travelTime: string
  heroImage: string
  galleryImages: string[]
  itinerary: ItineraryDay[]
  accommodationRecommendations: AccommodationRecommendation[]
  activityRecommendations: ActivityRecommendation[]
  affiliateLinks: AffiliateLinks
  featured: boolean
}

export interface FilterState {
  departureCity: string
  durationNights: number | null
  budgetLevel: BudgetLevel | null
  category: Category | null
  carRequired: boolean | null
}
