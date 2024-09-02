import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const FeatureSection = () => {
  const features = [
    {
      title: "Fast Performance",
      description: "Optimized for quick load times and smooth performance.",
      icon: <FiCheckCircle size={24} />,
      bgColor: "bg-gray-100",
      span: "col-span-2",
    },
    {
      title: "Responsive Design",
      description: "Looks great on both mobile and desktop screens.",
      icon: <FiCheckCircle size={24} />,
      bgColor: "bg-blue-100",
      span: "",
    },
    {
      title: "Secure & Reliable",
      description: "Built with security and reliability in mind.",
      icon: <FiCheckCircle size={24} />,
      bgColor: "bg-green-100",
      span: "",
    },
    {
      title: "Scalable Architecture",
      description: "Easily scales to handle growing traffic.",
      icon: <FiCheckCircle size={24} />,
      bgColor: "bg-yellow-100",
      span: "col-span-2",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md flex items-center ${feature.bgColor} ${feature.span}`}
          >
            <div className="text-blue-500 mr-4">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
