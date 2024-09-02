import { ArrowRight } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { logos } from "/src/utils/Logo.js";
import { ArrowUpRight } from "lucide-react";
import { cardsData, cardColors } from "/src/utils/data.js";

function CustomerStores() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop(); // Stops the animation when hovering
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start({ x: ["0%", "-100%"] }); // Resumes the animation when leaving hover
  };

  return (
    <div className="bg-black">
      <div className="p-4 sm:p-8 mx-auto relative flex flex-col lg:flex-row mt-10">
        <div className="max-w-4xl mb-4 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold mb-6 text-left text-balance">
            Trusted by 50,000+ fast‑growing companies
          </h1>
        </div>
        <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8">
          <button className=" text-white text-xl lg:text-2xl font-bold px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center hover:border-white hover:border transition-colors">
            See all customer stories
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="relative z-10 w-full overflow-hidden py-4 sm:py-8">
        <motion.div
          className="flex"
          animate={isHovered ? {} : controls} // Conditional animation based on hover state
          initial={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-20 sm:w-32 lg:w-40 h-10 sm:h-12 lg:h-20 mx-2 sm:mx-4 lg:mx-6 flex items-center justify-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.1 }} // Optional hover effect
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="w-full h-full object-contain text-white"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="p-4 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full sm:w-10/12 mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`relative rounded-lg p-6 shadow-lg transform transition-transform hover:-translate-y-2 duration-300 group space-y-4 lg:space-y-8 ${
              cardColors[index % cardColors.length]
            }`}
          >
            <div className="flex items-center">
              <span className="mr-2">
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 object-cover"
                />
              </span>
            </div>
            <ArrowUpRight className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black" />
            <p className="mt-2 text-xl sm:text-3xl lg:text-4xl font-bold text-black">
              {card.percentage}
            </p>
            <p className="mt-4 text-left text-balance text-lg sm:text-xl lg:text-2xl font-semibold text-black">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerStores;
