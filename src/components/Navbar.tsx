
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'py-3 glass-effect shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-grsp-blue to-grsp-darkblue bg-clip-text text-transparent">
              GRSP
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-1">
            <a href="#features" className="nav-item">Features</a>
            <a href="#testimonials" className="nav-item">Testimonials</a>
            <a href="#business" className="nav-item">For Business</a>
            <a href="#pricing" className="nav-item">Pricing</a>
            <a href="#contact" className="nav-item">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-grsp-blue font-medium hover:text-grsp-darkblue transition-colors">
              Log in
            </button>
            <button className="px-4 py-2 bg-grsp-blue text-white rounded-md font-medium shadow-md hover:bg-grsp-darkblue transition-colors button-transition">
              Sign up
            </button>
          </div>
          
          <button
            className="md:hidden text-grsp-darkblue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <div className="flex flex-col p-4 space-y-4">
          <a 
            href="#features" 
            className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#business" 
            className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            For Business
          </a>
          <a 
            href="#pricing" 
            className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="px-4 py-3 text-grsp-darkgray hover:bg-grsp-gray rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
            <button className="w-full px-4 py-3 text-grsp-blue font-medium border border-grsp-blue rounded-md">
              Log in
            </button>
            <button className="w-full px-4 py-3 bg-grsp-blue text-white rounded-md font-medium shadow-md">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
