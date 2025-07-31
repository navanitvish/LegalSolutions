import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from "react-router-dom";

const FAQItem = ({ number, question, content, isOpen, onClick }) => (
  <div
    className={`border border-purple-100 rounded-xl mb-4 overflow-hidden transition-all duration-300 ${isOpen
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
        "Yes, contracts can be executed electronically provided they meet the standards of the indian contract Act of 1872. The document must be legally enforceable and involve consent from all parties involved."
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
    },
    {
      question: "What are the Benefits of E- documentation?",
      content: [
        "Cost and time efficiency reduced paperwork easy storage and retrieval environmentally friendly enhanced safety and compliance improved accessibility and better convenience",
      ],
    },
    {
      question: "What are the limitations of E-documentation?",
      content: [
        "Dependence on technology potential for cyber threats legal complexities in certain jurisdictions need for digital literacy limited acceptance in some sectors",
        
      ],
    },
    {
      question: "What laws govern e-documentation in India ?",
      content:
        [
          "Information Technology Act, 2000: provides the legal framework for electronic records and digital signatures Indian evidence Act, 1872: recognizes electronic records as admissible evidence indian contract act, 1872: governs the legality of contracts executed electronically.",
      

        ],
    },
    {
      question: "Are e - documents admissible as evidence in courts of law ?",
      content:
        "Indeed, the indian evidence Act of 1872 stipulates that electronic records may be admitted as evidence in legal proceedings, provided certain stringent conditions are satisfied.Namely, the authenticity of any corresponding digital signature and integrity of the electronic document must be demonstrable.",

    },

    {
      question: "How does E - documentation impact businesses in India ?",
      content:
        " E - documentation facilitates faster execution of agreements, reduces operational costs, and improves compliance.It is particularly useful in sectors such as banking, finance, and corporate governance.",
    },

    {
      question: "What distinguishes an electronic document from one that has been scanned ?",
      content:
        "A document existing natively in a digital format such as a PDF or Microsoft Word file constitutes an electronic document.Conversely, a scanned document refers to a physical document that has been converted into electronic form through scanning.However, the legal standing of scanned documents may depend more on contextual specifics.",

    },


  ];















  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-10 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-purple-100 text-purple-600 px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            <HelpCircle size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">FAQ Section</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Find answers to common questions about e-documentation and our services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-xl border border-purple-100">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl p-4 sm:p-6 text-white mb-4 sm:mb-6 mt-0 sm:mt-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                <h3 className="text-lg sm:text-xl font-semibold">Need More Help?</h3>
              </div>
              <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base">
                Can't find what you're looking for? Our support team is here to assist you with any questions.
              </p>
              <button className="bg-white text-purple-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors text-sm sm:text-base">
                Contact Support
              </button>
            </div>

            <div className="space-y-4 sm:space-y-6 w-full mt-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Quick Resolution</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Get answers within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Detailed Support</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Comprehensive documentation</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <Link to="https://x.com/mylegalinstant" className="font-medium text-gray-900 text-sm sm:text-base hover:text-purple-600">Join Our Community</Link>
                  <p className="text-gray-600 text-xs sm:text-sm">Connect with our community</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:h-[600px] overflow-y-auto pr-2 sm:pr-4 space-y-3 sm:space-y-4">
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