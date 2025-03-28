import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import StaffingSolutionsSection from "../components/StaffingSolutionsSection";
import PerformanceStats from "../components/PerformanceStats";
import BusinessSection from "../components/BusinessSection";
import TeamMemberSection from "../components/TeamMemberSection";
import Footer from "../components/Footer";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  const location = useLocation();

  // Create refs for each section
  const heroRef = useRef(null);
  const comparisonRef = useRef(null);
  const staffingRef = useRef(null);
  const performanceRef = useRef(null);
  const teamRef = useRef(null);
  const businessRef = useRef(null);
  const testimonialsRef = useRef(null);

  // Scroll to the section based on the URL hash
  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash.substring(1); // Remove #
      const sectionMap = {
        features: comparisonRef,
        staffing: staffingRef,
        performance: performanceRef,
        team: teamRef,
        business: businessRef,
        testimonials: testimonialsRef,
      };

      if (sectionMap[hash] && sectionMap[hash].current) {
        sectionMap[hash].current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={comparisonRef}>
        <ComparisonSection />
      </div>
      <div ref={staffingRef}>
        <StaffingSolutionsSection />
      </div>
      <div ref={performanceRef}>
        <PerformanceStats />
      </div>
      <div ref={teamRef}>
        <TeamMemberSection />
      </div>
      <div ref={businessRef}>
        <BusinessSection />
      </div>
      <div ref={testimonialsRef}>
        <TestimonialsCarousel />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
