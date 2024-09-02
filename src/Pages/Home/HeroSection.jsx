import { motion } from "framer-motion";
import { logos } from "/src/utils/Logo.js";

const HeroSection = () => {
  return (
    <div className="hero-section relative w-full bg-white min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background beams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-full h-[500px] bg-gradient-to-r from-green-200 to-transparent opacity-50`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(<span class="math-inline">\{Math\.random\(\) \* 360\}deg\) scale\(</span>{
              Math.random() * 0.2 + 1
            })`,
              animation: `beam ${Math.random() * 5 + 5}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-[70px] font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
          Make proposals
          <br className="hidden sm:inline" /> that make impressions
        </h1>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-600 max-w-2xl mx-auto">
          Stand out with the top-rated solution for creating, managing,
          tracking, and eSigning every important document you handle.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="w-full sm:w-auto bg-green-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-green-700 transition duration-300 text-base sm:text-lg">
            Request a demo
          </button>
          <button className="w-full sm:w-auto bg-white text-gray-800 font-semibold py-3 px-6 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300 text-base sm:text-lg">
            Start free 14-day trial
          </button>
        </div>
        <p className="mt-4 text-sm text-gray-500">No credit card required</p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative z-10 w-full overflow-hidden py-8">
        <motion.div
          className="flex animate-scroll"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 sm:w-40 lg:w-48 h-12 sm:h-14 lg:h-16 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center"
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
};

const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .animate-scroll {
    animation: scroll 30s infinite linear;
  }

  @keyframes beam {
    0% {
      transform: translateX(0) translateY(0) scale(1);
    }
    50% {
      transform: translateX(50px) translateY(50px) scale(1.2);
    }
    100% {
      transform: translateX(0) translateY(0) scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-scroll, .beam {
      animation: none;
    }
  }
`;

export default function HeroSectionWithStyles() {
  return (
    <>
      <style>{styles}</style>
      <HeroSection />
    </>
  );
}
