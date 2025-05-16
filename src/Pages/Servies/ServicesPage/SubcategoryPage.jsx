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
    <div className=" bg-gray-50 py-20">
      {/* Hero Section */}
     <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 py-12 lg:py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-purple-200 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-indigo-300 opacity-20 blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation */}
          <div className="pt-2">
            <Link
              to="/services"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span className="font-medium">Back to Categories</span>
            </Link>
          </div>
          
          {/* Main Content Grid */}
          <div className="mt-8 lg:mt-12 min-h-[calc(100vh-16rem)] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12">
              {/* Left Content */}
              <div className="relative">
                <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-800 font-medium text-sm mb-6">
                  Professional Solutions
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                  <span className="block mb-2">{category}</span>
                  <span className="text-indigo-600 text-3xl sm:text-4xl mt-3 block">
                    Professional Templates
                  </span>
                </h1>
                
                <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
                  Browse our carefully curated collection of {category.toLowerCase()} templates.
                  Each template is designed to meet industry standards and best practices.
                </p>
                
                {/* <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="#templates"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transform hover:-translate-y-0.5"
                  >
                    View Templates
                  </Link>
                  <Link
                    to="#contact"
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
                  >
                    Contact Us
                  </Link>
                </div> */}
              </div>
              
              {/* Right Side - Decorative Element */}
              <div className="hidden lg:block relative h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Floating cards design */}
                  <div className="relative w-full h-96">
                    {/* Main card */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white rounded-2xl shadow-xl p-6 z-20 rotate-3 transition-all duration-300 hover:rotate-0 hover:scale-105">
                      <div className="h-1/2 w-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-4"></div>
                      <div className="w-3/4 h-4 bg-gray-200 rounded mb-3"></div>
                      <div className="w-full h-3 bg-gray-100 rounded mb-2"></div>
                      <div className="w-5/6 h-3 bg-gray-100 rounded mb-2"></div>
                      <div className="w-4/6 h-3 bg-gray-100 rounded"></div>
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {category.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Background card 1 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-red-100 rounded-2xl shadow-lg -rotate-6 -translate-x-[60%] z-10"></div>
                    
                    {/* Background card 2 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-purple-100 rounded-2xl shadow-lg rotate-12 translate-x-[60%] z-10"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200 rounded-lg rotate-12 opacity-70"></div>
                    <div className="absolute bottom-10 left-10 w-12 h-12 bg-purple-200 rounded-full opacity-70"></div>
                    <div className="absolute top-20 left-0 w-8 h-8 bg-indigo-300 rounded-lg rotate-45 opacity-70"></div>
                  </div>
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