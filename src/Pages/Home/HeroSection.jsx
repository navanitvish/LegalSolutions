import { motion } from "framer-motion";
import { logos } from "/src/utils/Logo.js";
import { useState } from "react";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    countryCode: "+1", // Default country code
    phoneNumber: "",
    companyName: "",
    service: "",
    otherService: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Country codes with labels
  const countryCodes = [
    { code: "+1", country: "USA" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "India" },
    { code: "+61", country: "Australia" },
    { code: "+86", country: "China" }
  ];

  const serviceOptions = [
    "Document Preparation",
    "Legal Advice",
    "Legal Representation",
    "Contract Review",
    "Intellectual Property",
    "Business Formation",
    "Estate Planning",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine country code and phone number for complete phone information
    const completePhoneNumber = formData.countryCode + " " + formData.phoneNumber;
    const submissionData = {
      ...formData,
      fullPhoneNumber: completePhoneNumber
    };
    console.log("Form submitted:", submissionData);
    setIsSubmitted(true);
    
    // In a real application, you would send this data to your backend
    
    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        firstName: "",
        email: "",
        countryCode: "+1",
        phoneNumber: "",
        companyName: "",
        service: "",
        otherService: ""
      });
    }, 3000);
  };

  return (
    <div className="hero-section relative w-full bg-white flex flex-col items-center justify-center px-4 py-16 sm:py-16 lg:py-32 overflow-hidden">
      {/* Background beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-96 bg-gradient-to-br from-indigo-200 to-purple-600 opacity-50`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${
                Math.random() * 0.2 + 1
              })`,
              animation: `beam ${Math.random() * 5 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl uppercase font-sans font-bold mb-4 sm:mb-6 text-gray-900 leading-tight tracking-tight">
          WELCOME TO THE <br className="hidden sm:inline" /> WORLD OF LEGALINSTANT
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-600 max-w-5xl mx-auto text-center leading-relaxed">
          MyLegalInstant.com makes the delivery of legal services easier and faster by providing legal services online. <br />
         The platform offers a range of legal services, including document preparation, legal advice, and representation, at a fraction of the cost of traditional legal services.{" "}
        The platform also offers a range of features, such as online chat support, document tracking, and secure document storage, to make the legal process more efficient .
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="w-full sm:w-auto bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-md hover:from-indigo-600 hover:to-purple-600 transition duration-300 text-base sm:text-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Join Wait List 
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-md mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Join Our Wait List </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your information has been submitted successfully. We'll be in touch soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1"> Name*</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="flex">
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-24 px-2 py-2 border border-gray-300 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      {countryCodes.map(country => (
                        <option key={country.code} value={country.code}>
                          {country.code} {country.country}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="123-456-7890"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Company Name/Individual</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your company or Individual"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed*</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                {formData.service === "Other" && (
                  <div>
                    <label htmlFor="otherService" className="block text-sm font-medium text-gray-700 mb-1">Please specify*</label>
                    <input
                      type="text"
                      id="otherService"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Describe the service you need"
                    />
                  </div>
                )}
                
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-medium py-2 px-4 rounded-md hover:from-indigo-600 hover:to-purple-600 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

const styles = `
  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  .animate-scroll {
    animation: scroll 30s infinite linear;
  }
  @keyframes beam {
    0% { transform: translateX(0) translateY(0) scale(1); }
    50% { transform: translateX(50px) translateY(50px) scale(1.2); }
    100% { transform: translateX(0) translateY(0) scale(1); }
  }
  @media (prefers-reduced-motion: reduce) {
    .animate-scroll, .beam {
      animation: none;
    }
  }
`;

export default function HeroSectionWithStyles() {
  return (
    <>
      <style>{styles}</style>
      <HeroSection />
    </>
  );
}