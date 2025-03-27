
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const PerformanceStats = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  return (
    <section id="performance" className="section-spacing bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            Performance <span className="italic text-red-500">that proves it</span>
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariant} className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3">
              <StatCounter end={7} suffix="M+" />
            </div>
            <p className="text-lg text-grsp-darkgray">
              reliable workers ready to go
            </p>
          </motion.div>
          
          <motion.div variants={itemVariant} className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3">
              <StatCounter end={100} suffix="%" />
            </div>
            <p className="text-lg text-grsp-darkgray">
              of jobs filled within 24 hours<sup>2</sup>
            </p>
          </motion.div>
          
          <motion.div variants={itemVariant} className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3 flex items-center justify-center">
              <StatCounter end={4.8} />
              <span className="text-yellow-400 text-5xl ml-2">★</span>
            </div>
            <p className="text-lg text-grsp-darkgray">
              average worker rating out<br />of 5 stars by businesses
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceStats;
