import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = ({ title, desc, data }) => {
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
    <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">{desc}</p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex gap-8 transition-all duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * (113 / 3)}%)` }}
            >
              {data.map((item, index) => (
                <div key={index} className="min-w-[calc(35.333%-1rem)] group h-56 m-2">
                  <div className="h-56 text-left bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 flex flex-col border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
                    <div className="border-b border-gray-100 pb-4 mb-4">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-purple-800 transition-colors">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transform transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transform transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
            disabled={currentIndex === data.length - 3}
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>

          <div className="flex justify-center mt-14 gap-3">
            {data.slice(0, data.length - 2).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
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