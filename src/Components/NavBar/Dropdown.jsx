import React, { useState } from "react";
import { Link } from "react-router-dom";
import categoryContent from "/src/utils/categoryContent.js"; // Adjust the path as needed

const Dropdown = ({ isOpen }) => {
  const [openCategory, setOpenCategory] = useState(null);

  if (!isOpen) return null;

  const handleCategoryClick = (category) => {
    setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  return (
    <div className="absolute left-0 top-32 z-50 text-black bg-slate-100 p-4 rounded-md w-full max-w-screen-lg h-screen md:h-auto md:top-20 md:left-4 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(categoryContent).map((category) => (
          <div key={category} className="relative flex flex-col">
            <div
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                openCategory === category ? "bg-gray-200" : ""
              }`}
            >
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
            {/* Dropdown for subcategories */}
            {openCategory === category && (
              <div className="absolute left-0 top-full mt-2 bg-slate-100 p-4 rounded-lg shadow-lg z-60 w-full max-w-xs md:max-w-none">
                <ul className="space-y-1 text-sm md:text-base">
                  {categoryContent[category].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.path}
                        className="text-blue-600 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
