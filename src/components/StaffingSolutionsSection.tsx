
import { ArrowRight, Clock, History, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const StaffingSolutionsSection = () => {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="staffing-solutions" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Staffing solutions for <span className="text-red-500 italic">all of your needs</span>
            </h2>
            <p className="text-lg text-grsp-darkgray max-w-3xl mx-auto">
              Fill any gaps with temporary staff while you find quality candidates for permanent roles.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          {/* Short-term temporary workers */}
          <motion.div 
            variants={itemVariant}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#3b82f6"
            }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 rounded-xl p-8 text-white shadow-lg transition-all duration-300 transform cursor-pointer"
          >
            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
              <Clock className="w-12 h-12 text-white/90" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Short-term temporary workers</h3>
            <p className="mb-8">
              For one-off events and seasonal demand spikes.
            </p>
            <Button 
              variant="ghost" 
              className="text-white group flex items-center hover:bg-white/10"
            >
              Learn more 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Long-term temporary workers */}
          <motion.div 
            variants={itemVariant}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#3b82f6" 
            }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 rounded-xl p-8 text-white shadow-lg transition-all duration-300 transform cursor-pointer"
          >
            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
              <History className="w-12 h-12 text-white/90" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Long-term temporary workers</h3>
            <p className="mb-8">
              For longer-term and project-based work.
            </p>
            <Button 
              variant="ghost" 
              className="text-white group flex items-center hover:bg-white/10"
            >
              Learn more 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Permanent workers */}
          <motion.div 
            variants={itemVariant}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#3b82f6" 
            }}
            transition={{ duration: 0.3 }}
            className="bg-blue-500 rounded-xl p-8 text-white shadow-lg transition-all duration-300 transform cursor-pointer"
          >
            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
              <Handshake className="w-12 h-12 text-white/90" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Permanent workers to join your team</h3>
            <p className="mb-8">
              For hiring your next team member.
            </p>
            <Button 
              variant="ghost" 
              className="text-white group flex items-center hover:bg-white/10"
            >
              Learn more 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StaffingSolutionsSection;
