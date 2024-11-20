import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { About } from '../components/About';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const LandingPage: React.FC = () => {
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavbarVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen">
      <Navbar isNavbarVisible={isNavbarVisible} />
      
      <main>
        <Hero />

        <section id="features" ref={featuresRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-black/20"></div>
          <Features inView={featuresInView} />
        </section>

        <section id="about" ref={aboutRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-green-900/20"></div>
          <About inView={aboutInView} />
        </section>

        <section ref={ctaRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-90"></div>
          <CTA inView={ctaInView} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
