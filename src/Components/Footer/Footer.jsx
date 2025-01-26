import React from 'react';
import { Link } from "react-router-dom";
import { footerLinks } from "/src/utils/footerLinks.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50">
      {/* Main footer section */}
      <footer className="pt-16 pb-8">
        <div className="container mx-auto px-6">
          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            {footerLinks.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 tracking-wide">
                  {section.heading}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="group">
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                      <p className="text-sm text-gray-400 mt-1 group-hover:text-blue-500 transition-colors duration-200">
                        {link.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* App Stores & Partners Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">GET IT ON</span>
                    <span className="font-medium">Google Play</span>
                  </div>
                </button>
                <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                  <FontAwesomeIcon icon={faApple} className="text-2xl" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on the</span>
                    <span className="font-medium">App Store</span>
                  </div>
                </button>
              </div>

              {/* Partner Logos */}
              <div className="flex items-center space-x-8">
                <img
                  src="/api/placeholder/120/60"
                  alt="Partner 1"
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                <img
                  src="/api/placeholder/120/60"
                  alt="Partner 2"
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-500 text-sm">
                © 2024 PandaDoc Inc. All rights reserved.
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-8">
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                  Privacy Notice
                </Link>
                <Link to="/legal" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                  Legal
                </Link>
                <Link to="/cookie-settings" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                  Cookie Settings
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;