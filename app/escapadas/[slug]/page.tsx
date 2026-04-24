import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { escapes } from '@/data/escapes'
import { getEscapeBySlug } from '@/lib/filters'
import EscapeDetailHero from '@/components/detail/EscapeDetailHero'
import QuickFacts from '@/components/detail/QuickFacts'
import DurationTabs from '@/components/detail/DurationTabs'
import EditorialSection from '@/components/detail/EditorialSection'
import ExtendedContentSection from '@/components/detail/ExtendedContentSection'
import CTASection from '@/components/detail/CTASection'

interface Props {
  params: { slug: string }
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://modoanden.com'

export function generateStaticParams() {
  return escapes.map(e => ({ slug: e.slug }))
}

export const revalidate = 3600 // Revalidate every hour

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const escape = getEscapeBySlug(escapes, params.slug)
  if (!escape) return {}
  return {
    title: `${escape.title} sin coche`,
    description: escape.shortDescription,
    alternates: {
      canonical: `/escapadas/${escape.slug}`,
    },
    keywords: [
      `${escape.title} sin coche`,
      `escapada a ${escape.title}`,
      `viaje corto a ${escape.title}`,
      `qué ver en ${escape.title}`,
    ],
    openGraph: {
      title: `${escape.title} sin coche | ModoAndén`,
      description: escape.shortDescription,
      url: `/escapadas/${escape.slug}`,
      type: 'article',
      images: [{ url: escape.heroImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${escape.title} sin coche | ModoAndén`,
      description: escape.shortDescription,
      images: [escape.heroImage],
    },
  }
}

export default function EscapeDetailPage({ params }: Props) {
  const escape = getEscapeBySlug(escapes, params.slug)
  if (!escape) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Escapadas',
        item: `${siteUrl}/escapadas`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: escape.title,
        item: `${siteUrl}/escapadas/${escape.slug}`,
      },
    ],
  }

  const tripJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Trip',
        name: `Escapada a ${escape.title} sin coche`,
        description: escape.shortDescription,
        image: escape.heroImage,
        url: `${siteUrl}/escapadas/${escape.slug}`,
        author: {
          '@type': 'Organization',
          name: 'ModoAndén',
        },
        publisher: {
          '@type': 'Organization',
          name: 'ModoAndén',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/brand/logo-modoanden.png`,
          },
        },
        destinationLocation: {
          '@type': 'Place',
          name: escape.location,
          geo: {
            '@type': 'GeoShape',
            addressCountry: 'ES',
          },
        },
        departureLocation: {
          '@type': 'Place',
          name: escape.departureCity,
          geo: {
            '@type': 'GeoShape',
            addressCountry: 'ES',
          },
        },
        touristType: escape.overview.bestFor,
        itinerary: escape.durationVariants.map((variant, idx) => ({
          '@type': 'TouristTrip',
          position: idx + 1,
          name: variant.title,
          description: variant.summary,
          duration: `P${variant.nights}N`,
          recommendedSeason: escape.overview.bestSeason,
          includes: {
            '@type': 'Thing',
            name: 'Alojamiento sugerido',
            description: variant.accommodations.map(a => a.name).join(', '),
          },
        })),
      },
      breadcrumbSchema,
      {
        '@type': 'FAQPage',
        mainEntity: escape.faq.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripJsonLd) }} />
      <EscapeDetailHero escape={escape} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Sobre esta escapada</h2>
              {escape.overview.summary.split('\n\n').map((p, i) => (
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

            <ExtendedContentSection escape={escape} />
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
