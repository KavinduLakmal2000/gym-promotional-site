import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

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
import BackToTop from '../components/BackToTop';
import Loader from "../components/Loader";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* Main content */}
      {!loading && (
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
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default Home