import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { useState } from "react";

function CustomerStories() {
  // Customer testimonial data
  const testimonials = [
    {
      clientName: "Sarah Johnson",
      position: "General Counsel",
      company: "TechStart Inc.",
      quote: "MyLegalInstant transformed our contract management process. We've reduced review time by 65% while improving compliance.",
      metric: "65%",
      description: "Reduction in contract review time"
    },
    {
      clientName: "Michael Chen",
      position: "Operations Director",
      company: "Global Retail Partners",
      quote: "Their platform simplified our complex international legal requirements across 12 countries. Game changer for our expansion.",
      metric: "40+",
      description: "Legal templates customized for our business"
    },
    {
      clientName: "Priya Patel",
      position: "Chief Compliance Officer",
      company: "HealthTech Solutions",
      quote: "Working with MyLegalInstant helped us navigate HIPAA compliance with confidence. Their expertise is unmatched.",
      metric: "100%",
      description: "Compliance with regulatory requirements"
    },
    {
      clientName: "David Rodriguez",
      position: "Legal Operations Manager",
      company: "EcoVenture Capital",
      quote: "The platform's intuitive interface made legal document generation accessible to our entire team, not just legal experts.",
      metric: "3x",
      description: "Faster document creation process"
    },
    {
      clientName: "Emma Williams",
      position: "IP Strategy Lead",
      company: "CreativeWorks Agency",
      quote: "MyLegalInstant helped us protect our intellectual property across multiple projects and client engagements.",
      metric: "90%",
      description: "Reduction in IP-related disputes"
    },
    {
      clientName: "James Taylor",
      position: "CEO",
      company: "Manufacturing Excellence",
      quote: "Their support team is outstanding. Any legal question we have is answered within hours, not days.",
      metric: "4h",
      description: "Average response time for legal queries"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="overflow-hidden pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Client Success Stories
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how MyLegalInstant is transforming legal operations for 500+ professionals worldwide
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" size={24} />
              ))}
              <span className="text-gray-700 font-medium ml-2">4.9/5 from 2,500+ reviews</span>
            </div>

            
          </div>
        </div>
      </div>
      
      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100 shadow-md transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-3 mb-1">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-white font-bold">{testimonial.clientName.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{testimonial.clientName}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position} · {testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-purple-200">
                <div>
                  <h4 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    {testimonial.metric}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1">{testimonial.description}</p>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-purple-400 fill-purple-400" size={14} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
    
        
      </div>
    </div>
  );
}

export default CustomerStories;