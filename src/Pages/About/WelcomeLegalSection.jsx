import React from 'react';
import { Shield, ArrowRight, Sparkles } from 'lucide-react';
import { nav } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';

const WelcomeLegalSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply animate-pulse blur-3xl opacity-30" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply animate-pulse blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply animate-pulse blur-3xl opacity-25" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-14 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-8 group hover:bg-purple-200 transition-colors cursor-pointer">
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Welcome to MyLegalInstant.com
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-900 mb-8 leading-tight">
              Welcome to a world where legal assistance is just a click away!
            </h1>
          </div>

          {/* Security and Reliability Section */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-8 h-8 text-purple-600" />
                    </div>
                    <h2 className="text-2xl  md:text-3xl font-bold text-gray-900">Security and Reliability</h2>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6  text-justify">
                    MyLegalInstant.com prioritizes your security. Our digital platform is fortified with robust security measures, making it a safe environment for all your legal documentation needs. We strive to deliver reliable and feasible solutions that simplify the complexities of legal processes.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-justify">
                    Join us as we redefine the landscape of legal documentation. Experience the convenience and efficiency of MyLegalInstant.com—your one-stop digital portal for all your legal needs.
                  </p>
                </div>

                {/* Image Container */}
                <div className="flex-1 relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFkdm9jYXRlfGVufDB8fDB8fHww"
                      alt="Legal Security Illustration"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full opacity-50 blur-xl" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-200 rounded-full opacity-50 blur-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Banner */}
          <div className="text-center max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-10" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                Welcome to the future of legal documentation!<br />
                Welcome to the world of Legal Instant!!
              </h2>
              
              <button onClick={navigate('/Services')} className="group relative inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold overflow-hidden transition-all hover:shadow-lg">
                <span className="relative z-10 flex items-center">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLegalSection;