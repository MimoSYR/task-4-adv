import HeroSection from '../components/HomeSections/HeroSection/HeroSection'
import HowItWorks from '../components/HomeSections/HowItWorks/HowItWorks'
import FindDreamHomeSection from '../components/HomeSections/FindDreamHomeSection/FindDreamHomeSection'
import MostTrendingSection from '../components/HomeSections/MostTrendingSection/MostTrendingSection'
import RealEstateDealsSection from '../components/HomeSections/RealEstateDealsSection/RealEstateDealsSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* <HowItWorks /> */}
      <FindDreamHomeSection />
      <MostTrendingSection />
      <RealEstateDealsSection />
    </div>
  )
}

export default Home