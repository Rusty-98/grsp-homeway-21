
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart4, Users, Globe, Heart, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our mission is to create economic opportunities</h1>
              <p className="text-xl text-grsp-darkgray mb-8">
                GRSP is building the staffing platform of the future by connecting businesses with qualified workers on demand.
              </p>
              <div className="flex justify-center space-x-4">
                <Button size="lg" className="bg-grsp-blue hover:bg-grsp-darkblue">
                  Join our team <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-grsp-darkgray mb-6">
                  GRSP was founded in 2018 with a simple vision: to create a better staffing solution for both businesses and workers. Our founders recognized the inefficiencies in traditional staffing agencies and set out to create a more transparent, efficient, and worker-friendly platform.
                </p>
                <p className="text-lg text-grsp-darkgray mb-6">
                  What started as a small team with big dreams has grown into a nationwide network of over 3 million workers and thousands of business partners. Today, GRSP is transforming the staffing industry by leveraging technology to match workers with opportunities that fit their skills, schedule, and preferences.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://placehold.co/600x400/e5edff/1d4ed8?text=Our+Journey" 
                  alt="GRSP team working together" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-grsp-darkgray max-w-3xl mx-auto">
                The principles that guide everything we do at GRSP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 text-grsp-blue" />,
                  title: "People First",
                  description: "We believe in treating our workers, clients, and team members with respect and dignity. Everyone deserves opportunities to thrive."
                },
                {
                  icon: <Award className="h-10 w-10 text-grsp-blue" />,
                  title: "Quality & Reliability",
                  description: "We are committed to connecting businesses with skilled, vetted professionals who deliver exceptional work every time."
                },
                {
                  icon: <Globe className="h-10 w-10 text-grsp-blue" />,
                  title: "Community Impact",
                  description: "We're passionate about creating positive change in local communities by creating flexible economic opportunities for all."
                },
                {
                  icon: <BarChart4 className="h-10 w-10 text-grsp-blue" />,
                  title: "Innovation",
                  description: "We continuously improve our platform to make staffing more efficient, transparent, and accessible for everyone."
                },
                {
                  icon: <Heart className="h-10 w-10 text-grsp-blue" />,
                  title: "Inclusivity",
                  description: "We welcome diversity in all its forms and work to create opportunities for people of all backgrounds."
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-grsp-blue" />,
                  title: "Transparency",
                  description: "We believe in clear communication, fair pricing, and being accountable to our community of workers and businesses."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-grsp-darkgray">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-lg text-grsp-darkgray max-w-3xl mx-auto">
                Meet the talented individuals guiding GRSP's mission and vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  title: "Co-Founder & CEO",
                  image: "https://placehold.co/300x300/e5edff/1d4ed8?text=AJ",
                  bio: "Alex brings over 15 years of experience in tech and staffing. Previously led operations at [Company]."
                },
                {
                  name: "Sarah Williams",
                  title: "Co-Founder & COO",
                  image: "https://placehold.co/300x300/e5edff/1d4ed8?text=SW",
                  bio: "Sarah's background in HR and workforce management drives GRSP's worker-first approach."
                },
                {
                  name: "Michael Chen",
                  title: "CTO",
                  image: "https://placehold.co/300x300/e5edff/1d4ed8?text=MC",
                  bio: "Michael leads our engineering team, building the technology that powers our platform."
                },
                {
                  name: "Jessica Rodriguez",
                  title: "VP of Business Development",
                  image: "https://placehold.co/300x300/e5edff/1d4ed8?text=JR",
                  bio: "Jessica focuses on expanding GRSP's reach and building strategic partnerships."
                },
                {
                  name: "David Kim",
                  title: "VP of Product",
                  image: "https://placehold.co/300x300/e5edff/1d4ed8?text=DK",
                  bio: "David oversees GRSP's product roadmap and user experience strategy."
                },
                {
                  name: "Lisa Thompson",
                  title: "VP of People Operations",
                  image: "https://placehold.co/300x300/e5edff/1d4ed8?text=LT",
                  bio: "Lisa ensures GRSP maintains a thriving company culture as we grow."
                }
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mx-auto w-48 h-48 mb-5 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-grsp-blue mb-3">{member.title}</p>
                  <p className="text-grsp-darkgray">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team Section */}
        <section className="py-16 md:py-24 bg-grsp-blue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
              <p className="text-xl mb-8">
                We're looking for talented individuals to help us transform the future of work. Check out our open positions and become part of our mission.
              </p>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-grsp-blue"
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
