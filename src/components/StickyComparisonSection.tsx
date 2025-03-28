
import React, { useEffect, useRef, useState } from 'react';
import { useMobile } from '../hooks/use-mobile';

const StickyComparisonSection: React.FC = () => {
  const isMobile = useMobile();
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !stickyRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const stickyHeight = stickyRef.current.offsetHeight;
      
      // Start sticky behavior when the top of the section reaches the top of the viewport
      if (sectionTop <= 0 && sectionBottom > stickyHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Smarter Choice for Staffing</h2>
        
        <div className="relative">
          {/* Sticky comparison table (visible on mobile) */}
          {isMobile && (
            <div 
              ref={stickyRef}
              className={`w-full bg-white z-10 transition-all duration-200 ${
                isSticky ? "fixed top-0 left-0 right-0 shadow-md" : ""
              }`}
              style={{ 
                width: isSticky ? "100%" : "auto",
                top: isSticky ? "0" : "auto"
              }}
            >
              <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-3 gap-1 text-center font-semibold">
                  <div className="bg-slate-800 text-gray-400 p-3 rounded-tl">GRSP</div>
                  <div className="bg-slate-800 text-white p-3">GRSP</div>
                  <div className="bg-slate-800 text-white p-3 rounded-tr">
                    Your staffing agency<sup>1</sup>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main content - always visible */}
          <div className={`${isMobile && isSticky ? 'pt-16' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature comparisons */}
              <ComparisonItem 
                title="Specialized IT Talent" 
                grsp={true} 
                competitor={false}
              />
              <ComparisonItem 
                title="15+ Years Experience" 
                grsp={true} 
                competitor={false}
              />
              <ComparisonItem 
                title="Dedicated Account Manager" 
                grsp={true} 
                competitor={true}
              />
              <ComparisonItem 
                title="Technical Screening" 
                grsp={true} 
                competitor={true}
              />
              <ComparisonItem 
                title="Skills Validation" 
                grsp={true} 
                competitor={false}
              />
              <ComparisonItem 
                title="Cultural Fit Assessment" 
                grsp={true} 
                competitor={false}
              />
              <ComparisonItem 
                title="24/7 Support" 
                grsp={true} 
                competitor={false}
              />
              <ComparisonItem 
                title="Guaranteed Satisfaction" 
                grsp={true} 
                competitor={false}
              />
            </div>
            
            <p className="text-xs text-gray-500 mt-8">
              <sup>1</sup> Based on industry average data from comparable staffing agencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for each comparison item
const ComparisonItem: React.FC<{
  title: string;
  grsp: boolean;
  competitor: boolean;
}> = ({ title, grsp, competitor }) => {
  return (
    <div className="grid grid-cols-3 gap-1 bg-white p-4 rounded-lg shadow-sm">
      <div className="text-slate-700 font-medium col-span-1">{title}</div>
      <div className="text-center">
        {grsp ? (
          <span className="text-green-600 text-xl">✓</span>
        ) : (
          <span className="text-red-500 text-xl">✕</span>
        )}
      </div>
      <div className="text-center">
        {competitor ? (
          <span className="text-green-600 text-xl">✓</span>
        ) : (
          <span className="text-red-500 text-xl">✕</span>
        )}
      </div>
    </div>
  );
};

export default StickyComparisonSection;
