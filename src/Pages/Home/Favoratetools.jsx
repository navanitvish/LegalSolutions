import React from "react";
import { ArrowRight } from "lucide-react";
import { LOGOS } from "/src/utils/Logo.js";
function Favoratetools() {
  return (
    <div className=" ">
      <div className=" p-8  mx-auto relative flex mt-10">
        <div className="max-w-4xl">
          <h1 className="lg:text-6xl  font-bold mb-6 text-left text-balance">
            Built to integrate with all your favorite tools
          </h1>
        </div>
        <div className="absolute bottom-8 right-8">
          <button className=" text-black text-2xl font-bold px-6 py-3 rounded-full flex items-center hover:border-black hover:border transition-colors">
            See all integrations
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className=" m-8 w-full overflow-hidden py-8  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 ">
          {LOGOS.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              aria-label={logo.name}
              className="flex flex-col items-center space-y-2 p-2 rounded hover:bg-gray-100 transition"
            >
              <logo.icon className="h-12 w-12 text-blue-500" />
              <span className="text-sm font-semibold text-black">
                {logo.name}
              </span>
            </a>
          ))}
        </div>
        {/* <a href="" className="text-xl font-semibold ">
          Want more customization? Explore the API
        </a> */}
      </div>
    </div>
  );
}

export default Favoratetools;
