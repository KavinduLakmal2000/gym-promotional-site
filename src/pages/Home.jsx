import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Statistics } from '../components/Statistics';
import { ParallaxMotivation } from '../components/ParallaxMotivation';
import { Trainers } from '../components/Trainers';
import { Skills } from '../components/Skills';
import { Membership } from '../components/Membership';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Statistics />
      <About />
      <Services />
      <ParallaxMotivation />
      <Trainers />
      <Skills />
      <Membership />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home