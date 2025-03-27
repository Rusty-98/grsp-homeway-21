
import { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: '',
    message: '',
    businessSize: '',
    industryType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast({
        title: "Request received!",
        description: "Our team will contact you within 24 hours.",
        variant: "default",
      });
      
      setIsSubmitted(true);
      
      // Reset form after showing success state
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          phoneNumber: '',
          message: '',
          businessSize: '',
          industryType: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const industryOptions = [
    "Restaurant & Hospitality",
    "Retail",
    "Warehouse & Logistics",
    "Healthcare",
    "Event Services",
    "Office & Admin",
    "Manufacturing",
    "Other"
  ];

  const businessSizeOptions = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501+ employees"
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Contact Form */}
        <div className="p-6 md:p-8 lg:p-10 w-full md:w-7/12">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="flex flex-col items-center justify-center h-full text-center py-10"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
              <p className="text-grsp-darkgray max-w-sm">
                Thank you for reaching out. Our team will contact you within 24 hours to discuss how GRSP can help your business.
              </p>
            </motion.div>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-2">Schedule a Consultation</h3>
              <p className="text-grsp-darkgray mb-6">Fill out the form below and our staffing specialists will get back to you within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name*
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue transition-all"
                      placeholder="Company Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number*
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="industryType" className="block text-sm font-medium text-gray-700 mb-1">
                      Industry
                    </label>
                    <select
                      id="industryType"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue transition-all"
                    >
                      <option value="" disabled>Select your industry</option>
                      {industryOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="businessSize" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Size
                    </label>
                    <select
                      id="businessSize"
                      name="businessSize"
                      value={formData.businessSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue transition-all"
                    >
                      <option value="" disabled>Select company size</option>
                      {businessSizeOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help?*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-grsp-blue resize-none transition-all"
                    placeholder="Tell us about your staffing needs..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-grsp-blue text-white rounded-md font-medium transition-colors hover:bg-grsp-darkblue disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Request Consultation
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
        
        {/* Right side - Benefits */}
        <div className="bg-gradient-to-br from-grsp-blue to-grsp-darkblue text-white p-6 md:p-8 lg:p-10 w-full md:w-5/12 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
          
          <ul className="space-y-6">
            <li className="flex">
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">24-Hour Staffing</h4>
                <p className="text-white/80 text-sm">Fill positions within 24 hours of posting your request</p>
              </div>
            </li>
            
            <li className="flex">
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Pre-Vetted Workers</h4>
                <p className="text-white/80 text-sm">All workers are background-checked and skill-verified</p>
              </div>
            </li>
            
            <li className="flex">
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Cost-Effective</h4>
                <p className="text-white/80 text-sm">Up to 30% savings compared to traditional staffing agencies</p>
              </div>
            </li>
            
            <li className="flex">
              <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Intuitive Platform</h4>
                <p className="text-white/80 text-sm">Easy-to-use dashboard to manage all your staffing needs</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2463EB" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Need immediate assistance?</p>
                <p className="text-lg font-bold">Call us: (800) 555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
