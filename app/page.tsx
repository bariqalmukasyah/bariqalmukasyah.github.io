'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}
