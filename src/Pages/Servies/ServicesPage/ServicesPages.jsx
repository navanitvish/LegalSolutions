import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Users, Building, Briefcase, Book, Shield, ScrollText, FileSignature, Scale,Bell,Gavel,FileCheck,FileSpreadsheet,Store,Home,MapPin } from 'lucide-react';
import { servicesData } from '../../../utils/servicesData';
import Servicesfill from './../../ServicesContact';

const ServicesPage = () => {
  const navigate = useNavigate();

  const getCategoryIcon = (category) => {
    const icons = {
      "Rental Agreements": <Building className="w-8 h-8 text-purple-500" />,
      "Employment Agreements": <Users className="w-8 h-8 text-purple-500" />,
      "Business Agreements": <Briefcase className="w-8 h-8 text-purple-500" />,
      "Legal Documents": <ScrollText className="w-8 h-8 text-purple-500" />,
      "Corporate Agreement": <Shield className="w-8 h-8 text-purple-500" />,
      "E-commerce Agreements": <Book className="w-6 h-6 text-purple-500" />,
      "Intellectual Property Agreements": <FileSignature className="w-6 h-6 text-purple-500" />,
      "Commercial Documents": <Scale className="w-6 h-6 text-purple-500" />,
      "Affidavits": <FileText className="w-6 h-6 text-purple-500" />,
      "Notices": <Bell className="w-6 h-6 text-purple-500" />,
      "Power of Attorney": <Gavel className="w-6 h-6 text-purple-500" />,
      "Post Contractual Matters": <FileCheck className="w-6 h-6 text-purple-500" />,
      "Wills": <FileText className="w-6 h-6 text-purple-500" />,
      "Sale Documents": <FileSpreadsheet className="w-6 h-6 text-purple-500" />,
      "Commercial Establishments": <Store className="w-6 h-6 text-purple-500" />,
      "Lease Agreements": <Home className="w-6 h-6 text-purple-500" />,
      "Real Estate Agreements": <MapPin className="w-6 h-6 text-purple-500" />,
    };
    
    return icons[category] || <FileText className="w-8 h-8 text-purple-500" />;
  };

  const handleCategoryClick = (category) => {
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    navigate(`/services/${slug}`);
  };

  const ServiceCard = ({ title, subcategories }) => (
    <div 
      className="bg-white rounded-2xl transition-all duration-300 cursor-pointer border-2 
        border-purple-100 shadow-sm hover:shadow-md group"
      onClick={() => handleCategoryClick(title)}
    >
      <div className="p-8 ">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="p-4 rounded-xl transition-colors transform group-hover:scale-105 duration-300
              bg-purple-50 group-hover:bg-purple-100">
              {getCategoryIcon(title)}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 transition-colors
                text-gray-800 group-hover:text-purple-600">
                {title}
              </h3>
              {/* <p className="p-2 text-sm text-gray-600">Lorem, ipsum dolor sit amet.</p> */}
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-purple-50 rounded-full text-sm text-purple-600">
                  {subcategories.length} Documents
                </span>
                <span className="text-sm text-gray-500">
                  Click to explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-28">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium mb-6">
            Professional Legal Documents
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Find Your Perfect{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
              Legal Documents
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            Access professionally crafted legal templates designed to protect your interests. 
            Quick to customize, legally sound, and always up-to-date.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'Legal Documents', value: '500+', desc: 'Ready to use' },
            { label: 'Categories', value: '15+', desc: 'Well organized' },
            { label: 'Documents Generated', value: '10K+', desc: 'Trusted by users' }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="bg-white rounded-2xl p-8 text-center border border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-800 font-semibold mb-2">{stat.label}</div>
              <div className="text-gray-500">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(servicesData).map(([category, data]) => (
            <div key={category}>
              <ServiceCard
                title={category}
                subcategories={data.subcategories}
              />
            </div>
          ))}
        </div>


        <Servicesfill/>
      </div>
    </div>
  );
};

export default ServicesPage;





// import React, { useState } from 'react';
// import { ChevronRight, Search, FileText, Users, Building, Briefcase, Book, Shield, ScrollText, FileSignature, Scale } from 'lucide-react';
// import { servicesData } from '../../../utils/servicesData';
// import ServicesPage from './../../ServicesContact';


// const ServicesPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [hoveredSubcategory, setHoveredSubcategory] = useState(null);

//   const getCategoryIcon = (category) => {
//     const icons = {
//       "Rental Agreements": <Building className="w-6 h-6" />,
//       "Employment Agreements": <Users className="w-6 h-6" />,
//       "Business Agreements": <Briefcase className="w-6 h-6" />,
//       "Legal Documents": <ScrollText className="w-6 h-6" />,
//       "Corporate Agreement": <Shield className="w-6 h-6" />,
//       "E-commerce Agreements": <Book className="w-6 h-6" />,
//       "Intellectual Property Agreements": <FileSignature className="w-6 h-6" />,
//       "Commercial Documents": <Scale className="w-6 h-6" />,
//     };
//     return icons[category] || <FileText className="w-6 h-6" />;
//   };

//   const ServiceCard = ({ title, subcategories, onSelect, isSelected }) => (
//     <div 
//       className={`bg-white transition-all duration-300 cursor-pointer border-l-4 mb-2
//         ${isSelected ? 'border-l-blue-500 bg-blue-50' : 'border-l-transparent hover:border-l-blue-200 hover:bg-gray-50'}
//         group`}
//       onClick={() => onSelect(title)}
//     >
//       <div className="p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <div className={`p-3 rounded-xl transition-colors
//               ${isSelected ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
//               {getCategoryIcon(title)}
//             </div>
//             <div>
//               <h3 className={`font-medium transition-colors
//                 ${isSelected ? 'text-blue-600' : 'text-gray-800 group-hover:text-blue-600'}`}>
//                 {title}
//               </h3>
//               <span className="text-sm text-gray-500">
//                 {subcategories.length} templates
//               </span>
//             </div>
//           </div>
//           <ChevronRight 
//             className={`w-5 h-5 transition-all duration-300
//               ${isSelected ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'}`}
//           />
//         </div>
//       </div>
//     </div>
//   );

//   const SubcategoryContent = ({ category, subcategories }) => (
//     <div className="p-6">
//       <div className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">{category}</h2>
//         <p className="text-gray-600">
//           Browse all available templates for {category.toLowerCase()}
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {subcategories.map((sub) => (
//           <div
//             key={sub.name}
//             className="relative group"
//             onMouseEnter={() => setHoveredSubcategory(sub.name)}
//             onMouseLeave={() => setHoveredSubcategory(null)}
//           >
//             <div className={`bg-white rounded-xl p-5 transition-all duration-300
//               border-2 cursor-pointer
//               ${hoveredSubcategory === sub.name 
//                 ? 'border-blue-400 shadow-md transform -translate-y-1' 
//                 : 'border-gray-100 hover:border-blue-200 hover:shadow-sm'}`}>
//               <div className="flex justify-between items-start">
//                 <div className="flex-1">
//                   <p className="font-medium text-gray-800 mb-2">{sub.name}</p>
//                   <p className="text-sm text-gray-500 line-clamp-2">
//                     {sub.description || 'Professional template with legal provisions and clauses.'}
//                   </p>
//                   <div className="mt-3 flex items-center space-x-3">
//                     <span className="px-2 py-1 bg-blue-50 rounded-md text-xs text-blue-600 font-medium">
//                       Premium
//                     </span>
//                     <span className="text-xs text-gray-500">
//                       Last updated: 2024
//                     </span>
//                   </div>
//                 </div>
//                 <button className="ml-4 p-2 rounded-full bg-gray-50 hover:bg-blue-50 transition-colors group-hover:bg-blue-50">
//                   <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-8">
//           <div className="text-center">
//             <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-4">
//               Legal Solutions Made Simple
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900">
//               Find Your Perfect <span className="text-blue-600">Legal Template</span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto">
//         <div className="flex">
//           {/* Left Sidebar - Categories */}
//           <div className="w-80 min-h-screen bg-white border-r border-gray-200 p-4">
//             <div className="sticky top-4">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
//               {Object.entries(servicesData).map(([category, data]) => (
//                 <ServiceCard
//                   key={category}
//                   title={category}
//                   subcategories={data.subcategories}
//                   onSelect={setSelectedCategory}
//                   isSelected={selectedCategory === category}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Subcategories */}
//           <div className="flex-1 min-h-screen bg-gray-50">
//             {selectedCategory ? (
//               <SubcategoryContent
//                 category={selectedCategory}
//                 subcategories={servicesData[selectedCategory].subcategories}
//               />
//             ) : (
//               <div className="h-full flex items-center justify-center p-8">
//                 <div className="text-center text-gray-500">
//                   <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
//                   <h3 className="text-lg font-medium mb-2">Select a Category</h3>
//                   <p>Choose a category from the left to view available templates</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;