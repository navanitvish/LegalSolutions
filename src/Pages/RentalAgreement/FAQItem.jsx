
import { ChevronDown } from "lucide-react"; // Import ChevronDown icon or any other as per your setup

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-purple-400 hover:border-purple-200 transition-colors duration-300">
    <button
      className="w-full px-6 py-4 text-left flex justify-between items-center group"
      onClick={onToggle}
    >
      <span className="text-gray-900 text-sm lg:text-lg font-semibold group-hover:text-purple-600 transition-colors duration-300">
        {question}
      </span>
      <ChevronDown
        className={`w-5 h-5 text-purple-600 transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="px-6 py-4 text-gray-600 border-t border-purple-100 text-left">
        {answer}
      </div>
    </div>
  </div>
);

export default FAQItem;