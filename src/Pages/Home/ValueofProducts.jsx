import React from 'react';
import { 
  CheckCircle2,
  XCircle,
  ArrowRight,
  Shield,
  Scale,
  Clock
} from 'lucide-react';

const LegalProducts = () => {
  const products = [
    {
      name: "Basic Legal Consultation",
      price: "99",
      duration: "Single Session",
      description: "Perfect for initial legal advice and basic questions",
      features: [
        "30-minute consultation",
        "Basic legal advice",
        "Document review (up to 5 pages)",
        "Follow-up email summary",
        "Access to legal templates"
      ],
      notIncluded: [
        "Document drafting",
        "Court representation",
        "Complex case handling",
        "Multiple practice areas"
      ],
      popular: false,
      buttonText: "Book Consultation"
    },
    {
      name: "Professional Legal Package",
      price: "499",
      duration: "Monthly",
      description: "Comprehensive legal support for individuals and small businesses",
      features: [
        "Unlimited consultations",
        "Document drafting & review",
        "Contract negotiations",
        "Legal correspondence",
        "Priority support",
        "2 practice areas included",
        "Monthly legal updates"
      ],
      notIncluded: [
        "Court appearances",
        "Complex litigation",
        "International law"
      ],
      popular: true,
      buttonText: "Get Started"
    },
    {
      name: "Enterprise Legal Solution",
      price: "1,499",
      duration: "Monthly",
      description: "Full-service legal coverage for businesses",
      features: [
        "24/7 legal support",
        "Dedicated legal team",
        "All document services",
        "Court representation",
        "Regulatory compliance",
        "All practice areas included",
        "Custom legal strategy",
        "Monthly reports",
        "Emergency support"
      ],
      notIncluded: [],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">
            Value of Product
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the right legal package for your needs
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <div className="flex items-center gap-2">
            <Shield className="text-purple-600" />
            <span className="text-gray-700">100% Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <Scale className="text-purple-600" />
            <span className="text-gray-700">Licensed Attorneys</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-purple-600" />
            <span className="text-gray-700">24/7 Support</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                product.popular 
                  ? 'ring-2 ring-purple-600 shadow-xl' 
                  : 'border border-purple-100'
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-purple-800 mb-2">
                  {product.name}
                </h3>
                <div className="text-gray-600 mb-4">{product.description}</div>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-purple-800">
                    ${product.price}
                  </span>
                  <span className="text-gray-500 ml-2">/{product.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="space-y-2">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <CheckCircle2 className="text-purple-600 mr-2 h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {product.notIncluded.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {product.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-400">
                        <XCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button 
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center ${
                  product.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                } transition-colors duration-300`}
              >
                {product.buttonText}
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-purple-800 mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our legal experts are here to help you choose the right package
          </p>
          <button className="bg-purple-100 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-200 transition-colors duration-300">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalProducts;