import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';

const FAQItem = ({ number, question, content, isOpen, onClick }) => (
  <div
    className={`border border-purple-100 rounded-xl mb-4 overflow-hidden transition-all duration-300 ${
      isOpen 
        ? "bg-purple-50 shadow-lg" 
        : "bg-white hover:bg-purple-50/50"
    }`}
  >
    <button
      className="flex items-center justify-between w-full p-6 text-left"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span className="flex items-center gap-4">
        <span className="flex items-center justify-center w-8 h-8 text-sm font-medium text-purple-600 bg-purple-100 rounded-lg">
          {number.padStart(2, "0")}
        </span>
        <span className="font-medium text-gray-900">{question}</span>
      </span>
      <span className="flex-shrink-0 ml-4 text-purple-600">
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </span>
    </button>
    {isOpen && (
      <div className="px-6 pb-6 pt-2 text-gray-600">
        <div className="pl-12">{content}</div>
      </div>
    )}
  </div>
);

const FAQComponent = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "What is E-documentation?",
      content:
        "E-documentation refers to the process of creating, executing, and storing legal documents in electronic form, as opposed to physical paper documents."
    },
    {
      question: "Is e-documentation legally valid in India?",
      content:
        "Yes, e-documents are legally valid in India under the Information Technology Act, 2000, which grants legal recognition to electronic records and digital signatures."
    },
    {
      question: "What constitutes an Electronic Record?",
      content:
        "An electronic record encompasses any data, document, or information conceived, retained, or transmitted in a digital format. It can involve emails, scanned papers, as well as other digital files."
    },
    {
      question: "Can contracts be finalized electronically in India?",
      content:
        "Yes, contracts can be executed electronically provided they meet the standards of the Indian Contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved."
    },
    {
      question: "How secure is e-documentation?",
      content:
        "To ensure the authenticity and confidentiality of e-documentation, encryption, access monitoring, and electronic signatures are employed. According to Indian law, digital signatures are mandated for specific legal documents to heighten security."
    },
    {
      question: "What is an electronic signature or digital signature?",
      content:
        "An electronic signature or digital signature is a form of signature used to authenticate electronic documents. It ensures that the document has not been altered after signing and verifies the identity of the signer."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-6">
            <HelpCircle size={20} />
            <span className="font-medium">FAQ Section</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about e-documentation and our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white h-[470px] rounded-2xl p-8 shadow-xl border border-purple-100">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-6 text-white mb-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={24} />
                <h3 className="text-xl font-semibold">Need More Help?</h3>
              </div>
              <p className="text-purple-100 mb-6">
                Can't find what you're looking for? Our support team is here to assist you with any questions.
              </p>
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Contact Support
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Quick Resolution</h4>
                  <p className="text-gray-600 text-sm">Get answers within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Detailed Support</h4>
                  <p className="text-gray-600 text-sm">Comprehensive documentation</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Join Our Community</h4>
                  <p className="text-gray-600 text-sm">Connect with our community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-[600px] overflow-y-auto pr-4 space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                number={`${index + 1}`}
                question={item.question}
                content={item.content}
                isOpen={openItem === index}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;