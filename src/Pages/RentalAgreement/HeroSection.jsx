import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, subtitle,question, buttonText, buttonLink, bgGradient, description, trustIndicators }) => {
  return (
    <div className={`relative  ${bgGradient || 'bg-gradient-to-b from-white to-purple-50'}`}>
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-20 -left-40 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="pt-20 pb-16 text-center lg:pt-28">
          {/* Heading */}
          <h1 className="mb-8 text-4xl  font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            {title} <br />
            <span className="inline-block py-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>

          {/* Description */}
          <h2 className='mt-4 text-2xl font-bold text-center text-gray-600'>{question}</h2>
          <p className="mx-auto max-w-6xl text-lg text-gray-600 sm:text-xl lg:text-2xl leading-relaxed">
            {description}
          </p>

          {/* CTA Section */}
          <div className="mt-12 flex justify-center gap-4">
            <Link 
              to={buttonLink || '#'}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-white shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative flex items-center gap-2 font-semibold">
                {buttonText}
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex justify-center gap-8">
            {trustIndicators?.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">{indicator}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
