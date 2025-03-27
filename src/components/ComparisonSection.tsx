
import { useEffect, useRef } from 'react';

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.comparison-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
                // Ensure visibility
                setTimeout(() => {
                  el.classList.add('opacity-100');
                }, 600);
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
    <section id="comparison" className="section-spacing bg-white py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="comparison-animate opacity-0 text-4xl md:text-5xl font-bold mb-4">
            The <span className="italic text-red-500">smarter choice</span> for staffing
          </h2>
          <p className="comparison-animate opacity-0 text-lg text-grsp-darkgray max-w-3xl mx-auto">
            Compare the old way of finding workers—full of phone calls, paperwork, and waiting
            —to GRSP's approach that connects you with reliable workers, quickly.
          </p>
        </div>
        
        <div className="comparison-animate opacity-0 max-w-5xl mx-auto mt-12 overflow-hidden rounded-xl bg-slate-800 shadow-xl">
          <div className="grid grid-cols-3 text-white">
            <div className="p-6 border-r border-slate-700 flex items-center justify-center">
              <div className="flex items-center text-2xl font-bold text-slate-400">
                <span className="sr-only">GRSP Logo</span>
                GRSP
              </div>
            </div>
            <div className="p-6 border-r border-slate-700 flex items-center justify-center">
              <div className="text-xl font-bold">GRSP</div>
            </div>
            <div className="p-6 flex items-center justify-center">
              <div className="text-xl font-bold">Your staffing agency<sup>1</sup></div>
            </div>
          </div>
          
          {/* Time to fill shifts */}
          <div className="grid grid-cols-3 border-t border-slate-700">
            <div className="p-6 border-r border-slate-700 bg-slate-900">
              <p className="font-medium">Time to fill shifts</p>
            </div>
            <div className="p-6 border-r border-slate-700 flex items-center">
              <p className="font-medium">Less than 24 hrs</p>
            </div>
            <div className="p-6 flex items-center">
              <p className="font-medium">7-10 days</p>
            </div>
          </div>
          
          {/* Pro show rate */}
          <div className="grid grid-cols-3 border-t border-slate-700">
            <div className="p-6 border-r border-slate-700 bg-slate-900">
              <p className="font-medium">Pro show rate</p>
              <p className="text-sm text-slate-400 mt-1">Minimize no-shows with paid backups and proactive Pro communication</p>
            </div>
            <div className="p-6 border-r border-slate-700 flex items-center">
              <p className="font-medium">98%</p>
            </div>
            <div className="p-6 flex items-center">
              <p className="font-medium">50-60%</p>
            </div>
          </div>
          
          {/* Personalized matching */}
          <div className="grid grid-cols-3 border-t border-slate-700">
            <div className="p-6 border-r border-slate-700 bg-slate-900">
              <p className="font-medium">Personalized matching</p>
              <p className="text-sm text-slate-400 mt-1">Tailored for your unique needs based on work history, supervisor and peer feedback, ratings, certifications, quizzes</p>
            </div>
            <div className="p-6 border-r border-slate-700 flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <div className="p-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Background checks */}
          <div className="grid grid-cols-3 border-t border-slate-700">
            <div className="p-6 border-r border-slate-700 bg-slate-900">
              <p className="font-medium">Background checks</p>
              <p className="text-sm text-slate-400 mt-1">Background checks for all new Pros before their first shift</p>
            </div>
            <div className="p-6 border-r border-slate-700 flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <div className="p-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Searchable user profiles */}
          <div className="grid grid-cols-3 border-t border-slate-700">
            <div className="p-6 border-r border-slate-700 bg-slate-900">
              <p className="font-medium">Searchable user profiles with work history</p>
              <p className="text-sm text-slate-400 mt-1">Rich profiles with headshots, work history, ratings and references - easily searchable in your dashboard</p>
            </div>
            <div className="p-6 border-r border-slate-700 flex items-center justify-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <div className="p-6 flex items-center justify-center">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
