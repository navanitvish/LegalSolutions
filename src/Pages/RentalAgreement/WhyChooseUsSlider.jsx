import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ title, description, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 3 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    if (index <= data.length - 3) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex gap-6 transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {data.map((item, index) => (
                <div key={index} className="min-w-[calc(35.333%-1rem)] group h-52 m-2">
                  <div className="h-52 text-left bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
                    <div className="border-b border-gray-100 pb-4 mb-4">
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white transform transition-all duration-300 hover:-translate-y-1"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-white transform transition-all duration-300 hover:-translate-y-1"
            disabled={currentIndex === data.length - 3}
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          <div className="flex justify-center mt-12 gap-3">
            {data.slice(0, data.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
