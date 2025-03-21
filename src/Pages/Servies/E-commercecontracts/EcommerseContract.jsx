import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ecommerce } from "../../../utils/sevicecontent";
import {
  Gavel,
  DollarSign,
  Calendar,
  Wrench,
  Scale,
  FileCheck,
  ChevronRight,
  ChevronLeft,
  Shield,
  Clock,
  FileText,
} from "lucide-react";

import HeroSection from "../../RentalAgreement/HeroSection";
import ChainSteps from "../../RentalAgreement/RentalSteps";
import Slider from "../../RentalAgreement/WhyChooseUsSlider";
import FAQItem from "../../RentalAgreement/FAQItem";
import { FeatureCard } from "../../RentalAgreement/FeatureCard";

const iconMap = {
  DollarSign,
  Calendar,
  Wrench,
  Scale,
  FileCheck,
  Gavel,
  Shield,
  Clock,
  FileText,
};

// Enhanced mapping of URLs to content IDs
const EcommerseContract = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(null);
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  useEffect(() => {
    setLoading(true);
    
    // Directly access the content using the id
    const pageContent = ecommerce[id]; // Use id directly to get content

    if (pageContent) {
      setContent(pageContent);
    } else {
      setContent(null); // Handle case where content is not found
    }
    
    setLoading(false);
  }, [id]);

  // Scrolling animation effect
  useEffect(() => {
    if (!content?.whyNeedAgreement) return;

    const scrollInterval = setInterval(() => {
      setScrollPosition1((prev) => {
        const newPosition = prev + 1;
        return newPosition >= content.whyNeedAgreement.length * 300 ? 0 : newPosition;
      });
      
      setScrollPosition2((prev) => {
        const newPosition = prev + 1;
        return newPosition >= content.whyNeedAgreement.length * 300 ? 0 : newPosition;
      });
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [content?.whyNeedAgreement]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!content || !content.features) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">
          Content not found. Please try again.
        </div>
      </div>
    );
  }

  const featuresPerPage = 3;
  const visibleFeatures = content.features.slice(
    currentFeatureSlide * featuresPerPage,
    currentFeatureSlide * featuresPerPage + featuresPerPage
  );

  const duplicatedItems = [...content.whyNeedAgreement, ...content.whyNeedAgreement];

  const nextFeatureSlide = () => {
    if ((currentFeatureSlide + 1) * featuresPerPage < content.features.length) {
      setCurrentFeatureSlide((prev) => prev + 1);
    }
  };

  const prevFeatureSlide = () => {
    if (currentFeatureSlide > 0) {
      setCurrentFeatureSlide((prev) => prev - 1);
    }
  };

  const isFeaturesAtStart = currentFeatureSlide === 0;
  const isFeaturesAtEnd =
    (currentFeatureSlide + 1) * featuresPerPage >= content.features.length;

  return (
    <div className="w-full">
      <HeroSection {...content.hero} />
      
      {/* What Is Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-b from-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 z-10">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-8">
                {content.whatIs.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.whatIs.description}
              </p>
            </div>
            <div className="flex-1 relative">
              {content.whatIs.image && (
                <img
                  src={content.whatIs.image}
                  alt={content.whatIs.title}
                  className="rounded-lg shadow-xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Key Features</h2>
          <div className="flex gap-2">
            <button
              onClick={prevFeatureSlide}
              className={`p-3 rounded-full transition-colors ${
                isFeaturesAtStart
                  ? "border border-gray-200 hover:bg-gray-50"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
              disabled={isFeaturesAtStart}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextFeatureSlide}
              className={`p-3 rounded-full transition-colors ${
                isFeaturesAtEnd
                  ? "border border-gray-200 hover:bg-gray-50"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
              disabled={isFeaturesAtEnd}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <FeatureCard
                key={index}
                icon={IconComponent}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>

      {/* Why Need Agreement Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Do You Need a {content.whatIs.title}?
        </h2>
        
        {/* First row - Left to Right */}
        <div className="relative mb-8 overflow-hidden">
          <div 
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition1}px)`,
              transition: 'transform 0.03s linear',
              width: `${duplicatedItems.length * 300}px`
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`row1-${index}`} className="w-[300px] p-4">
                <FeatureCard
                  title={item.title}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second row - Right to Left */}
        <div className="relative overflow-hidden">
          <div 
            className="flex"
            style={{
              transform: `translateX(${scrollPosition2}px)`,
              transition: 'transform 0.03s linear',
              width: `${duplicatedItems.length * 300}px`,
              marginLeft: `-${duplicatedItems.length * 300}px`
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`row2-${index}`} className="w-[300px] p-4">
                <FeatureCard
                  title={item.title}
                  description={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Framework Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Legal Framework
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.legalFramework.map((item, index) => (
            <FeatureCard
              key={index}
              icon={Gavel}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>

      {/* Steps Section */}
      <ChainSteps
        title={`How to Create a ${content.whatIs.title}`}
        steps={content.steps}
      />

      {/* Why Choose Us Section */}
      <Slider
        title="Why Choose Us?"
        description="Discover the benefits of our services."
        data={content.whyChooseUs}
      />

      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {content.faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={isOpen === index}
              onToggle={() => setIsOpen(isOpen === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcommerseContract;


