import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
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
  ArrowRight
} from "lucide-react";
import { servicesData } from "../../utils/servicesData";

const ServicesMarquee = () => {
  const navigate = useNavigate();
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryClick = (category) => {
    const slug = category.toLowerCase().replace(/\s+/g, "-");
    navigate(`/services/${slug}`);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      "Rental Agreements": <Building className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      "Employment Agreements": <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      "Business Agreements": <Briefcase className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      "Legal Documents": <ScrollText className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      "Corporate Agreement": <Shield className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
      "E-commerce Agreements": <Book className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Intellectual Property Agreements": <FileSignature className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Commercial Documents": <Scale className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Affidavits": <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Notices": <Bell className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Power of Attorney": <Gavel className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Post Contractual Matters": <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Wills": <FileText className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Sale Documents": <FileSpreadsheet className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Commercial Establishments": <Store className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Lease Agreements": <Home className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
      "Real Estate Agreements": <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />,
    };
    return icons[category] || <FileText className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />;
  };

  const ServiceCard = ({ title, image, subcategories }) => (
    <div
      className="w-full sm:w-1/2 lg:w-1/3 p-2 flex-shrink-0 transition-all duration-300 cursor-pointer"
      onClick={() => handleCategoryClick(title)}
    >
      <div className="h-full rounded-xl md:rounded-2xl border border-purple-100 shadow-sm hover:shadow-md group overflow-hidden">
        <div className="relative h-32 sm:h-36 md:h-40 lg:h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <div className="p-3 md:p-4">
          <div className="flex items-start space-x-2 md:space-x-3 lg:space-x-4">
            <div className="flex-shrink-0 p-1.5 md:p-2 rounded-lg md:rounded-xl bg-purple-50 group-hover:bg-purple-100">
              {getCategoryIcon(title)}
            </div>
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 group-hover:text-purple-600">
                {title}
              </h3>
              <div className="mt-1 md:mt-2">
                <span className="px-2 py-0.5 md:py-1 bg-purple-50 rounded-full text-xs text-purple-600">
                  {subcategories.length} Documents
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const speed = cardsToShow === 1 ? 0.1 : cardsToShow === 2 ? 0.07 : 0.05;
    
    const animate = () => {
      setPosition1(prev => (prev <= -100 ? 0 : prev - speed));
      setPosition2(prev => (prev >= 0 ? -100 : prev + speed));
    };

    const animationFrame = setInterval(animate, 400 / 80);
    return () => clearInterval(animationFrame);
  }, [cardsToShow]);

  const servicesArray = Object.entries(servicesData);
  
  return (
    <div className="w-full overflow-hidden my-8 sm:my-12 lg:my-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-4">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Legal services
            </span>
          </h1>
        </div>
        <Link 
          to="/Services"
          className="text-base sm:text-lg md:text-xl font-semibold flex items-center hover:border hover:rounded-full hover:border-purple-500 px-3 py-1 md:px-4 md:py-2 text-black transition-all"
        >
          See all Services
          <ArrowRight className="ml-1 md:ml-2" size={18} />
        </Link>
      </div>
      
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex whitespace-nowrap" style={{ transform: `translateX(${position1}%)` }}>
          {servicesArray.map(([category, data], index) => (
            <ServiceCard
              key={`row1-${category}-${index}`}
              title={category}
              image={data.image}
              subcategories={data.subcategories}
            />
          ))}
          {servicesArray.map(([category, data], index) => (
            <ServiceCard
              key={`row1-repeat-${category}-${index}`}
              title={category}
              image={data.image}
              subcategories={data.subcategories}
            />
          ))}
        </div>
        
        {/* Second Row - Right to Left */}
        <div className="flex whitespace-nowrap mt-2 sm:mt-4" style={{ transform: `translateX(${position2}%)` }}>
          {servicesArray.map(([category, data], index) => (
            <ServiceCard
              key={`row2-${category}-${index}`}
              title={category}
              image={data.image}
              subcategories={data.subcategories}
            />
          ))}
          {servicesArray.map(([category, data], index) => (
            <ServiceCard
              key={`row2-repeat-${category}-${index}`}
              title={category}
              image={data.image}
              subcategories={data.subcategories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMarquee;