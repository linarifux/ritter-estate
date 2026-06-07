import React from 'react';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import ProductGridSection from '../components/ProductGridSection';
import ExperienceSection from '../components/ExperienceSection';
import KickstarterSection from '../components/KickstarterSection';
import Footer from '../components/Footer';

export default function RitterEstateLanding() {

  return (
    <div className="bg-[#050505] text-[#f4f2ee] font-sans antialiased overflow-x-hidden selection:bg-[#c5a880]/30 selection:text-white scroll-smooth">
      <HeroSection/>
      <PhilosophySection />
      <ProductGridSection />
      <ExperienceSection />
      <KickstarterSection />
      <Footer />
    </div>
  );
}