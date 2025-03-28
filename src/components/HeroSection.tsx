
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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

  // const companies = [
  //   'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 'Netflix', 'Dropbox',
  //   'Spotify', 'Airbnb', 'Uber', 'Lyft', 'Twitter', 'LinkedIn', 'Slack'
  // ];

  const companies = [
    '/Nobu-logo.webp',
    '/embassy-suites-logo.webp',
    '/moma-logo.webp',
    '/scottsdale-logo.webp',
    '/Target-logo.webp',
    '/Standford-logo.webp',
    '/Nobu-logo.webp',
    '/embassy-suites-logo.webp',
    '/moma-logo.webp',
    '/scottsdale-logo.webp',
    '/Target-logo.webp',
    '/Standford-logo.webp',
  ]

  const duplicatedCompanies = [...companies, ...companies]; // Duplicate for seamless loop

  const testimonials = [
    { name: "John Smith", role: "HR Director", company: "TechGiant", comment: "Changed how we staff our events completely!" },
    { name: "Sarah Jones", role: "Operations Manager", company: "FoodCorp", comment: "Found reliable staff within hours!" },
    { name: "Michael Chen", role: "Store Manager", company: "RetailPlus", comment: "Quality workers every single time." }
  ];

  return (
    <section className= "pt-28 pb-20 md:pt-36 md:pb-32 hero-gradient w-full" ref = { heroRef } >
      <div className="container mx-auto px-4 md:px-6" >
        <div className="relative z-10 flex flex-col lg:flex-row items-center" >
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8" >
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left" >
              <span className="hero-animate inline-block px-3 py-1 bg-grsp-blue/10 text-grsp-blue rounded-full text-sm font-medium mb-4" >
                Premium Business Staffing Solution
                  </span>
                  < h1 className = "hero-animate text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight" >
                    Connect with <span className= "bg-gradient-to-r from-grsp-blue to-grsp-darkblue italic bg-clip-text text-transparent mr-1" > reliable, vetted </span>workers instantly
                      </h1>
                      < p className = "hero-animate text-lg md:text-xl text-grsp-darkgray mb-8" >
                        GRSP matches you with skilled workers for temporary or permanent positions so you are never short staffed.
              </p>
                          < div className = "hero-animate flex flex-col sm:flex-row justify-center lg:justify-start gap-4" >
                            <button className="px-8 py-3 bg-grsp-blue text-white rounded-md font-medium shadow-md hover:bg-grsp-darkblue transition-colors button-transition" >
                              Get Started
                                </button>
                                < button className = "px-8 py-3 border border-grsp-blue text-grsp-blue rounded-md font-medium hover:bg-grsp-blue/5 transition-colors" >
                                  Get Demo
                                    </button>
                                    </div>
                                    < div className = "hero-animate mt-8 flex items-center justify-center lg:justify-start space-x-4" >
                                      <div className="flex -space-x-2" >
                                      {
                                        [1, 2, 3, 4].map((i) => (
                                          <div 
                      key= { i }
                      className = "w-8 h-8 rounded-full border-2 border-white bg-grsp-gray flex items-center justify-center text-xs font-medium overflow-hidden"
                                          >
                                          <span className="text-grsp-darkblue" > {`U${i}`} </span>
                                        </div>
                  ))}
</div>
  < div className = "text-sm text-grsp-darkgray" >
    <span className="font-semibold number-animate" > { count.toLocaleString() } + </span> businesses served this month
      </div>
      </div>
      </div>
      </div>

      < div className = "w-full lg:w-1/2 relative" >
        <div className="hero-animate relative z-10 rounded-xl overflow-hidden shadow-2xl" >
          <div className="aspect-w-16 aspect-h-9" >
            <img 
                  src="/herosection.gif"
alt = "Professional chefs working in a kitchen"
className = "object-cover w-full h-full"
  />
  </div>
  < div className = "absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-xl" > </div>
    </div>

{/* Ready to experience tag */ }
<div className="hero-animate absolute -top-10 -right-5 md:top-5 md:right-5 z-20 bg-white p-5 rounded-lg shadow-xl transform rotate-3 max-w-xs" >
  <h3 className="text-2xl font-bold text-slate-800" > Ready to experience </h3>
    < p className = "text-2xl font-bold italic text-red-500" > the GRSP difference ? </p>
      < div className = "flex gap-3 mt-3" >
        <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full" onClick={() => window.open('https://grsp.in/userlogin.php', '_blank')} > Sign Up </span>
          < span className = "text-xs px-2 py-1 border border-slate-300 rounded-full" > Get Demo </span>
            </div>
            </div>

{/* Testimonial floating elements */ }
<motion.div 
              initial={ { opacity: 0, x: -20 } }
animate = {{ opacity: 1, x: 0 }}
transition = {{ delay: 0.5, duration: 0.5 }}
className = "hero-animate absolute -left-10 top-1/3 z-20 bg-white p-3 rounded-lg shadow-lg max-w-[200px] animate-float-slow"
  >
  <div className="flex items-start" >
    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2 flex-shrink-0" >
      <svg xmlns="http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = { 1.5} stroke = "currentColor" className = "w-5 h-5" >
        <path strokeLinecap="round" strokeLinejoin = "round" d = "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </div>
          < div >
          <p className="text-xs font-medium text-gray-800" > { testimonials[0].comment } </p>
            < p className = "text-xs text-grsp-darkgray mt-1" > { testimonials[0].name } </p>
              </div>
              </div>
              </motion.div>

              < motion.div
initial = {{ opacity: 0, y: 20 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.8, duration: 0.5 }}
className = "hero-animate absolute -bottom-5 right-10 z-20 bg-white p-3 rounded-lg shadow-lg max-w-[200px] animate-float-slow-2"
  >
  <div className="flex items-start" >
    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2 flex-shrink-0" >
      <svg xmlns="http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = { 1.5} stroke = "currentColor" className = "w-5 h-5" >
        <path strokeLinecap="round" strokeLinejoin = "round" d = "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          </div>
          < div >
          <p className="text-xs font-medium text-gray-800" > { testimonials[1].comment } </p>
            < p className = "text-xs text-grsp-darkgray mt-1" > { testimonials[1].name } </p>
              </div>
              </div>
              </motion.div>

{/* Live stats floating element */ }
<motion.div 
              initial={ { opacity: 0, x: 20 } }
animate = {{ opacity: 1, x: 0 }}
transition = {{ delay: 1.1, duration: 0.5 }}
className = "hero-animate absolute top-1/4 -right-5 z-20 bg-white p-3 rounded-lg shadow-lg animate-float-slow-3"
  >
  <div className="flex items-center" >
    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-2" >
      <svg xmlns="http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = { 1.5} stroke = "currentColor" className = "w-5 h-5" >
        <path strokeLinecap="round" strokeLinejoin = "round" d = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </div>
          < div >
          <p className="text-xs font-medium" > Live Now </p>
            < p className = "text-xs text-grsp-darkgray" > 283 workers available </p>
              </div>
              </div>
              </motion.div>

{/* Decorative elements */ }
<div className="hero-animate absolute -top-8 -right-8 w-40 h-40 bg-grsp-blue/10 rounded-full blur-2xl" > </div>
  < div className = "hero-animate absolute -bottom-12 -left-12 w-48 h-48 bg-grsp-lightblue/10 rounded-full blur-3xl" > </div>
    </div>
    </div>

{/* Trusted by section with marquee */ }
<div className="hero-animate mt-24 text-center" >
  <div className = "marquee-container mt-5" >
    <div className="marquee-content" >
    {
      duplicatedCompanies.map((company, i) => (
        <img key= { i } src = { company } alt = "Company Logo" className = "inline-block mx-6 h-12 md:h-16" />
      ))
    }
      </div>
      </div>
      </div>
      </div>
      </section>
  );
};

export default HeroSection;
