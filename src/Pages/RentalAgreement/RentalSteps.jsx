import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const ChainSteps = ({ steps, title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const stepsPerPage = 5;
  const totalPages = Math.ceil(steps.length / stepsPerPage);
  const visibleSteps = steps.slice(
    currentSlide * stepsPerPage,
    (currentSlide + 1) * stepsPerPage
  );

  const handleNext = () => {
    if (currentSlide < totalPages - 1) setCurrentSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className="max-w-8xl mx-auto px-14 py-16">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          {title}
        </h2>

        {/* Navigation Controls */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-purple-600 w-6'
                    : 'bg-gray-300 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`p-3 rounded-full border ${
                currentSlide === 0
                  ? 'border-gray-200 text-gray-400'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-50'
              } transition-all duration-300`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentSlide === totalPages - 1}
              className={`p-3 rounded-full border ${
                currentSlide === totalPages - 1
                  ? 'border-gray-200 text-gray-400'
                  : 'border-purple-200 text-purple-600 hover:bg-purple-50'
              } transition-all duration-300`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
        {visibleSteps.map((step, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-white rounded-full p-1 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {currentSlide * stepsPerPage + index + 1}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChainSteps;
