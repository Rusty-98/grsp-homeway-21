const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-grsp-blue to-grsp-darkblue bg-clip-text text-transparent">
                GRSP
              </span>
            </div>
            <p className="text-grsp-darkgray mb-6">
              Connecting talent with opportunity through our flexible work platform.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1G7H7s1m3t/" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="tel:+916393116990" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63 A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91 a16 16 0 0 0 6 6l1.27-1.27 a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/grs.vacancy?utm_source=qr&igsh=aGNqaWVlZ25weXVu" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/yanaca/" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">For Workers</h4>
            <ul className="space-y-2">
            <li><a href="https://grsp.in/worker/aprofile.php" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Find Work</a></li>
            <li><a href="https://grsp.in/worker/workerregister.php" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Create Profile</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Worker Resources</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Worker FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">For Businesses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Find Workers</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Enterprise Solutions</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Business Resources</a></li>
              <li><a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Business FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">About Us</a></li>
              <li><a href="/#testimonials" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Testimonials</a></li>
              <li><a href="/#team" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Team</a></li>
              <li><a href="/#business" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-grsp-darkgray mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GRSP. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-grsp-darkgray hover:text-grsp-blue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
