import { useEffect, useRef } from "react";

const ComparisonSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".comparison-animate");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in", "opacity-100");
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
    { name: "Personalized matching", available: true },
    { name: "Background checks", available: true },
    { name: "Searchable user profiles with work history", available: true },
    { name: "Pro training", available: true },
    { name: "Pre-shift announcements", available: true },
    { name: "Geofencing & Pro-tracking", available: true },
  ];

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="comparison-animate opacity-0 text-3xl sm:text-4xl font-bold mb-3">
            The <span className="italic text-red-400">smarter choice</span> for staffing
          </h2>
          <p className="comparison-animate opacity-0 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Compare traditional hiring methods to our modern approach.
          </p>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <div className="comparison-animate opacity-0 min-w-[600px] sm:min-w-0 max-w-5xl mx-auto mt-10 overflow-hidden rounded-lg shadow-lg border border-gray-600">
            <div className="grid grid-cols-3 text-white divide-x divide-gray-700 bg-gradient-to-r from-gray-800 to-gray-700">
              <div className="p-4 font-bold text-gray-300 text-left">Features</div>
              <div className="p-4 font-bold text-center">GRSP</div>
              <div className="p-4 font-bold text-center">Other's Platforms</div>
            </div>

            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-3 divide-x divide-gray-700 border-t border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all"
              >
                <div className="p-4 text-left text-gray-300 font-medium">
                  {feature.name}
                </div>
                <div
                  className={`p-4 flex items-center justify-center text-lg font-bold ${
                    feature.available ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {feature.available ? "✅" : "❌"}
                </div>
                <div
                  className={`p-4 flex items-center justify-center text-lg font-bold ${
                    feature.available ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {feature.available ? "❌" : "✅"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
