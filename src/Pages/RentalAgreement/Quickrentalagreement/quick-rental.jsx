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

const quickRentalPage = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [currentFeatureSlide, setCurrentFeatureSlide] = useState(0);

  const features = [
    {
      icon: DollarSign,
      title: "Financial Terms",
      description: "Covers essential terms like rent, payment schedule, and security deposit. ",
    },
    {
      icon: Calendar,
      title: "furniture Duration",
      description:
        "Customizable clauses for specific requirements. ",
    },
    {
      icon: Wrench,
      title: "Maintenance Details",
      description:
        "Legally compliant and valid across all states in India.",
    },
    {
      icon: Scale,
      title: "Legal Framework",
      description:
        "Fast and hassle-free agreement creation.",
    },
    {
      icon: FileCheck,
      title: "Delivery",
      description:
        "Options for digital or hard-copy delivery. ",
    },
  ];

  const whyNeedAgreement = [
    {
      title: "Time-Saving",
      desc: "Get your agreement drafted and finalized within minutes. ",
    },
    {
      title: "Legal Protection",
      desc: " Safeguard the interests of both landlord and tenant.",
    },
    {
      title: "Flexibility",
      desc: "Customize the agreement to suit your unique needs.",
    },
    {
      title: "Transparency",
      desc: "Clearly outline rights, responsibilities, and rental terms.",
    },
    {
      title: "Flexibility",
      desc: "Allows customization to suit the specific needs of both parties.",
    },
    {
      title: "Simplicity",
      desc: "Streamlined process makes it easy for both parties to understand and agree on terms.",
    },
  ];

  const legalFramework = [
    {
      title: "The Indian Contract Act, 1872",
      desc: " Establishes the legality of contracts and obligations between parties.",
    },
    {
      title: "The Transfer of Property Act, 1882",
      desc: " Governs the leasing of immovable property.",
    },
    {
      title: "State-Specific Rent Control Acts",
      desc: "Ensure compliance with local regulations regarding rental agreements.",
    },
  ];

  const faqs = [
  {
    question: "How fast can I get my Quick Rental Agreement?",
    answer:
      "Digital copies are available instantly after completion, while hard copies are delivered within a few working days.",
  },
  {
    question: "Is the Quick Rental Agreement legally valid?",
    answer:
      "Yes, all agreements are compliant with Indian laws and include e-stamping and e-signature options for validity.",
  },
  {
    question: "Can I customize the agreement?",
    answer:
      "Absolutely! You can include clauses specific to your needs, such as subletting, maintenance, or termination terms.",
  },
  {
    question: "Are e-stamped and e-signed agreements recognized in India?",
    answer:
      "Yes, e-stamped and Aadhaar-based e-signed agreements are legally valid and binding under Indian law.",
  },
  {
    question: "Can I renew the agreement later?",
    answer:
      "Yes, you can include renewal terms in your Quick Rental Agreement for seamless extensions.",
  },
  {
    question: "What happens if I make an error in the agreement?",
    answer:
      "You can review and edit the agreement before finalizing it to ensure accuracy.",
  },
  {
    question: "Do you provide legal consultation?",
    answer:
      "Yes, our legal experts are available to assist you throughout the process.",
  },
];


  const QuickRental = [
    {
      title: "Start the Process",
      desc: "Click the “Create Now” button.",
    },
    {
      title: "Enter Property Details",
      desc: "Provide the property address, rental amount, and tenant/landlord information.",
    },
    {
      title: "Define Terms",
      desc: "Specify the rental period, security deposit, and payment terms.",
    },
    {
      title: "Customize Clauses",
      desc: "Add specific conditions like maintenance responsibilities or pet policies. ",
    },
    {
      title: "E-Stamp Integration",
      desc: "Seamlessly include legally valid e-stamp paper.",
    },
    {
      title: "E-Signature",
      desc: " Use Aadhaar-based e-signatures for a secure and legally binding agreement.",
    },
    {
      title: "Review and Finalize",
      desc: "Verify all terms before completion. ",
    },
    {
      title: "Delivery Options",
      desc: "Get digital copies instantly or hard copies delivered to your address",
    },
  ];

  const whyChooseUsflat = [
    {
      title: "Speed",
      desc: " Create and finalize agreements in minutes.",
    },
    {
      title: "Customizable",
      desc: "Tailor agreements to meet your specific needs.",
    },
    {
      title: "Integrated E-Stamping Services",
      desc: "Simplifies the legal stamping process",
    },
    {
      title: "Secure E-Signatures",
      desc: "Aadhaar-based signing ensures hassle-free execution of agreements",
    },
    {
      title: "Affordable Pricing",
      desc: "Access high-quality services at competitive rates. ",
    },
    {
      title: "Convenient Delivery Options",
      desc: "Receive digital copies instantly, hard copies delivered directly",
    },
    {
      title: "Expert Support",
      desc: "Our legal professionals are available to guide you.",
    },
    {
      title: "User-Friendly Platform",
      desc: "Navigate through the process with ease and efficiency",
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
        question={"Are you a landlord or tenant in need of a swift and efficient way to formalize a rental arrangement? "}
        description="Look no further! At MyLegalInstant.com, we specialize in providing expertly crafted Quick Rental Agreements designed to meet your immediate needs. Our platform ensures that your agreements are legally sound, customizable, and easy to execute, allowing you to focus on what matters most."
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
                What is a Quick Rental Agreement?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Quick Rental Agreement is a simplified legal document that
                outlines the terms and conditions of renting a property between
                a landlord (property owner) and a tenant (occupant). This
                agreement is designed for short-term rentals or situations, it
                outlines all essential terms and conditions, ensuring clarity
                and protection for both parties.
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
          Why Do You Need a Quick Rental Agreement?
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
        title="How Does Quick Rental Agreement Work?"
        steps={ QuickRental}
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
            Secure your Quick Rental Agreement with a professionally drafted
            agreement tailored to your needs. Simplify the process today and
            ensure peace of mind!
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

export default quickRentalPage;
