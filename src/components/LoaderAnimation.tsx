
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader } from 'lucide-react';

const LoaderAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay and then hide the loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.5,
              ease: "easeInOut"
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }}
              className="relative mb-8"
            >
              <motion.div 
                animate={{ 
                  rotate: 360,
                  transition: {
                    duration: 2,
                    ease: "linear",
                    repeat: Infinity
                  }
                }}
                className="text-grsp-blue"
              >
                <Loader size={48} />
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5
                }
              }}
              className="flex"
            >
              {["G", "R", "S", "P"].map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    transition: {
                      delay: 0.4 + (index * 0.1),
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }}
                  className="text-5xl font-bold text-grsp-blue mx-1"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.5
                }
              }}
              className="mt-4 text-grsp-darkgray"
            >
              Loading your experience...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoaderAnimation;
