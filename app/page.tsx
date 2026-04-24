import HeroSection from '@/components/home/HeroSection'
import QuickFilters from '@/components/home/QuickFilters'
import FeaturedEscapes from '@/components/home/FeaturedEscapes'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://modoanden.com'

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'ModoAndén',
      url: siteUrl,
      description: 'Recomendaciones de escapadas cortas por España sin necesidad de coche.',
    },
    {
      '@type': 'WebSite',
      name: 'ModoAndén',
      url: siteUrl,
      inLanguage: 'es',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/escapadas?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <HeroSection />
      <QuickFilters />
      <FeaturedEscapes />
    </>
  )
}
