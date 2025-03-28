import { useEffect, useRef } from 'react';

const ComparisonSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.comparison-animate');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in', 'opacity-100');
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

  const features = [
    { name: 'Personalized matching', available: true },
    { name: 'Background checks', available: true },
    { name: 'Searchable user profiles with work history', available: true },
    { name: 'Pro training', available: true },
    { name: 'Pre-shift announcements', available: false },
    { name: 'Geofencing & Pro-tracking', available: false },
  ];

  return (
    <section ref={sectionRef} className="section-spacing py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="comparison-animate opacity-0 text-4xl md:text-5xl font-bold mb-4">
            The <span className="italic text-red-400">smarter choice</span> for staffing
          </h2>
          <p className="comparison-animate opacity-0 text-lg text-gray-300 max-w-3xl mx-auto">
            Compare traditional hiring methods to our modern approach.
          </p>
        </div>

        <div className="comparison-animate opacity-0 max-w-5xl mx-auto mt-12 overflow-hidden rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 text-white divide-y sm:divide-x sm:divide-y-0 divide-gray-700 bg-gradient-to-r from-gray-800 to-gray-700">
            <div className="p-6 font-bold text-gray-300 text-center sm:text-left">Features</div>
            <div className="p-6 font-bold text-center">New Approach</div>
            <div className="p-6 font-bold text-center">Traditional</div>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-x sm:divide-y-0 divide-gray-700 border-t border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all">
              <div className="p-6 text-center sm:text-left text-gray-300 font-medium">{feature.name}</div>
              <div className={`p-6 flex items-center justify-center text-xl font-bold ${feature.available ? 'text-green-400' : 'text-red-400'}`}>
                {feature.available ? '✅' : '❌'}
              </div>
              <div className={`p-6 flex items-center justify-center text-xl font-bold ${feature.available ? 'text-red-400' : 'text-green-400'}`}>
                {feature.available ? '❌' : '✅'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;