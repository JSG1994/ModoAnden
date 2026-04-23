const fs = require('fs')
const path = require('path')

const BASE = String.raw`c:\Escritorio\Pagina Web\velqia`

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
    description: escape.subtitle,
    openGraph: {
      title: escape.title,
      description: escape.subtitle,
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
              <p className="text-slate-600 leading-relaxed mb-3">{escape.overview.intro}</p>

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

const fullPath = path.join(BASE, 'app', 'escapadas', '[slug]', 'page.tsx')
fs.writeFileSync(fullPath, slugPage, 'utf8')
console.log('slug/page.tsx:', slugPage.split('\n').length, 'lines')
