
import { useEffect, useRef, useState } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const targetCount = 10000;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Ensure element remains visible
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
            }, 600);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    
    const heroElements = heroRef.current?.querySelectorAll('.hero-animate');
    heroElements?.forEach((el) => observer.observe(el));
    
    return () => {
      heroElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // Counter animation
  useEffect(() => {
    if (count < targetCount) {
      const animationDuration = 2000; // 2 seconds
      const totalSteps = 50; // Number of steps to reach the target
      const stepValue = Math.floor(targetCount / totalSteps);
      const stepDuration = animationDuration / totalSteps;
      
      const timer = setTimeout(() => {
        const nextCount = Math.min(count + stepValue, targetCount);
        setCount(nextCount);
      }, stepDuration);
      
      return () => clearTimeout(timer);
    }
  }, [count]);
  
  const companies = [
    'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Dropbox', 
    'Spotify', 'Airbnb', 'Uber', 'Lyft', 'Twitter', 'LinkedIn', 'Slack'
  ];
  
  const duplicatedCompanies = [...companies, ...companies]; // Duplicate for seamless loop
  
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-32 hero-gradient w-full" ref={heroRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <span className="hero-animate inline-block px-3 py-1 bg-grsp-blue/10 text-grsp-blue rounded-full text-sm font-medium mb-4">
                Premium Business Staffing Solution
              </span>
              <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Connect with <span className="bg-gradient-to-r from-grsp-blue to-grsp-darkblue bg-clip-text text-transparent">reliable, vetted workers instantly</span>
              </h1>
              <p className="hero-animate text-lg md:text-xl text-grsp-darkgray mb-8">
                GRSP matches you with skilled workers for temporary or permanent positions so you are never short staffed.
              </p>
              <div className="hero-animate flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="px-8 py-3 bg-grsp-blue text-white rounded-md font-medium shadow-md hover:bg-grsp-darkblue transition-colors button-transition">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-grsp-blue text-grsp-blue rounded-md font-medium hover:bg-grsp-blue/5 transition-colors">
                  Get Demo
                </button>
              </div>
              <div className="hero-animate mt-8 flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-grsp-gray flex items-center justify-center text-xs font-medium overflow-hidden"
                    >
                      <span className="text-grsp-darkblue">{`U${i}`}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-grsp-darkgray">
                  <span className="font-semibold number-animate">{count.toLocaleString()}+</span> businesses served this month
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="hero-animate relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/lovable-uploads/5a732f21-797b-4702-9ea8-df838714336e.png" 
                  alt="Professional chefs working in a kitchen" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-xl"></div>
            </div>
            
            {/* Ready to experience tag */}
            <div className="hero-animate absolute -top-10 -right-5 md:top-5 md:right-5 z-20 bg-white p-5 rounded-lg shadow-xl transform rotate-3 max-w-xs">
              <h3 className="text-2xl font-bold text-slate-800">Ready to experience</h3>
              <p className="text-2xl font-bold italic text-red-500">the GRSP difference?</p>
              <div className="flex gap-3 mt-3">
                <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full">Sign Up</span>
                <span className="text-xs px-2 py-1 border border-slate-300 rounded-full">Get Demo</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="hero-animate absolute -top-8 -right-8 w-40 h-40 bg-grsp-blue/10 rounded-full blur-2xl"></div>
            <div className="hero-animate absolute -bottom-12 -left-12 w-48 h-48 bg-grsp-lightblue/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        {/* Trusted by section with marquee */}
        <div className="hero-animate mt-20 text-center">
          <p className="text-sm uppercase text-grsp-darkgray font-medium tracking-wider mb-8">
            Trusted by leading companies
          </p>
          <div className="marquee-container">
            <div className="marquee-content">
              {duplicatedCompanies.map((company, i) => (
                <div key={i} className="inline-block mx-6 text-grsp-darkgray/80 font-semibold text-xl">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
