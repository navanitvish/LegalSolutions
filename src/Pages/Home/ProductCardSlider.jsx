import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import products from "../../utils/Products";

const ProductCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  // Responsive cards per slide
  const getCardsPerSlide = () => isMobile ? 1 : 3;
  const cardsPerSlide = getCardsPerSlide();
  const totalSlides = Math.max(1, products.length - cardsPerSlide + 1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleProductClick = (product) => {
    navigate(product.path || `/product-detail/${product.id}`);
  };

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide effect
  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  return (
    <div className="bg-gradient-to-b from-purple-100 to-white py-12">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4 md:px-6">
        {/* Title with animated gradient */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-size-200 animate-gradient">
              Solutions
            </span>
          </h1>
          <div className="mt-2 w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Buttons - Optimized for mobile */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 z-10 px-2 md:px-4 -mt-28 md:-mt-6">
          <button
            onClick={prevSlide}
            className={`p-2 md:p-3 rounded-full shadow-lg ${
              currentSlide === 0 
                ? 'bg-purple-200 text-purple-400 cursor-not-allowed' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            } transition-all duration-200 hover:scale-110`}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 md:p-3 rounded-full shadow-lg ${
              currentSlide === totalSlides - 1 
                ? 'bg-purple-200 text-purple-400 cursor-not-allowed' 
                : 'bg-purple-600 text-white hover:bg-purple-700'
            } transition-all duration-200 hover:scale-110`}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slider container with improved transitions */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/3 flex-shrink-0 p-2 md:p-4"
              >
                <div 
                  className="h-full rounded-xl shadow-lg border border-purple-100 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white group"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h2 className="text-lg md:text-xl font-bold text-purple-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-3 leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <button 
                      className="mt-2 w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:translate-y-0 shadow-md hover:shadow-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product);
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced dot navigation */}
        <div className="mt-8 w-full flex justify-center space-x-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-gradient-to-r from-purple-600 to-indigo-600' 
                  : 'w-2.5 bg-purple-200 hover:bg-purple-300'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSlider;