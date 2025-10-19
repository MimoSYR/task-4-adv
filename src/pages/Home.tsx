import React from 'react'
import HeroSection from '../components/HomeSections/HeroSection/HeroSection'
import HowItWorks from '../components/HomeSections/HowItWorks/HowItWorks'
import FindDreamHomeSection from '../components/HomeSections/FindDreamHomeSection/FindDreamHomeSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FindDreamHomeSection />
    </div>
  )
}

export default Home