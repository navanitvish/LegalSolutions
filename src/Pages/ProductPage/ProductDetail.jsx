import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../../utils/ProductDetail";
import {
  CheckCircle2,
  ChevronRight,
  Loader2,
  Star,
  Award,
  Lightbulb,
  MessageCircle,
  ArrowRight,
  LayoutDashboard,
  Rocket,
  ChevronDown,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-200 last:border-0 hover:bg-purple-50 rounded-lg transition-colors duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 cursor-pointer">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold flex items-center">
            <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-purple-600 font-bold">{index + 1}</span>
            </span>
            {faq.question}
          </h3>
          <ChevronDown
            className={`w-6 h-6 text-purple-600 transition-transform duration-300 flex-shrink-0 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </div>
        <div
          className={`ml-11 mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = ({ title, tagLine }) => {
  return (
    <div className="relative  flex flex-col items-center justify-center ">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center mb-8">
          <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Product</span>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {tagLine}
          </p>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: Star, text: "Premium Quality" },
            { icon: CheckCircle, text: "Verified Features" },
            { icon: ArrowRight, text: "Easy Integration" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-800">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="mt-12 flex items-center justify-center gap-4">
          <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-colors duration-300 shadow-lg">
            Learn More
          </button>
        </div> */}
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-24"
          fill="white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C250,0,321.39,56.44,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(productsData[productId]);
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </div>
    );
  }

  // Previous sections remain the same until FAQs...

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Previous sections remain unchanged */}

        

        {/* Hero Section */}
        <HeroSection title={product.title} tagLine={product.tagLine} />

        {/* Overview Section */}
        <div className=" p-8 mb-12">
          <div className="flex items-center mb-6">
            <LayoutDashboard className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold">Overview</h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            {product.overview}
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className=" p-8 mb-12">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className=" p-8 mb-12">
          <div className="flex items-center mb-8">
            <Lightbulb className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold">How It Works</h2>
          </div>
          <div className="space-y-12">
            {product.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 bg-purple-50 p-4 rounded-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < product.steps.length - 1 && (
                  <div className="absolute left-6 top-16 h-20 border-l-2 border-dashed border-purple-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className=" p-8 mb-12">
          <div className="flex items-center mb-8">
            <Star className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold">Benefits</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.isArray(product.benefits) && product.benefits.length > 0 ? (
              product.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-xl hover:bg-purple-50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-purple-600" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No benefits available</p>
            )}
          </div>
        </div>

        {/* Updated FAQs Section */}
        <div className=" p-8 mb-12">
          <div className="flex items-center mb-8">
            <MessageCircle className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-3xl font-bold">FAQs</h2>
          </div>
          <div className="space-y-4">
            {product.faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>

        {/* Get Started Section */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl shadow-xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/800/400')] opacity-10" />
          <Rocket className="w-12 h-12 text-white mx-auto mb-6" />
          <p className="text-white text-xl font-semibold relative z-10">
            {product.getStarted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
