
import { useRef, useEffect } from 'react';

const companies = [
  { name: "Acme Inc", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=ACME+INC" },
  { name: "TechCorp", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=TECHCORP" },
  { name: "Global Enterprises", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=GLOBAL" },
  { name: "Sunrise Industries", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=SUNRISE" },
  { name: "Peak Solutions", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=PEAK" },
  { name: "Horizon Group", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=HORIZON" },
  { name: "Cascade Systems", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=CASCADE" },
  { name: "Pinnacle Ltd", logo: "https://placehold.co/200x80/e4e4e7/71717a?text=PINNACLE" },
];

const TrustedCompaniesMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Ensure visibility
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
            }, 600);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 bg-gray-50" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        // <h3 className="text-center text-xl font-semibold text-grsp-darkgray mb-8 opacity-0 animate-fade-in">
        //   Trusted by leading companies nationwide
        // </h3>
        
        <div className="marquee-container overflow-hidden">
          <div className="flex marquee-content">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-12 md:h-16" 
                />
              </div>
            ))}
            
            {/* Duplicate for seamless looping */}
            {companies.map((company, index) => (
              <div 
                key={`duplicate-${index}`} 
                className="mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="h-12 md:h-16" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesMarquee;
