import React from "react";
import { ArrowRight } from "lucide-react";
import { LOGOS } from "/src/utils/Logo.js";

function Favoratetools() {
  return (
    <div className="bg-white">
      <div className="p-4 sm:p-8 mx-auto relative flex flex-col lg:flex-row mt-10">
        <div className="max-w-full lg:max-w-4xl mb-4 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 text-left text-balance">
            Built to integrate with all your favorite tools
          </h1>
        </div>
        <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
          <button className="text-black text-xl lg:text-2xl font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center hover:border-black hover:border transition-colors">
            See all integrations
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="m-4 sm:m-8 w-full overflow-hidden py-4 sm:py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {LOGOS.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              aria-label={logo.name}
              className="flex flex-col items-center space-y-2 p-2 rounded hover:bg-gray-100 transition"
            >
              <logo.icon className="h-10 w-10 sm:h-12 sm:w-12 text-blue-500" />
              <span className="text-xs sm:text-sm font-semibold text-black">
                {logo.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favoratetools;
