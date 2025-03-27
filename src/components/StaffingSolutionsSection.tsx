
import { ArrowRight, Clock, History, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const StaffingSolutionsSection = () => {
  return (
    <section id="staffing-solutions" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Staffing solutions for <span className="text-red-500 italic">all of your needs</span>
            </h2>
            <p className="text-lg text-grsp-darkgray max-w-3xl mx-auto">
              Fill any gaps with temporary staff while you find quality candidates for permanent roles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Short-term temporary workers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-blue-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-6">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-6">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-blue-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <div className="mb-6">
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
        </div>
      </div>
    </section>
  );
};

export default StaffingSolutionsSection;
