// src/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '/src/utils/footerLinks.js';  // Adjust the path based on your folder structure

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-balance p-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 hover:text-blue-400">{section.heading}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2 group">
                  <Link 
                    to={link.path} 
                    className="hover:underline hover:text-blue-300 transition duration-200 ease-in-out">
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
  );
};

export default Footer;
