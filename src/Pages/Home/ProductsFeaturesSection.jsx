import React from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Impress buyers with automated quotes tailored just for them",
    description:
      "PandaDoc CPQ software makes it easy to generate error-free quotes that'll close more deals. Pull data directly from your product catalog and implement rules-based pricing strategies to deliver an impressive buyer experience. All with our online CPQ solution.",
    image:
      "https://cdn.dribbble.com/userupload/11534693/file/original-7ee77af4ceb575b236cedcad65016246.png?resize=1504x1128",
  },
  {
    title: "Close deals fast in a digital space that makes collaboration easy",
    description: "",
    image:
      "https://cdn.dribbble.com/userupload/11555404/file/original-b603adcbc82c26429645d143ee550db1.png?resize=1504x1128",
  },
  {
    title: "Eliminate errors with pre-set document creation rules",
    description: "",
    image:
      "https://cdn.dribbble.com/userupload/11012758/file/original-9a489046af009041faa8f65cabda8b7f.png?resize=1504x1128",
  },
  {
    title: "Save time by automating manual and repetitive tasks",
    description: "",
    image:
      "https://cdn.dribbble.com/userupload/13881415/file/original-06b59f92b9f221b574c7ee30081c0622.png?resize=1504x1055",
  },
  {
    title: "Monitor user activity, document performance and more",
    description: "",
    image:
      "https://cdn.dribbble.com/userupload/11634423/file/original-f83aa7acac835efe071aa4d9278012bf.png?resize=1504x1128",
  },
];

const FeatureGrid = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-0 lg:max-w-2xl text-left">
          Designed to make every agreement easier
        </h1>
        <a
          href="#"
          className="text-lg sm:text-xl lg:text-2xl font-bold flex items-center hover:border hover:rounded-full hover:border-black px-4 py-2 text-black"
        >
          See all features{" "}
          <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-purple-100 hover:bg-[#C5BCFF] p-4 sm:p-5 md:p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer relative group ${
              index === 0 ? "col-span-full" : ""
            }`}
          >
            {index === 0 ? (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0 space-y-4 sm:space-y-6 md:space-y-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 text-left text-balance lg:max-w-4xl">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4">
                    {feature.description}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            ) : (
              <>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-left text-balance">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4">
                    {feature.description}
                  </p>
                )}
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-auto rounded"
                  />
                )}
              </>
            )}
            <ArrowUpRight className="absolute top-3 right-3 sm:top-4 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
