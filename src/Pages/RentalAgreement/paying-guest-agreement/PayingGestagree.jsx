import { useState, useEffect } from "react";
import {
  Gavel,
  DollarSign,
  Calendar,
  Wrench,
  Scale,
  FileCheck,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import ChainSteps from "../RentalSteps";
import Slider from "../WhyChooseUsSlider";
import HeroSection from "../HeroSection";
import FAQItem from "../FAQItem";

// Animated feature card with hover effects
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
    
    <div className="relative bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-64 flex flex-col hover:border-transparent overflow-hidden">
      {Icon && (
        <div className="flex justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur group-hover:blur-md transition-all duration-300 opacity-20" />
            <div className="relative w-14 h-14 flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl group-hover:scale-110 transition-all duration-300">
              <Icon className="w-7 h-7 text-purple-600 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-left overflow-y-auto pr-1 flex-grow">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed line-clamp-4">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </div>
  </div>
);
// Enhanced FAQ component with smooth animation

const flatRentalPage = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);

 const features = [
  {
    icon: DollarSign,
    description: "Clearly defines rent, deposit, and payment terms.",
  },
  {
    icon: Calendar,
    description:
      "Outlines shared facilities such as kitchens, bathrooms, and living spaces and services provided by the host.",
  },
  {
    icon: Wrench,
    description:
      "Specifies house rules, guest policies, and usage restrictions.",
  },
  {
    icon: Scale,
    description:
      "Includes provisions for termination, renewal, and dispute resolution.",
  },
  {
    icon: FileCheck,
    description:
      "Legally compliant with Indian laws governing such arrangements.",
  },
];


  const whyNeedAgreement = [
    {
      title: "Clarity and Transparency",
      desc: "Clearly defines the terms of the rental arrangement, preventing misunderstandings about rent, shared facilities, and responsibilities.",
    },
    {
      title: "Legal Protection",
      desc: "Safeguards the rights of both landlords and tenants against potential disputes, especially concerning the furnishings, property usage or damages.",
    },
    {
      title: "Dispute Resolution",
      desc: "Establishes a framework for addressing any issues or breaches of contract regarding the property or furnishings.",
    },
    {
      title: "Compliance",
      desc: "Ensures adherence to Indian rental laws, offering legal validity to the arrangement.",
    },
    {
      title: "Flexibility",
      desc: "Allows for customization based on specific needs, such as meal provisions or curfews. ",
    },
  ];

  const legalFramework = [
    {
      title: "The Indian Contract Act, 1872",
      desc: " Establishes the legality of contracts and obligations between parties.",
    },
    {
      title: "The Transfer of Property Act, 1882",
      desc: "Governs rental and leasing of properties.",
    },
    {
      title: "State-Specific Rent Control Acts",
      desc: "For instance, the Karnataka Rent Act, 1999, which regulates rentals in Karnataka.",
    },
  ];


  const faqs = [
  {
    question: "What is a Paying Guest Agreement?",
    answer: "It is a legal document that outlines the terms and conditions for accommodating a paying guest, ensuring clarity and legal protection for both parties.",
  },
  {
    question: "Is the Paying Guest Agreement legally valid in India?",
    answer: "Yes, our agreements are legally compliant and include e-stamping and Aadhaar-based e-signatures for validity.",
  },
  {
    question: "Can I customize the agreement?",
    answer: "Absolutely! You can add specific clauses like house rules, curfew timings, or meal provisions.",
  },
  {
    question: "How soon can I get my agreement?",
    answer: "Digital copies are available instantly after creation, and hard copies are delivered within a few working days.",
  },
  {
    question: "Does the agreement cover house rules?",
    answer: "Yes, you can include detailed house rules, guest policies, and other living arrangement specifics.",
  },
  {
    question: "Can I terminate the agreement early?",
    answer: "The agreement can include terms for early termination, ensuring clarity on notice periods and penalties.",
  },
  {
    question: "What if there are damages to the property?",
    answer: "The agreement can specify responsibilities for damages and deductions from the security deposit.",
  },
  {
    question: "Do you offer legal consultation?",
    answer: "Yes, our legal experts are available to assist you throughout the process.",
  },
  {
    question: "Does the agreement specify utility contributions?",
    answer: "Yes, you can include terms for utility charges and shared expenses.",
  },
];


 

  const rentalSteps = [
  {
    title: "Start the Process",
    desc: "Click the “Create Now” button to begin your agreement creation journey effortlessly.",
  },
  {
    title: "Choose Agreement Type",
    desc: "Select 'Paying Guest Agreement' from our curated list of rental agreement templates.",
  },
  {
    title: "Provide Basic Details",
    desc: "Enter key information such as tenant and owner names, property address, rent amount, deposit, and duration.",
  },
  {
    title: "Define Terms",
    desc: "Specify additional clauses like shared utilities, responsibilities, or facility usage to suit your needs.",
  },
  {
    title: "Add Custom Clauses",
    desc: "Insert specific rules including curfew timings, guest limitations, or meal arrangements.",
  },
  {
    title: "Review the Draft",
    desc: "Carefully review all filled details and clauses to ensure everything is accurate before submission.",
  },
  {
    title: "E-Stamp Integration",
    desc: "Opt for legally recognized e-stamping to enhance the document’s legal validity.",
  },
  {
    title: "E-Signature",
    desc: "Use Aadhaar-based e-signatures for a quick, secure, and paperless signing process.",
  },
  {
    title: "Expert Consultation",
    desc: "Seek assistance from our legal experts at any step to resolve doubts or refine clauses.",
  },
  {
    title: "Delivery Options",
    desc: "Choose between an instant downloadable digital copy or a hard copy delivered to your doorstep.",
  },
];



  const whyChooseUsflat = [
  {
    title: "Customizable Agreements",
    desc: "Tailor every clause to suit your specific living arrangement and personal preferences.",
  },
  {
    title: "Legally Compliant",
    desc: "Every agreement is drafted in accordance with Indian laws governing paying guest accommodations.",
  },
  {
    title: "Integrated E-Stamping",
    desc: "Easily include legally recognized e-stamp papers without visiting government offices.",
  },
  {
    title: "Secure E-Signatures",
    desc: "Aadhaar-based digital signing ensures legally valid and hassle-free execution.",
  },
  {
    title: "Expert Assistance",
    desc: "Professional legal experts are available to support you at every step of the process.",
  },
  {
    title: "Quick and Efficient",
    desc: "Complete your agreement draft and finalization process within minutes.",
  },
  {
    title: "Affordable Services",
    desc: "Get access to premium-quality agreements at transparent and budget-friendly pricing.",
  },
  {
    title: "Convenient Delivery",
    desc: "Receive instant digital copies or opt for hard-copy delivery right at your doorstep.",
  },
  {
    title: "User-Friendly Platform",
    desc: "Our intuitive interface makes agreement creation simple, fast, and stress-free.",
  },
];


  const duplicatedItems = [...whyNeedAgreement, ...whyNeedAgreement];

  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition1((prev) => {
        const newPosition = prev + 1;
        return newPosition >= whyNeedAgreement.length * 300 ? 0 : newPosition;
      });

      setScrollPosition2((prev) => {
        const newPosition = prev + 1;
        return newPosition >= whyNeedAgreement.length * 300 ? 0 : newPosition;
      });
    }, 20);

    return () => clearInterval(scrollInterval);
  }, [whyNeedAgreement.length]);

  const featuresPerPage = 3;
  const visibleFeatures = features.slice(
    currentFeatureSlide * featuresPerPage,
    currentFeatureSlide * featuresPerPage + featuresPerPage
  );

  const nextFeatureSlide = () => {
    if ((currentFeatureSlide + 1) * featuresPerPage < features.length) {
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
    (currentFeatureSlide + 1) * featuresPerPage >= features.length;

  return (
    <div className=" w-full">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to"
        subtitle="MyLegalInstant.com"
        question={"Are you a homeowner hosting paying guests or an individual seeking accommodation as a paying guest? "}
        description="At MyLegalinstant.com, we simplify the process of creating a legally sound and tailored Paying Guest Agreement. Protect your rights, clarify responsibilities, and ensure a smooth living arrangement with our expert services. "
        buttonText="Create Agreement Now"
        buttonLink="/create-agreement"
        trustIndicators={[
          "Legally Verified",
          "Instant Download",
          "24/7 Support",
        ]}
      />

      {/* What is Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 z-10">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-8">
              What is a Paying Guest Agreement? 
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Paying Guest (PG) Agreement is a legal document that
                establishes the terms and conditions between the property owner
                (host) and the paying guest (occupant). It provides clarity on
                living arrangements, rent, utilities, and house rules,
                safeguarding the interests of both parties. .
              </p>
            </div>

            <div className="flex-1 relative">
              <div className=" relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1637614520608-fcbbe5b83f64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGZsYXRzfGVufDB8fDB8fHww"
                  alt="House Rental Agreement"
                  className="object-cover w-full h-72"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 rounded-full opacity-20" />
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-30 -z-10 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-30 -z-10 transform -translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Key Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Key Features</h2>

          <div className="flex gap-2">
            <button
              onClick={prevFeatureSlide}
              className={`p-3 rounded-full transition-colors ${
                isFeaturesAtStart
                  ? "border border-gray-200 hover:bg-gray-50"
                  : " bg-gray-900 text-white hover:bg-gray-800"
              }`}
              disabled={isFeaturesAtStart}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextFeatureSlide}
              className={`p-3 rounded-full transition-colors flex items-center gap-2 ${
                isFeaturesAtEnd
                  ? "border border-gray-200 hover:bg-gray-50"
                  : " bg-gray-900 text-white hover:bg-gray-800"
              }`}
              disabled={isFeaturesAtEnd}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleFeatures.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Why Need Agreement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 overflow-hidden">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Why Do You Need a Paying Guest Agreement?
        </h2>

        {/* First row - Left to Right */}
        <div className="relative mb-8 overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${scrollPosition1}px)`,
              transition: "transform 0.03s linear",
              width: `${duplicatedItems.length * 300}px`,
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`row1-${index}`} className="w-[300px] p-4">
                <FeatureCard title={item.title} description={item.desc} />
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
              transition: "transform 0.03s linear",
              width: `${duplicatedItems.length * 300}px`,
              marginLeft: `-${duplicatedItems.length * 300}px`,
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={`row2-${index}`} className="w-[300px] p-4">
                <FeatureCard title={item.title} description={item.desc} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legal Framework */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Legal Framework in India
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {legalFramework.map((item, index) => (
            <FeatureCard
              key={index}
              icon={Gavel}
              title={item.title}
              description={item.desc}
            />
          ))}
        </div>
      </div>

      {/* steps */}
      <ChainSteps
        title="How to Create a Paying Guest Agreement with MyLegalInstant.com"
        steps={rentalSteps}
      />

      {/* Why Choose Us */}
      <Slider
        title="Why Choose Us?"
        description="Discover the benefits of our services."
        data={whyChooseUsflat}
      />

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-br from-indigo-200 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Started Today!
          </h2>
          <p className="text-purple-100 mb-8 text-lg max-w-3xl mx-auto">
         Secure your paying guest arrangement with a professionally drafted Paying Guest Agreement tailored to your needs.Simplify the process today and ensure peace of mind!
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
            Create Agreement Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions 
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
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

export default flatRentalPage;
