import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import products from "../../utils/Products"
import { useNavigate } from 'react-router-dom';

const ProductCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = products.length - cardsPerSlide + 1;
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleProductClick = (product) => {
    navigate(product.path || `/product-detail/${product.id}`);

  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  return (
    <div className='bg-gradient-to-b from-purple-100 to-white '>
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden p-6  ">
        <div className='text-center'>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Products
            </span>
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-4 right-6 space-x-2 z-10">
          <button
            onClick={prevSlide}
            className={`p-2 rounded-full ${currentSlide === 0
                ? ' bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-purple-200 text-purple-400 cursor-not-allowed'
              } transition-colors duration-200`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className={`p-2 rounded-full ${currentSlide === totalSlides - 1
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : ' bg-purple-200 text-purple-400 cursor-not-allowed'
              } transition-colors duration-200`}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slider container */}
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentSlide * (100 / cardsPerSlide)}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full md:w-1/3  flex-shrink-0 p-4"
            >
              <div className="h-full rounded-xl shadow-lg  border border-purple-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-purple-800 mb-3">{product.title}</h2>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                  <button onClick={() => handleProductClick(product)} className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2 ${currentSlide === index ? 'w-6 bg-purple-600' : 'w-2 bg-purple-200'
                } rounded-full transition-all duration-300`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardSlider;
