import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { logos } from "/src/utils/Logo.js";

function SecuritySection() {
  return (
    <div className="bg-purple-50 py-8 mt-8">
      <div className="p-4 sm:p-6 md:p-8 mx-auto relative flex flex-col lg:flex-row items-start lg:items-center mt-8">
        <div className="max-w-full lg:max-w-4xl mb-6 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-left text-balance text-purple-900">
            Document Security & Legal Compliance
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium lg:max-w-xl mb-6 lg:mb-8 text-left text-purple-800">
            Our platform ensures your documentation meets global legal standards with industry-leading security protocols. Featuring advanced encryption, tamper-proof audit trails, and secure version control for complete document integrity.
          </p>
        </div>
        <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
          <button className="bg-purple-600 text-white text-lg sm:text-xl lg:text-2xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center border border-transparent hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl">
            Documentation Standards
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}

export default SecuritySection;