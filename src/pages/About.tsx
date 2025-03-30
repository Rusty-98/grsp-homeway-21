import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BarChart4, Users, Globe, Heart, BookOpen, ShieldCheck, Briefcase, Lightbulb, CheckCircle } from 'lucide-react';
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
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Revolutionizing Workforce Solutions</h1>
            <p className="text-xl text-gray-700 mb-8">
              At GRSP, we connect skilled professionals with businesses seamlessly, ensuring efficiency and trust in every hire.
            </p>
            <Button size="lg" className="bg-grsp-blue hover:bg-grsp-darkblue" onClick={() => window.location.href = '/'}>
              Join Our Network <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About GRSP Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About GRSP</h2>
          
          <p className="text-lg text-gray-700 mb-6">
            Established in 2018, GRSP was founded with a mission to transform staffing and workforce solutions through cutting-edge technology. 
            We bridge the gap between businesses and skilled professionals by leveraging AI-driven insights, seamless recruitment processes, and an intuitive platform.
          </p>
        
          <p className="text-lg text-gray-700 mb-6">
            Our platform empowers businesses to find the right talent efficiently, reducing hiring time and improving workforce productivity. 
            At the same time, we provide job seekers with access to meaningful work opportunities, competitive compensation, and career growth.
          </p>
        
          <p className="text-lg text-gray-700 mb-6">
            With a strong focus on transparency, innovation, and inclusivity, GRSP has grown into a trusted partner for companies of all sizes. 
            From startups to enterprises, we ensure that every hiring decision is backed by data, trust, and a commitment to excellence.
          </p>
        
          <p className="text-lg text-gray-700 mb-6">
            Today, GRSP operates across multiple industries, including IT, healthcare, finance, logistics, and retail, continuously adapting to the 
            evolving demands of the modern workforce. By integrating AI-driven analytics, workforce automation, and human-centric strategies, 
            we are redefining the future of staffing.
          </p>
        
          <p className="text-lg text-gray-700">
            Join us in building a smarter, more connected employment ecosystem—where businesses thrive, and professionals achieve their career aspirations.
          </p>
        </div>
        
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/aboutImg.jpg" 
                alt="GRSP Team Collaboration" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Integrity, innovation, and inclusivity are at the heart of everything we do, ensuring lasting impact for businesses and professionals alike.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Users />, title: "People First", desc: "Empowering individuals through fair opportunities." },
                { icon: <Award />, title: "Excellence", desc: "Delivering top-tier staffing solutions with precision." },
                { icon: <Globe />, title: "Community", desc: "Fostering strong, meaningful workplace relationships." },
                { icon: <BarChart4 />, title: "Innovation", desc: "Enhancing hiring through advanced technology." },
                { icon: <Heart />, title: "Inclusivity", desc: "Creating a diverse, accessible job market." },
                { icon: <BookOpen />, title: "Transparency", desc: "Clear, fair, and trustworthy hiring practices." }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                >
                  <div className="mb-4 text-grsp-blue text-4xl">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose GRSP Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GRSP?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              With a reputation for excellence and trust, we offer businesses and workers a seamless, secure, and efficient platform.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <ShieldCheck />, title: "Trusted by Thousands", desc: "A secure and reliable network of professionals." },
                { icon: <Briefcase />, title: "Opportunities for All", desc: "Bridging the gap between businesses and talent." },
                { icon: <Lightbulb />, title: "Innovative Approach", desc: "Smart AI-driven job matching for efficiency." },
                { icon: <CheckCircle />, title: "Verified Talent", desc: "Ensuring skill authenticity and work quality." }
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
                >
                  <div className="mb-4 text-grsp-blue text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-700">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
