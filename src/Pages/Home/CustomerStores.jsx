import { ArrowRight, ArrowUpRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

function CustomerStories() {
  // Customer testimonial data
  const testimonials = [
    {
      clientName: "Anand Sharma",
      position: "Tenant",
      company: "Hyderabad",
      quote:
        "Finding a secure, easy-to-use solution for my rental agreement was such a relief. Mylegalinstant.com walked me through each step and generated my stamped Telangana rental agreement instantly. The platform's digital verification made it all secure no lawyer visits, no paperwork, just done in minutes. Truly a one-stop legal document portal!",
      metric: "65%",
      description: "Reduction in contract review time",
    },
    {
      clientName: "Deepa Krishnan",
      position: "Homeowner",
      company: "Bengaluru",
      quote:
        "I needed a swift lease agreement and was worried about complicated legal language. Mylegalinstant.com's intuitive document builder let me fill in details quickly. The agreement PDF was ready to go, with smart digital protection features. Highly recommend to anyone handling property documentation.",
      metric: "40+",
      description: "Legal templates customized for our business",
    },
    {
      clientName: "Kavya Rao",
      position: "HR Manager",
      company: "Techfinity Solutions Pvt Ltd",
      quote:
        "Our HR and admin team relies on Mylegalinstant.com for instant employment agreements, policies, affidavits and rental agreements for staff housing. The document portal saves us hours every week, with every form fully compliant and digitally secure. The cloud-based archive helps us stay organized.",
      metric: "100%",
      description: "Compliance with regulatory requirements",
    },
    {
      clientName: "Sandeep Kulkarni",
      position: "Franchise Manager",
      company: "QuickBiz Services",
      quote:
        "I was skeptical at first, but Mylegalinstant.com handles everything agreement generation, digital verification, and secure storage with incredible efficiency. The platform's robust security for sensitive client data is a big win for any service business.",
      metric: "85%",
      description: "Improved security compliance",
    },
    {
      clientName: "Aditya Singh",
      position: "Legal Associate",
      company: "BrightLeaf Outsourcing",
      quote:
        "As a legal services provider, we needed a document automation tool that is both reliable and compliant with Indian law. Mylegalinstant.com has become our go-to portal for everything from standard lease drafts to specialized affidavits, thanks to their up-to-date and secured digital formats.",
      metric: "95%",
      description: "Legal compliance accuracy",
    },
    {
      clientName: "Rahul Mehta",
      position: "Operations Head",
      company: "StayBridge Rentals",
      quote:
        "Managing dozens of tenant leases has never been easier. Mylegalinstant.com's bulk document generation feature allows quick creation and secure delivery of multiple agreements. The audit trail and verification offer total peace of mind for compliance.",
      metric: "200+",
      description: "Documents processed monthly",
    },
    {
      clientName: "Arvind Rao",
      position: "Co-Founder",
      company: "Finomatix Solutions",
      quote:
        "Startup Saathi by Mylegalinstant.com helped us handle all our company documents from founders' agreements to NDAs without endless lawyer meetings. The platform saved us time and kept everything organized, secure, and legally compliant, all at a fraction of the usual legal costs. Perfect for startups looking for a reliable documentation solution backed by a trusted legal tech company!",
      metric: "80%",
      description: "Reduction in legal costs",
    },
    {
      clientName: "Rajesh Pillai",
      position: "CEO",
      company: "GreenRoots Startups Pvt Ltd",
      quote:
        "What I love most about Startup Saathi offered by Mylegalinstant.com is how it brings all legal documentation under one roof fully digital, fast, and cost-effective. It's our go-to legal docs platform for employment offers, founder agreements, and service contracts. For any startup founder looking to stay legally strong without burning cash, Startup Saathi is a must-have.",
      metric: "75%",
      description: "Time saved on documentation",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = testimonials.length - 3;

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Client Success Stories
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how MyLegalInstant is transforming legal operations for
              500+ professionals worldwide
            </p>

            {/* Navigation Buttons */}
            

            <div className="mt-8 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-500 fill-yellow-500"
                  size={24}
                />
              ))}
              <span className="text-gray-700 font-medium ml-2">
                4.9/5 from 2,500+ reviews
              </span>
              
            
            </div>
<div className="absolute top-30 right-0 flex space-x-2">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronLeft className="text-purple-600" size={20} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                <ChevronRight className="text-purple-600" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 shadow-md transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg h-full flex flex-col min-h-[250px]">
                  <div className="flex justify-between items-start ">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-3 mb-1">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white font-bold">
                            {testimonial.clientName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            {testimonial.clientName}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.position} · {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <div className=" flex-1">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-purple-200 mt-auto">
                    <div>
                      <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                        {testimonial.metric}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {testimonial.description}
                      </p>
                    </div>

                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-purple-400 fill-purple-400"
                          size={14}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                i === currentIndex 
                  ? 'bg-purple-600 w-8' 
                  : 'bg-purple-200 hover:bg-purple-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;