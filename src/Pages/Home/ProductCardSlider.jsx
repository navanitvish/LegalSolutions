import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const products = [
  { id: 1, title: "Product 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum niLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.", image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg" },
  { id: 2, title: "Product 2", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/7979597/pexels-photo-7979597.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, title: "Product 3", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, title: "Product 4", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/7979439/pexels-photo-7979439.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, title: "Product 9", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/5669655/pexels-photo-5669655.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, title: "Product 5", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, title: "Product 6", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, title: "Product 7", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/4427553/pexels-photo-4427553.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, title: "Product 8", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/7979439/pexels-photo-7979439.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, title: "Product 9", description: "DeLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem..", image: "https://images.pexels.com/photos/5669655/pexels-photo-5669655.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 10, title: "Product 10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem. 10.", image: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg" },
  { id: 11, title: "Product 11", description: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.11.", image: "https://images.pexels.com/photos/5669655/pexels-photo-5669655.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 12, title: "Product 12", description: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.12.", image: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg" },
  { id: 13, title: "Product 13", description: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.13.", image: "https://images.pexels.com/photos/7979439/pexels-photo-7979439.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 14, title: "Product 14", description: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.14.", image: "https://images.pexels.com/photos/5669655/pexels-photo-5669655.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 15, title: "Product 15", description: "DLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo. Nullam fringilla imperdiet augue, eget facilisis nulla dictum in. Sed cursus urna id bibendum viverra. Ut sed purus eget nisl hendrerit tempor. Fusce nec eros ac libero consequat elementum vel a quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Cras vel libero sapien. Nulla facilisi. Sed cursus neque nec lectus posuere, et faucibus magna feugiat. Duis lobortis elit vitae justo auctor, nec auctor metus tincidunt. Donec sed dolor at metus dapibus tincidunt. In ac lacus justo. Curabitur et orci quis lorem vestibulum vulputate. Sed ut feugiat tortor. Ut fermentum nisl vitae ex facilisis, ac interdum nisl tempor. Nam ac egestas lorem.15.", image: "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const ProductCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 3;
  const totalSlides = products.length - cardsPerSlide + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 3000);
    return () => clearInterval(autoSlide);
  }, [totalSlides]);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden p-6 bg-white">
      <h1 className="text-5xl font-semibold text-center mb-8 text-purple-800">Product </h1>
      
      {/* Navigation Buttons */}
      <div className="absolute top-4 right-6 space-x-2 z-10">
        <button
          onClick={prevSlide}
          className={`p-2 rounded-full ${
            currentSlide === 0
              ? ' bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-purple-200 text-purple-400 cursor-not-allowed'
          } transition-colors duration-200`}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className={`p-2 rounded-full ${
            currentSlide === totalSlides - 1
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
            <div className="h-full rounded-xl shadow-lg bg-white border border-purple-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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
                <button className="mt-4 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200">
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
            className={`h-2 ${
              currentSlide === index ? 'w-6 bg-purple-600' : 'w-2 bg-purple-200'
            } rounded-full transition-all duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductCardSlider;
