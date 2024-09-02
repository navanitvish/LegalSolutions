import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { logos } from "/src/utils/Logo.js";

function SecuritySection() {
  return (
    <div className="bg-red-50 py-8 mt-8">
      <div className="p-4 sm:p-6 md:p-8 mx-auto relative flex flex-col lg:flex-row items-start lg:items-center mt-8">
        <div className="max-w-full lg:max-w-4xl mb-6 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 text-left text-balance">
            Safe, secure, and legally binding
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold lg:max-w-xl mb-6 lg:mb-8 text-left">
            PandaDoc is E‑SIGN, UETA, HIPAA compliant, and SOC 2 certified, offering secure electronic signatures. It also provides SSO and a robust API for granular document and workspace permissions.
          </p>
        </div>
        <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
          <button className="text-black text-lg sm:text-xl lg:text-2xl font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center border border-transparent hover:border-black transition-colors">
            Security and compliance
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden py-4 sm:py-6 md:py-8">
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: 'linear',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-32 md:w-40 lg:w-60 h-12 sm:h-14 md:h-16 lg:h-24 mx-2 sm:mx-4 md:mx-6 lg:mx-8 flex items-center justify-center"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default SecuritySection;
