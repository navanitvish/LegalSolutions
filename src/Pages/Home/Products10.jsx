import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Products10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const cards = [
    {
      id: 1,
      heading: "Premium Collection",
      badge: "New",
      img: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$299.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo.",
    },
    {
      id: 2,
      heading: "Signature Series",
      badge: "Popular",
      img: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$199.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo.",
    },
    {
      id: 1,
      heading: "Premium Collection",
      badge: "New",
      img: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$299.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo.",
    },
    {
      id: 2,
      heading: "Signature Series",
      badge: "Popular",
      img: "https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "$199.99",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac vehicula nulla. Aenean vel neque a metus viverra commodo.",
    },
    // ... (previous cards array remains the same)
  ];

  const totalCards = cards.length;
  const cardsToShow = 2; // Changed to show 2 cards at a time

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent">
            Featured Products
          </h1>
          <p className="mt-4 text-purple-600 text-lg font-medium">
            Discover our exclusive collection of premium items
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Static Image Section */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="relative rounded-2xl overflow-hidden group">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Featured Collection"
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h2 className="text-3xl font-bold mb-4">Collection 2024</h2>
                    <p className="text-lg mb-6">Discover our latest premium products crafted for excellence</p>
                    <button className="px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-300 font-semibold">
                      Explore Collection
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Slider Section */}
          <div className="lg:w-2/3">
            <div className="relative">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-purple-50 text-purple-700 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 border-2 border-purple-200 hover:border-purple-300"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="overflow-hidden mx-8">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
                  }}
                >
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="flex-none w-1/2 px-4"
                      style={{ minWidth: `${100 / cardsToShow}%` }}
                      onMouseEnter={() => setHoveredId(card.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div className={`
                        relative rounded-2xl overflow-hidden transition-all duration-500
                        ${hoveredId === card.id ? 'transform scale-105' : ''}
                        before:content-[''] before:absolute before:inset-0
                        before:border-2 before:border-purple-300/0
                        before:rounded-2xl before:transition-all before:duration-500
                        ${hoveredId === card.id ? 'before:border-purple-400/100 before:scale-105' : ''}
                        after:content-[''] after:absolute after:inset-0
                        after:border-2 after:border-purple-500/0
                        after:rounded-2xl after:transition-all after:duration-700
                        ${hoveredId === card.id ? 'after:border-purple-600/100 after:scale-110' : ''}
                      `}>
                        <div className="bg-white shadow-xl">
                          <div className="relative">
                            <img
                              className="w-full h-64 object-cover"
                              src={card.img}
                              alt={card.heading}
                            />
                            <span className="absolute top-4 right-4 px-4 py-1.5 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
                              {card.badge}
                            </span>
                          </div>
                          
                          <div className="p-6 bg-gradient-to-b from-white to-purple-50">
                            <h3 className="text-xl font-bold text-purple-900 mb-2">
                              {card.heading}
                            </h3>
                            <p className="text-purple-700 mb-4 line-clamp-2">
                              {card.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-purple-700">
                                {card.price}
                              </span>
                              <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-purple-50 text-purple-700 rounded-full shadow-lg hover:bg-purple-100 transition-all duration-300 border-2 border-purple-200 hover:border-purple-300"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              {Array.from({ length: totalCards - cardsToShow + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                    currentIndex === idx
                      ? "bg-purple-600 scale-125"
                      : "bg-purple-200 hover:bg-purple-300 hover:scale-110"
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products10;