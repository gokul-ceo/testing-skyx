import Image from 'next/image'
import styles from './page.module.css'
import { HeroSection } from './components/Home/heroSection/HeroSection'
import { AboutUsSection } from './components/Home/aboutusSection/AboutusSection'
import { ServiceSection } from './components/Home/ServiceSection/ServiceSection'
import { CareerSection } from './components/Home/careerSection/CareerSection'
import { ContactSection } from './components/Home/contactSection/ContactSection'
import { CtaSection } from './components/Home/cta/ctaSection'

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <AboutUsSection/>
    <ServiceSection/>
    <CareerSection/>
    <ContactSection/>
    <CtaSection/>
   </main>
  )
}
