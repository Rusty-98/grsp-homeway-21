
import { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  shifts: number;
  onTimePercentage: number;
  recommendation?: string;
  distance: string;
  isRecommended: boolean;
  strength?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Oscar T.",
    role: "Dishwasher",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.8,
    shifts: 103,
    onTimePercentage: 97,
    distance: "3 miles",
    isRecommended: true
  },
  {
    id: 2,
    name: "Micheal L.",
    role: "Forklift Operator",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    rating: 4.9,
    shifts: 134,
    onTimePercentage: 100,
    distance: "1 mile",
    isRecommended: true
  },
  {
    id: 3,
    name: "Emma R.",
    role: "Retail Merchandiser",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 4.9,
    shifts: 46,
    onTimePercentage: 97,
    recommendation: "Emma is a great team player. She's fast, efficient, and is always on time.",
    distance: ".5 miles",
    isRecommended: true,
    strength: "Fast worker"
  },
  {
    id: 4,
    name: "Jeremy S.",
    role: "Bartender",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 4.9,
    shifts: 73,
    onTimePercentage: 98,
    distance: "2 miles",
    isRecommended: true
  },
  {
    id: 5,
    name: "Sophia K.",
    role: "Server",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 4.7,
    shifts: 52,
    onTimePercentage: 95,
    distance: "4 miles",
    isRecommended: true
  }
];

const TeamMemberSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.team-animate');
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
    <section id="team" className="py-20 bg-slate-900 text-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="team-animate opacity-0 text-4xl md:text-5xl font-bold mb-2">
            Meet your next <span className="italic">team member</span>
          </h2>
          <p className="team-animate opacity-0 text-lg mt-4 max-w-3xl mx-auto">
            From experienced line cooks to warehouse specialists, pre-vetted Pros 
            on GRSP are ready to work now
          </p>
        </div>
        
        <div className="mt-12 team-animate opacity-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg p-6 h-full flex flex-col hover:shadow-xl transition-shadow">
                    <div className="flex justify-between mb-4">
                      <div className="flex">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{member.name}</h3>
                          <p className="text-gray-400 italic">{member.role}</p>
                          {member.isRecommended && (
                            <span className="inline-flex items-center text-xs text-green-400 mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                              Recommended
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-blue-400 flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span className="text-xs">{member.distance}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <span className="text-xl font-bold mr-1">{member.rating}</span>
                          <span className="text-yellow-400">★</span>
                        </div>
                        <p className="text-xs text-gray-400">Pro Rating</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold mb-1">{member.shifts}</div>
                        <p className="text-xs text-gray-400">Shifts</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-xl font-bold mb-1">{member.onTimePercentage}%</div>
                        <p className="text-xs text-gray-400">On-time Arrival</p>
                      </div>
                    </div>
                    
                    {member.recommendation && (
                      <div className="bg-slate-700 p-3 rounded-md mt-auto">
                        {member.strength && (
                          <div className="mb-2">
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {member.strength}
                            </span>
                          </div>
                        )}
                        <p className="text-sm italic text-gray-300">"{member.recommendation}"</p>
                      </div>
                    )}
                    
                    {!member.recommendation && (
                      <div className="text-center bg-slate-700 p-3 rounded-md mt-auto">
                        <div className="flex justify-center mb-2">
                          <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-4xl font-bold text-yellow-400">
                            {member.rating}
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">Average rating from top 3 businesses</p>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-white text-slate-800" />
              <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-white text-slate-800" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
