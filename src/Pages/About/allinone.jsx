import React, { useState } from "react";
import {
  Users,
  FileText,
  MessageCircle,
  Lock,
  FileSearch,
  Shield,
  ArrowUpRight,
  MoveRight,
  Clock,
  Trophy,
  CheckCircle,
  Target,
  BookOpen,
  Scale,
  MessageSquare,
  ChevronDown,
  Plus,
  Stamp,
  Heart,
  Flag,
  Sparkles,
} from "lucide-react";
import WelcomeLegalSection from "./WelcomeLegalSection";
import AskQuestionForm from "../AskQuestionForm";

const pageContent = {
  hero: {
    title: "Welcome to MyLegalInstant",
    subtitle: "Transform Your Legal Documentation Experience",
    description:
      "Your comprehensive legal documentation service provider dedicated to revolutionizing the way legal documents are drafted and managed.",
    stats: [
      { number: "10K+", label: "Documents Created" },
      { number: "200+", label: "Client served" },
      { number: "24/7", label: "Customer Support" },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1573164574511-73c773193279?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  vision: {
    title: "Our Vision",
    // subtitle:
    //   "At MyLegalInstant.com, we are dedicated to 'Making India Legally Reliant' This guiding principle shapes our approach to legal services and reflects our commitment to empowering our users through innovative solutions. We believe that everyone should have access to reliable legal resources without the traditional barriers often associated with legal services",
    cards: [
      {
        icon: <Target className="w-8 h-8" />,
        title: "Mission",
        content:
          "To democratize access to legal services through innovative technology solutions.",
      },
      {
        icon: <BookOpen className="w-8 h-8" />,
        title: "Values",
        content:
          "Integrity, transparency, and excellence in every document we process.",
      },
      {
        icon: <Flag className="w-8 h-8" />,
        title: "Goals",
        content: "To become India's most trusted legal documentation platform.",
      },
    ],
  },

  whyChoose: {
    title: "Why Choose Us",
    subtitle:
      "Our platform offers a wide range of legal services designed to meet your unique needs",
    items: [
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Effortless Document Creation",
        description:
          "Say goodbye to tedious paperwork, design and customize your legal documents tailored to your specific requirements.",
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Personalized Touch Customizable Solutions",
        description:
          "Customize your documents according to your preferences through our platform’s streamlined process.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Legal Advice and Consultation",
        description:
          "Access professional guidance at a fraction of the cost of traditional legal services.",
      },
      {
        icon: <Trophy className="w-6 h-6" />,
        title: "Expert Oversigh",
        description:
          "All documents are crafted by our team of legal experts, ensuring compliance with current laws and regulations.",
      },
    ],
  },

  commitment: {
    title: "Our Commitment",
    subtitle:
      "We pride ourselves on providing a user-friendly platform that delivers quick, reliable, and secure solutions for all your legal documentation needs. With MyLegalInstant.com, you can expect a smooth and effortless experience that combines your personalized touch with the expertise of our dedicated legal team.",
    features: [
      {
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Quality Assurance",
        description: "Every document is reviewed for accuracy and compliance.",
      },
      {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "24/7 Support",
        description: "Get assistance anytime, anywhere with our dedicated support team.",
      },
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Timely Delivery",
        description: "Receive your documents in a timely manner.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Data Security",
        description:
          "Your information is protected with state-of-the-art encryption and security measures.",
      },
    ],
  },

  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What makes MyLegalInstant a reliable document partner?",
        answer:
          "MyLegalInstant is built on a foundation of legal expertise, cutting-edge technology, and user-centric services. Our team includes experienced legal professionals who ensure that every document we provide meets the highest standards of accuracy, legality, and compliance. We offer tailored solutions to suit individual and business needs, ensuring seamless execution of legal documentation.",
      },
      {
        question:
          " How does MyLegalInstant ensure the security of my documents?",
        answer:
          "We take document security seriously. MyLegalInstant uses state-of-the-art encryption technologies to protect your documents during storage and transmission. We also implement robust access controls to ensure only authorized parties can view or modify your documents. Additionally, our platform complies with all relevant data protection laws, including the Information Technology Act, 2000, and industry best practices.",
      },
      {
        question:
          "Are my documents legally valid and enforceable if created through MyLegalInstant? ",
        answer:
          "Yes, all documents created through MyLegalInstant are legally valid and enforceable. We ensure that every document adheres to the latest legal requirements under Indian law. Whether it's a agreement, or any other legal document, we incorporate necessary clauses and legal language to make the document binding and compliant.",
      },
      {
        question:
          " How does MyLegalInstant protect sensitive information in my documents?",
        answer:
          "We maintain strict confidentiality measures to protect your sensitive information. Our platform is designed to safeguard personal and business data through advanced encryption, secure data servers, and comprehensive privacy policies. We also offer electronic signatures and authentication methods to further enhance document integrity and security.",
      },

      {
        question:
          "How does MyLegalInstant add value to businesses and individuals?",
        answer:
          "MyLegalInstant adds value by simplifying the process of creating and managing legal documents. We save time and costs associated with traditional documentation processes while ensuring legal accuracy. Our platform also offers easy accessibility, allowing you to create, sign, and store documents securely from anywhere, making it a convenient solution for both individuals and businesses.",
      },
      {
        question:
          " How does MyLegalInstant ensure the security of my documents?",
        answer:
          "We take document security seriously. MyLegalInstant uses state-of-the-art encryption technologies to protect your documents during storage and transmission. We also implement robust access controls to ensure only authorized parties can view or modify your documents. Additionally, our platform complies with all relevant data protection laws, including the Information Technology Act, 2000, and industry best practices.",
      },
      {
        question: "Can I track the progress of my documents in real-time?",
        answer:
          "Yes, MyLegalInstant offers real-time tracking of document progress. Whether it's under review, awaiting signatures, or stored securely, you can monitor the status of your documents at any time through our intuitive dashboard.",
      },
      {
        question:
          " How does MyLegalInstant ensure compliance with Indian laws?",
        answer:
          "We stay up-to-date with changes in Indian laws and regulations to ensure that all documents generated through our platform are compliant. Our team of legal experts continuously reviews and updates document templates to reflect current legal standards, ensuring that you are always in line with the law.",
      },
    ],
  },
};

const features = [
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Online Chat Support",
    description:
      "Our team is available to assist you with any queries in real time.",
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Document Tracking",
    description:
      "Stay updated on the status of your documents throughout the drafting process.",
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Secure Document Storage",
    description:
      "Safeguard your important documents with our secure storage solutions.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Lawyers Connect",
    description:
      "Easily connect with qualified legal professionals for additional support.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Smart Contract Management",
    description:
      "Streamline your agreements with our advanced contract management tools.",
  },
  {
    icon: <Stamp className="w-8 h-8" />,
    title: "E-Stamping Services",
    description: "Simplifies the legal stamping process for your convenience.",
  },
];

const AboutPage = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  return (
    <div className=" bg-gradient-to-b from-white to-purple-50 ">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center ">
            <div className="inline-flex   items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              About Us
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {pageContent.hero.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      i === 2
                        ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
                        : ""
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>
              <p className="text-xl font-semibold text-purple-600 mb-4">
                {pageContent.hero.subtitle}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {pageContent.hero.description}
              </p>

              {/* Stats in horizontal layout */}
              <div className="grid grid-cols-3 gap-6">
                {pageContent.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={pageContent.hero.imageUrl}
                  alt="Legal Documentation Platform"
                  className="w-full h-auto rounded-2xl"
                />
                {/* Overlay decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-medium">100% Secure</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-purple-600 font-medium">
                  Expert Support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Vision Section */}
      <section className="py-14 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with improved typography and spacing */}
          <div className="text-center max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
              {pageContent.vision.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At MyLegalInstant.com, we are dedicated to{" "}
              <span className=" text-2xl font-semibold text-purple-600">
                {" "}
                Making India Legally Reliant.
              </span>{" "}
              This guiding principle shapes our approach to legal services and
              reflects our commitment to empowering our users through innovative
              solutions. We believe that everyone should have access to reliable
              legal resources without the traditional barriers often associated
              with legal services
            </p>
          </div>

          {/* Cards with enhanced design and animations */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {pageContent.vision.cards.map((card, index) => (
              <div
                key={index}
                className="group relative text-left  bg-white rounded-2xl border p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute   top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500" />

                {/* Icon with enhanced presentation */}
                <div className="relative mb-6 text-purple-600 flex justify-center items-center w-16 h-16 self-end bg-purple-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Content with improved typography */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.content}</p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="relative py-14 overflow-hidden bg-gray-50">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(100,100,100,.05)_1px,transparent_1px),linear-gradient(150deg,rgba(100,100,100,.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

        {/* Main content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="text-center max-w-6xl mx-auto mb-20">
            <div className="inline-block mb-6 p-2 bg-purple-50 rounded-full">
              <span className="text-purple-600 text-sm font-medium px-4">
                Commitment
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {pageContent.commitment.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {pageContent.commitment.subtitle}
            </p>
          </div>

          {/* Features grid */}
          <div className="flex flex-row lg:flex-row sm:flex-row  justify-between items-center gap-10">
            {/* Main image */}
            <div className="  rounded-3xl overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661749606223-21bc0e512f0d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Commitment Illustration"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {pageContent.commitment.features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl p-4 border bg-white transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl"
                >
                  {/* Content */}
                  <div className="relative">
                    {/* Icon container */}
                    <div className="mb-6 inline-block p-3 bg-purple-50 rounded-xl">
                      <div className="text-purple-600 w-8 h-8">
                        {feature.icon}
                      </div>
                    </div>

                    {/* Text content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Subtle hover indicator */}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Subtle decorative elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-14 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-8 hover:bg-purple-200 transition-colors">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              {pageContent.whyChoose.title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {pageContent.whyChoose.subtitle}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageContent.whyChoose.items.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 text-left rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 shadow-md flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-purple-400" />
              </div> */}

                {/* Animated Border */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[128px] opacity-20 -z-10" />
        <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[128px] opacity-20 -z-10" />
      </section>

      {/* key features */}

      <section className="w-full  bg-gradient-to-b from-white to-purple-50  py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 hover:transform hover:scale-105 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-6 text-black">Key Features</h2>
            <p className="text-black text-lg max-w-2xl mx-auto">
              To enhance your experience, MyLegalInstant.com incorporates
              several cutting-edge features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative border  overflow-hidden rounded-lg text-left  bg-white shadow-md hover:bg-white transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Animated border gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                <div className="p-8 relative  z-10">
                  <div className="relative z-10">
                    <div className="mb-6 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="w-16 h-16  rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50">
                        <div className="text-white transform transition-transform duration-500 group-hover:scale-110">
                          {feature.icon}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-black group-hover:text-purple-500 transition-colors duration-300 transform group-hover:translate-x-2">
                      {feature.title}
                    </h3>

                    <p className="text-black group-hover:text-purple-600 transition-all duration-300 transform group-hover:translate-x-2">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative background gradient */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WelcomeLegalSection />

      {/* FAQ Section */}
      <section className="py-14 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header with decorative elements */}
          <div className="text-center mb-16 relative">
            <div className="inline-block mb-6">
              <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-2 rounded-full">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {pageContent.faqs.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full" />
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {pageContent.faqs.items.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`transform transition-all duration-300 ${
                      expandedFaq === index
                        ? "rotate-180 bg-purple-100 text-purple-600"
                        : "bg-gray-100 text-gray-500"
                    } p-2 rounded-full`}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed text-left">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Add a CTA section at the bottom */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button 
              onClick={() => setShowQuestionForm(true)}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              <Plus size={20} />
              Ask a Question
            </button>
          </div>
        </div>

        <AskQuestionForm 
          isOpen={showQuestionForm}
          onClose={() => setShowQuestionForm(false)}
        />
      </section>
    </div>
  );
};

export default AboutPage;
