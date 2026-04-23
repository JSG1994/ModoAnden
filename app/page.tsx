import HeroSection from '@/components/home/HeroSection'
import QuickFilters from '@/components/home/QuickFilters'
import FeaturedEscapes from '@/components/home/FeaturedEscapes'
import HowItWorks from '@/components/home/HowItWorks'
import ValueBlock from '@/components/home/ValueBlock'
import SeoBlock from '@/components/home/SeoBlock'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickFilters />
      <FeaturedEscapes />
      <HowItWorks />
      <ValueBlock />
      <SeoBlock />
    </>
  )
}
