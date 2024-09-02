// src/Footer.js

import { Link } from "react-router-dom";
import { footerLinks } from "/src/utils/footerLinks.js"; // Adjust the path based on your folder structure
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-black py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-balance p-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4 hover:text-blue-400">
                {section.heading}
              </h3>
              <ul>
                {section.links.map((link, idx) => (
                  <li key={idx} className="mb-2 group">
                    <Link
                      to={link.path}
                      className="hover:underline hover:text-blue-300 transition duration-200 ease-in-out"
                    >
                      {link.name}
                    </Link>
                    <p className="text-sm text-gray-400 group-hover:text-blue-200 transition duration-200 ease-in-out">
                      {link.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div>
        <div className="flex justify-between  items-center space-y-2 p-2 ">
          <div className="flex flex-wrap gap-4">
           
            <span className="text-xl font-semibold text-black  border-2 py-5 px-6 rounded border-black">
              Google Play Store
            </span>
            <span className="text-xl font-semibold text-black  border-2 py-5 px-6 rounded border-black">
              Google Play Store
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Coca-Cola-logo-500x281-min.png"
              alt=""
               className="w-24 h-14"
            />
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Honeywell-Logo-700x394-min.png"
              alt=""
              className="w-20 h-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
