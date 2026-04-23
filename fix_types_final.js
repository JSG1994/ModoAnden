const fs = require('fs')
const path = require('path')

const BASE = String.raw`c:\Escritorio\Pagina Web\velqia`

// types/index.ts — estructura que coincide exactamente con data/escapes.ts
const types = [
  "export type Category = 'naturaleza' | 'ciudad' | 'playa' | 'gastronomia' | 'cultura' | 'aventura' | 'relax'",
  "",
  "export interface FAQItem {",
  "  question: string",
  "  answer: string",
  "}",
  "",
  "export interface AccommodationRecommendation {",
  "  name: string",
  "  description: string",
  "  whyItFits: string",
  "  affiliateUrl?: string",
  "}",
  "",
  "export interface DurationVariant {",
  "  nights: number",
  "  title: string",
  "  summary: string",
  "  forWhom: string[]",
  "  whatToDo: string",
  "  whatNotToDo: string",
  "  verdict: string",
  "  accommodations: AccommodationRecommendation[]",
  "  tip: string",
  "  ctaText: string",
  "}",
  "",
  "export interface BudgetItem {",
  "  concept: string",
  "  level: string",
  "}",
  "",
  "export interface BudgetVariant {",
  "  nights: number",
  "  label: string",
  "  items: BudgetItem[]",
  "  summary: string",
  "}",
  "",
  "export interface AffiliateLinks {",
  "  hotelUrl?: string",
  "  activityUrl?: string",
  "  transportUrl?: string",
  "}",
  "",
  "export interface Escape {",
  "  id: string",
  "  slug: string",
  "  title: string",
  "  subtitle: string",
  "  location: string",
  "  departureCity: string",
  "  heroImage: string",
  "  category: Category",
  "  tags: string[]",
  "  featured: boolean",
  "  shortDescription: string",
  "  overview: {",
  "    summary: string",
  "    bestFor: string[]",
  "    lessRecommendedFor: string[]",
  "    bestSeason: string",
  "    generalAdvice: string",
  "  }",
  "  quickSummary: {",
  "    text: string",
  "    keys: string[]",
  "  }",
  "  durationVariants: DurationVariant[]",
  "  practical: {",
  "    intro: string",
  "    items: { label: string; value: string }[]",
  "    howToGetThere: string",
  "    howToGetThereExtra?: string",
  "    budgetIntro: string",
  "    budgets: BudgetVariant[]",
  "    ticketsText: string",
  "    ticketsTip: string",
  "  }",
  "  editorial: {",
  "    accommodationIntro?: string",
  "    commonMistakes: string[]",
  "    weatherIntro: string",
  "    weatherHot: string[]",
  "    weatherRainy: string[]",
  "    firstTimeAdvice: { title: string; text: string }",
  "    quickWeekendAdvice: { title: string; text: string }",
  "    closing: { title: string; text: string }",
  "  }",
  "  faq: FAQItem[]",
  "  affiliateLinks?: AffiliateLinks",
  "}",
  "",
  "export interface FilterState {",
  "  departureCity: string",
  "  durationNights: number | null",
  "  category: Category | null",
  "}",
].join('\n')

fs.writeFileSync(path.join(BASE, 'types', 'index.ts'), types, 'utf8')
console.log('types/index.ts: OK', types.split('\n').length, 'lines')

// Arreglar [slug]/page.tsx: overview.summary (no overview.intro) + shortDescription
const slugPage = `import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { escapes } from '@/data/escapes'
import { getEscapeBySlug } from '@/lib/filters'
import EscapeDetailHero from '@/components/detail/EscapeDetailHero'
import QuickFacts from '@/components/detail/QuickFacts'
import DurationTabs from '@/components/detail/DurationTabs'
import EditorialSection from '@/components/detail/EditorialSection'
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
              {escape.overview.summary.split('\\n\\n').map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed mb-3">{p}</p>
              ))}

              <div className="grid gap-4 md:grid-cols-2 mt-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-800 mb-2">Encaja bien para</h4>
                  <ul className="space-y-1">
                    {escape.overview.bestFor.map((b, i) => (
                      <li key={i} className="text-sm text-green-700">&#10003; {b}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-amber-800 mb-2">Menos recomendado para</h4>
                  <ul className="space-y-1">
                    {escape.overview.lessRecommendedFor.map((b, i) => (
                      <li key={i} className="text-sm text-amber-700">&#8212; {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Segun las noches que tengas</h2>
              <DurationTabs variants={escape.durationVariants} />
            </section>

            <EditorialSection escape={escape} />

            <CTASection />
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
`

const slugPath = path.join(BASE, 'app', 'escapadas', '[slug]', 'page.tsx')
fs.writeFileSync(slugPath, slugPage, 'utf8')
console.log('slug/page.tsx: OK', slugPage.split('\n').length, 'lines')
