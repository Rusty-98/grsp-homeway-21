
import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Retail Associate",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "GRSP transformed my work life by giving me the flexibility to choose shifts that fit around my university schedule. The app is intuitive, and I always know exactly when and where I'm working next.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Line Cook",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "I've been using GRSP for six months, and it's been incredible. I can pick up extra shifts when I need more income, and the payment process is seamless. It's the perfect solution for hospitality workers.",
    rating: 5
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Event Staff",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "As someone who values work-life balance, GRSP has been a game-changer. I can choose interesting events to work at while maintaining time for my personal projects. The platform is reliable and user-friendly.",
    rating: 4
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Warehouse Associate",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "GRSP connected me with consistent work opportunities when I needed them most. The verification process was thorough, which means I'm working with legitimate businesses I can trust.",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };
  
  const resetTimer = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      handleNext();
    }, 5000);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    
    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };
  
  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const testimonialElements = sectionRef.current?.querySelectorAll('.testimonial-animate');
    testimonialElements?.forEach((el) => observer.observe(el));
    
    return () => {
      testimonialElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };
  
  return (
    <section 
      id="testimonials" 
      className="section-spacing bg-grsp-gray"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="testimonial-animate opacity-0 inline-block px-3 py-1 bg-grsp-blue/10 text-grsp-blue rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="testimonial-animate opacity-0 text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="testimonial-animate opacity-0 text-grsp-darkgray text-lg">
            Thousands of workers have found flexible opportunities through GRSP.
          </p>
        </div>
        
        <div className="testimonial-animate opacity-0 max-w-4xl mx-auto">
          <div 
            className="carousel-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="carousel-slide px-4">
                  <div className="bg-white rounded-xl p-8 shadow-md">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-grsp-darkgray">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg italic text-grsp-darkgray">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none hidden md:flex"
              onClick={handlePrev}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md focus:outline-none hidden md:flex"
              onClick={handleNext}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          <div className="carousel-dots mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
