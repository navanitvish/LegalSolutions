import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ChevronRightIcon, 
  ChevronDownIcon, 
  Sparkles, 
  ArrowRight, 
  Search,
  X 
} from "lucide-react";
import products  from "../../utils/Products" 
const Products = () => {

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
 

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (product) => {
    navigate(product.path || `/product-detail/${product.id}`);
    setShowDropdown(false);
    setSearchQuery("");
  };

  // Stats data
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Legal Tools" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 py-20">
    

      {/* Hero Section */}
      <div className="relative overflow-hidden mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-white/30"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 pt-12 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/80 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm text-purple-700 font-medium">Discover Our Suite of Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-800 bg-clip-text text-transparent">
              Transform Your Legal Practice
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Comprehensive legal solutions designed to streamline your workflow and enhance productivity
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-purple-100 transition-all duration-300 hover:shadow-md"
                >
                  <div className="text-2xl font-bold text-purple-700 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        {/* Search Section */}
        <div className="container mx-auto px-4 mb-12">
        <div className="max-w-2xl mx-auto relative" ref={searchRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
              className="w-full px-4 py-3 pl-12 pr-10 text-gray-700 bg-white border border-purple-200 rounded-lg focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setShowDropdown(false);
                }}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Search Dropdown */}
          {showDropdown && searchQuery && (
            <div className="absolute z-50 w-full mt-2 bg-white border border-purple-100 rounded-lg shadow-lg max-h-96 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="flex items-center p-4 hover:bg-purple-50 cursor-pointer border-b border-purple-50 last:border-b-0 transition-colors duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 bg-purple-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-gray-900">{product.title}</h3>
                      <p className="text-xs text-gray-600 line-clamp-1">{product.description}</p>
                    </div>
                    <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <div className="mb-2">🔍</div>
                  <div className="text-sm font-medium">No products found</div>
                  <div className="text-xs text-gray-400">Try adjusting your search terms</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of legal solutions designed to meet your specific needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px] border border-purple-100 hover:border-purple-200 hover:shadow-lg cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="w-full h-48 bg-purple-50 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-purple-600 font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;