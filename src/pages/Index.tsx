
import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import StaffingSolutionsSection from "../components/StaffingSolutionsSection";
import StickyComparisonSection from "../components/StickyComparisonSection";
import ContactForm from "../components/ContactForm";
import PerformanceStats from "../components/PerformanceStats";
import BusinessSection from "../components/BusinessSection";
import TeamMemberSection from "../components/TeamMemberSection";
import TrustedCompaniesMarquee from "../components/TrustedCompaniesMarquee";
import Footer from "../components/Footer";
import ComparisonSection from "@/components/ComparisonSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ComparisonSection />
      <StaffingSolutionsSection />
      <PerformanceStats />
      <TeamMemberSection />
      <BusinessSection />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
};

export default Index;
