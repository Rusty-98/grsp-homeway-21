
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import BusinessSection from '@/components/BusinessSection';
import Footer from '@/components/Footer';
import PerformanceStats from '@/components/PerformanceStats';
import TeamMemberSection from '@/components/TeamMemberSection';
import ComparisonSection from '@/components/ComparisonSection';
import TrustedCompaniesMarquee from '@/components/TrustedCompaniesMarquee';

const Index = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              behavior: 'smooth',
              top: element.offsetTop - 80, // Account for fixed header
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Force all animations to finish to prevent content from disappearing
    const allAnimatedElements = document.querySelectorAll('.hero-animate, .feature-animate, .business-animate, .stat-animate, .team-animate, .comparison-animate');
    allAnimatedElements.forEach(el => {
      el.classList.add('opacity-100');
    });
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <HeroSection />
        <TrustedCompaniesMarquee />
        <FeatureSection />
        <PerformanceStats />
        <TestimonialsCarousel />
        <TeamMemberSection />
        <ComparisonSection />
        <BusinessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
