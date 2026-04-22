import HeroSection from '@/components/home/HeroSection'
import FeaturedEscapes from '@/components/home/FeaturedEscapes'
import HowItWorks from '@/components/home/HowItWorks'
import ValueBlock from '@/components/home/ValueBlock'
import SeoBlock from '@/components/home/SeoBlock'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedEscapes />
      <HowItWorks />
      <ValueBlock />
      <SeoBlock />
    </>
  )
}
