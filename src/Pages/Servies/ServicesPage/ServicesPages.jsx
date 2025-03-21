import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Users,
  Building,
  Briefcase,
  Book,
  Shield,
  ScrollText,
  FileSignature,
  Scale,
  Bell,
  Gavel,
  FileCheck,
  FileSpreadsheet,
  Store,
  Home,
  MapPin,
} from "lucide-react";
import { servicesData } from "../../../utils/servicesData";
import Servicesfill from "./../../ServicesContact";
import ServicesSearch from "./ServicesSearch";

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
      "Intellectual Property Agreements": (
        <FileSignature className="w-6 h-6 text-purple-500" />
      ),
      "Commercial Documents": <Scale className="w-6 h-6 text-purple-500" />,
      Affidavits: <FileText className="w-6 h-6 text-purple-500" />,
      Notices: <Bell className="w-6 h-6 text-purple-500" />,
      "Power of Attorney": <Gavel className="w-6 h-6 text-purple-500" />,
      "Post Contractual Matters": (
        <FileCheck className="w-6 h-6 text-purple-500" />
      ),
      Wills: <FileText className="w-6 h-6 text-purple-500" />,
      "Sale Documents": <FileSpreadsheet className="w-6 h-6 text-purple-500" />,
      "Commercial Establishments": (
        <Store className="w-6 h-6 text-purple-500" />
      ),
      "Lease Agreements": <Home className="w-6 h-6 text-purple-500" />,
      "Real Estate Agreements": <MapPin className="w-6 h-6 text-purple-500" />,
    };

    return icons[category] || <FileText className="w-8 h-8 text-purple-500" />;
  };

  const handleCategoryClick = (category) => {
    const slug = category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${slug}`);
  };

  const ServiceCard = ({ title, image, subcategories }) => (
    <div
      className=" rounded-2xl transition-all duration-300 cursor-pointer border-2 
        border-purple-100 shadow-sm hover:shadow-lg group overflow-hidden"
      onClick={() => handleCategoryClick(title)}
    >
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-72 aspect-auto object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
  
      {/* Content Section */}

       <div className="p-6 ">
        <div className="flex items-start space-x-4">
          {/* Icon */}
          <div className="flex-shrink-0 p-3 rounded-xl bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
            {getCategoryIcon(title)}
          </div>
  
          {/* Title and Subcategories */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
              {title}
            </h3>
            <div className="mt-2 flex items-center space-x-2">
              <span className="px-3 py-1 bg-purple-50 rounded-full text-sm text-purple-600">
                {subcategories.length} Documents
              </span>
              <span className="text-sm text-gray-500">Click to explore</span>
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
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
              Legal Document
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            Access professionally crafted legal documents designed to protect
            your interests. Quick to customize, legally sound, and always
            up-to-date.
          </p>
        </div>
        <ServicesSearch />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Legal Documents", value: "150+", desc: "Ready to use" },
            { label: "Categories", value: "16+", desc: "Well organized" },
            {
              label: "Documents Generated",
              value: "10K+",
              desc: "Trusted by users",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-8 text-center border border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-800 font-semibold mb-2">
                {stat.label}
              </div>
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
                image={data.image}
                subcategories={data.subcategories}
              />
            </div>
          ))}
        </div>

        <Servicesfill />
      </div>
    </div>
  );
};

export default ServicesPage;
