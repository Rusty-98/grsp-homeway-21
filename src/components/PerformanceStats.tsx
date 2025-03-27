
import { useEffect, useRef, useState } from 'react';

type StatCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

const StatCounter = ({ end, suffix = '', prefix = '', duration = 2000, delay = 0, className }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            setTimeout(() => {
              let startTime: number;
              const startVal = 0;
              const difference = end - startVal;
              
              function animate(timestamp: number) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const currentCount = Math.floor(startVal + difference * progress);
                setCount(currentCount);
                
                if (progress < 1) {
                  requestAnimationFrame(animate);
                }
              }
              
              requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, delay]);
  
  return (
    <span className={`number-animate ${className}`} ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const PerformanceStats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = sectionRef.current?.querySelectorAll('.stat-animate');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="performance" className="section-spacing bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="stat-animate opacity-0 text-4xl md:text-5xl font-bold mb-2">
            Performance <span className="italic text-red-500">that proves it</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="stat-animate opacity-0 text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3">
              <StatCounter end={7} suffix="M+" />
            </div>
            <p className="text-lg text-grsp-darkgray">
              reliable workers ready to go
            </p>
          </div>
          
          <div className="stat-animate opacity-0 text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3">
              <StatCounter end={100} suffix="%" />
            </div>
            <p className="text-lg text-grsp-darkgray">
              of jobs filled within 24 hours<sup>2</sup>
            </p>
          </div>
          
          <div className="stat-animate opacity-0 text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3 flex items-center justify-center">
              <StatCounter end={4.8} />
              <span className="text-yellow-400 text-5xl ml-2">★</span>
            </div>
            <p className="text-lg text-grsp-darkgray">
              average worker rating out<br />of 5 stars by businesses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;
