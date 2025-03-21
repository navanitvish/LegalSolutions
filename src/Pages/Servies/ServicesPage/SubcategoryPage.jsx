import  { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft,ChevronRight  } from 'lucide-react';
import { servicesData } from '../../../utils/servicesData';
import Servicesfill from '../../ServicesContact';

const SubcategoryPage = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

  // Convert slug back to category name and find category data
  const category = Object.keys(servicesData).find(
    cat => cat.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
  const categoryData = category ? servicesData[category] : null;

  const handleSubcategoryClick = (subcategory) => {
    console.log("Navigating to:", subcategory.path); // Debugging line
    navigate(subcategory.path); // Use the path property
  };

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h2>
          <Link to="/services" className="text-blue-600 hover:underline">
            Return to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Hero Section */}
      <div className="relative ">
        <div className="absolute inset-0 z-0">
          <img
            src={categoryData.image}
            alt="Background"
            className="w-full h-full object-cover
            "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 via-purple-200/40 to-blue-900/80" />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation */}
            <div className="pt-6">
              <Link
                to="/services"
                className="inline-flex items-center text-white/90 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                <span className="font-medium">Back to Categories</span>
              </Link>
            </div>

            {/* Main Content Grid */}
            <div className="mt-8 lg:mt-12 min-h-[calc(100vh-8rem)] flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
                {/* Left Content */}
                <div className="relative">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black">
                    <span className="block mb-2">{category}</span>
                    <span className=" text-black text-3xl sm:text-4xl mt-3">
                      Professional Templates
                    </span>
                  </h1>
                  
                  <p className="mt-6 text-lg sm:text-xl text-black max-w-2xl">
                    Browse our carefully curated collection of {category.toLowerCase()} templates. 
                    Each template is designed to meet industry standards and best practices.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="#templates"
                      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:-translate-y-0.5"
                    >
                      View Templates
                    </Link>
                    <Link
                      to="#contact"
                      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8" id="templates">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Templates</h2>
          <p className="text-gray-600 max-w-2xl">
            Select a template to get started with your {category.toLowerCase()} documentation.
          </p>
        </div>

        {/* Subcategories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.subcategories.map((sub) => (
            <div
              key={sub.name}
              className="relative group"
              onMouseEnter={() => setHoveredSubcategory(sub.name)}
              onMouseLeave={() => setHoveredSubcategory(null)}
              onClick={() => handleSubcategoryClick(sub)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSubcategoryClick(sub);
                }
              }}
            >
              <div 
                className={`bg-white rounded-xl p-6 transition-all duration-300
                  border-2 cursor-pointer h-full
                  ${hoveredSubcategory === sub.name
                    ? 'border-blue-400 shadow-md transform -translate-y-1'
                    : 'border-gray-100 hover:border-blue-200 hover:shadow-sm'}`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 mb-2">{sub.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      {sub.description || 'Professional template with legal provisions and clauses.'}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="px-2 py-1 bg-blue-50 rounded-md text-xs text-blue-600 font-medium">
                          Premium
                        </span>
                        <span className="text-xs text-gray-500">
                          Last updated: 2024
                        </span>
                      </div>
                      <button 
                        className="p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition-colors"
                        aria-label="View subcategory details"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="contact">
          <Servicesfill />
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;