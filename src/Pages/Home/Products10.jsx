import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Products10 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  
  // Products array with the 6 specified products
  const products = [
    {
      id: "startup-saathi",
      title: "Startup Saathi",
      description: "Comprehensive startup legal services",
      image: "https://careyandleisure.com/wp-content/uploads/2021/10/featured-law-advice-and-legal-services-concept-2021-08-29-01-18-08-utc-1.jpg",
      // path: "/products/startup-saathi",
      heading: "Startup Saathi",
      badge: "Featured"
    },
    {
      id: "e-stamp-corner",
      title: "E-Stamp Corner",
      description: "Transform Your Agreements with Ease",
      image: "https://images.unsplash.com/photo-1641749460561-0e9a55f55342?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHN0YW1wfGVufDB8fDB8fHww",
      heading: "E-Stamp Corner",
      badge: "New",
      hasSubmenu: true,
      sections: [
        {
          title: "E-Stamp Agreement",
          description: "Create and manage your e-stamp agreements",
          path: "/products/e-stamp-corner"
        },
        {
          title: "Create E-Stamp",
          description: "Generate e-stamps for your documents",
          path: "/products/create-stamp"
        },
      ],
    },
    {
      id: "instant-review",
      title: "Instant Review",
      description: "Fast, Reliable Legal Agreement Review",
      image: "https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      // path: "/products/instant-review",
      heading: "Instant Review",
      badge: "Popular"
    },
    {
      id: "notice-lifecycle-management",
      title: "Notice Lifecycle Management",
      description: "Streamline Your Notice Management Process",
      image: "https://plus.unsplash.com/premium_photo-1661342406509-064b58299ca5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxsYXd5ZXJ8ZW58MHx8MHx8fDA%3D",
      // path: "/products/notice-lifecycle-management",
      heading: "Notice Lifecycle Management",
      badge: "New"
    },
    {
      // id: "risk-mitigator",
      title: "Risk Mitigator",
      description: "Comming Soon",
      image: "https://plus.unsplash.com/premium_photo-1694476607281-d110c2a1ade1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGxhd3llcnxlbnwwfHwwfHx8MA%3D%3D",
      // path: "/products/risk-mitigator",
      heading: "Risk Mitigator",
      badge: "Essential"
    },
  ];

  const totalCards = products.length;
  const cardsToShow = 2; // Show 2 cards at a time

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

  // Improved navigation handler
  const handleProductClick = (product) => {
    // Handle products with submenu differentl
      // For regular products, navigate to the product path or fallback to product detail route
      navigate(product.path || `/product-detail/${product.id}`);

    
    // Optional: You can also log or perform other actions
    console.log(`Navigating to product: ${product.title}`);
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
                    <h2 className="text-3xl font-bold mb-4">Collection 2025</h2>
                    <p className="text-lg mb-6">Discover our latest premium products crafted for excellence</p>
                    <Link to="/products" className="px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-purple-100 transition-colors duration-300 font-semibold">
                      Explore Collection
                    </Link>
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
                aria-label="Previous products"
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
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex-none w-1/2 px-4"
                      style={{ minWidth: `${100 / cardsToShow}%` }}
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <div 
                        className={`
                          relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                          ${hoveredId === product.id ? 'transform scale-105' : ''}
                          before:content-[''] before:absolute before:inset-0
                          before:border-2 before:border-purple-300/0
                          before:rounded-2xl before:transition-all before:duration-500
                          ${hoveredId === product.id ? 'before:border-purple-400/100 before:scale-105' : ''}
                          after:content-[''] after:absolute after:inset-0
                          after:border-2 after:border-purple-500/0
                          after:rounded-2xl after:transition-all after:duration-700
                          ${hoveredId === product.id ? 'after:border-purple-600/100 after:scale-110' : ''}
                        `}
                        onClick={() => handleProductClick(product)}
                      >
                        <div className="bg-white shadow-xl">
                          <div className="relative">
                            <img
                              className="w-full h-64 object-cover"
                              src={product.image}
                              alt={product.heading}
                            />
                            <span className="absolute top-4 right-4 px-4 py-1.5 bg-purple-600 text-white text-sm font-medium rounded-full shadow-lg">
                              {product.badge}
                            </span>
                          </div>
                          
                          <div className="p-6 bg-gradient-to-b from-white to-purple-50">
                            <h3 className="text-xl font-bold text-purple-900 mb-2">
                              {product.heading}
                            </h3>
                            <p className="text-purple-700 mb-4 line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation(); // Prevent triggering the parent onClick
                                  handleProductClick(product);
                                }} 
                                className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                              >
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
                aria-label="Next products"
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
                  aria-label={`Go to slide ${idx + 1}`}
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