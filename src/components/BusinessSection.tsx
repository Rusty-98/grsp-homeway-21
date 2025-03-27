
import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';

const BusinessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.business-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-blur-in');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="business" className="section-spacing bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="business-animate opacity-0 relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=80" 
                  alt="Business dashboard" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 -left-10 bg-white p-4 rounded-lg shadow-lg animate-float z-20">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-grsp-blue/20 flex items-center justify-center text-grsp-blue mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Worker</p>
                    <p className="text-xs text-grsp-darkgray">Just joined your team</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -right-6 bg-white p-4 rounded-lg shadow-lg animate-float z-20" style={{ animationDelay: '1s' }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Shift Completed</p>
                    <p className="text-xs text-grsp-darkgray">All tasks finished</p>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-grsp-blue/10 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="business-animate opacity-0 inline-block px-3 py-1 bg-grsp-blue/10 text-grsp-blue rounded-full text-sm font-medium mb-4">
                For Businesses
              </span>
              <h2 className="business-animate opacity-0 text-3xl md:text-4xl font-bold mb-6">
                Staff Your Business with Qualified Workers On Demand
              </h2>
              <p className="business-animate opacity-0 text-grsp-darkgray text-lg mb-8">
                GRSP helps businesses find reliable workers for shifts, events, or projects with our extensive pool of pre-vetted talent ready to work.
              </p>
              
              <div className="space-y-6">
                <div className="business-animate opacity-0 flex">
                  <div className="w-10 h-10 rounded-full bg-grsp-blue/10 text-grsp-blue flex-shrink-0 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Reduce Hiring Costs</h3>
                    <p className="text-grsp-darkgray">Our platform eliminates traditional recruitment expenses with our on-demand staffing model.</p>
                  </div>
                </div>
                
                <div className="business-animate opacity-0 flex">
                  <div className="w-10 h-10 rounded-full bg-grsp-blue/10 text-grsp-blue flex-shrink-0 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Flexible Staffing</h3>
                    <p className="text-grsp-darkgray">Quickly scale your workforce up or down based on your changing business needs.</p>
                  </div>
                </div>
                
                <div className="business-animate opacity-0 flex">
                  <div className="w-10 h-10 rounded-full bg-grsp-blue/10 text-grsp-blue flex-shrink-0 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Vetted Workers</h3>
                    <p className="text-grsp-darkgray">Every worker is pre-screened to ensure they meet your quality and reliability standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add the contact form section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="business-animate opacity-0 text-3xl md:text-4xl font-bold mb-4">
              Get in Touch with Us
            </h2>
            <p className="business-animate opacity-0 text-grsp-darkgray text-lg max-w-2xl mx-auto">
              Have questions about how GRSP can help your business? Fill out the form below and we'll get back to you shortly.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto business-animate opacity-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
