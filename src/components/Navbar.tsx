import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen]  = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
    className={cn(
      'fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 bg-white/10 backdrop-blur-xl shadow-md',
      scrolled ? 'p-3' : 'py-5'
    )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-3xl font-extrabold bg-gradient-to-r from-grsp-blue to-grsp-darkblue bg-clip-text text-transparent">
              GRSP
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center font-bold space-x-1">
            <Link to="/#features" className="nav-item">Features</Link>
            <Link to="/#testimonials" className="nav-item">Testimonials</Link>
            <Link to="/#business" className="nav-item">For Business</Link>            
            <Link to="/about" className="nav-item">About Us</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-grsp-blue font-medium hover:text-grsp-darkblue transition-colors" onClick={() => window.open("https://grsp.in/userlogin.php", "_self")}>
              Log in
            </button>
            <button className="px-4 py-2 bg-grsp-blue text-white rounded-md font-medium shadow-md hover:bg-grsp-darkblue transition-colors button-transition" onClick={() => window.open("https://grsp.in/userregister.php", "_self")} >
              Sign up
            </button>
          </div>
          
          <button
            className="md:hidden text-grsp-darkblue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={mobileMenuOpen 
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="md:hidden fixed inset-0 z-50 bg-white/10 shadow-lg" // Added bg-gray-100
      style={{ top: '60px' }}
    >
      <nav className="flex flex-col p-4 space-y-4 bg-gray-100">
        <Link 
          to="/#features" 
          className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
          onClick={handleNavItemClick}
        >
          Features
        </Link>
        
        <Link 
          to="/#testimonials" 
          className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
          onClick={handleNavItemClick}
        >
          Testimonials
        </Link>
        <Link 
          to="/#team" 
          className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
          onClick={handleNavItemClick}
        >
          Team Members
        </Link>

        <Link 
          to="/#business" 
          className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
          onClick={handleNavItemClick}
        >
          For Business
        </Link>
        <Link 
          to="/about" 
          className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
          onClick={handleNavItemClick}
        >
          About Us
        </Link>
        <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
          <button className="w-full px-4 py-3 text-grsp-blue font-medium border border-grsp-blue rounded-md hover:bg-grsp-blue/5 transition-colors" onClick={() => window.open("https://grsp.in/userlogin.php", "_self")} >
            Log in
          </button>
          <button className="w-full px-4 py-3 bg-grsp-blue text-white rounded-md font-medium shadow-md hover:bg-grsp-darkblue transition-colors" onClick={() => window.open("https://grsp.in/userregister.php", "_self")}>
            Sign up
          </button>
        </div>
      </nav>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
};

export default Navbar;
