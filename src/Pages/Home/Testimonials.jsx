import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import {logos} from "/src/utils/Logo.js"
function Testimonials() {
  return (
    <div className="bg-red-50 ">
      <div className=" p-8  mx-auto relative flex mt-10">
        <div className="max-w-4xl">
          <h1 className="lg:text-6xl  font-bold mb-6 text-left text-balance">
          Safe, secure, and legally binding
          </h1>
          <p className="lg:text-2xl font-semibold lg:max-w-xl  mb-8 text-left">
          PandaDoc is E‑SIGN, UETA, HIPAA compliant, and SOC 2 certified, offering secure electronic signatures. It also provides SSO and a robust API for granular document and workspace permissions.
          </p>
        </div>
        <div className="absolute bottom-8 right-8">
          <button className=" text-black text-2xl font-bold px-6 py-3 rounded-full flex items-center hover:border-black hover:border transition-colors">
          Security and compliance
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden py-8 ">
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear'
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 sm:w-40 lg:w-60 h-12 sm:h-14 lg:h-24 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center   "
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

export default Testimonials;
