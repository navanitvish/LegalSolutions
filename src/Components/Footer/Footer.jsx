// src/Footer.js

import { Link } from "react-router-dom";
import { footerLinks } from "/src/utils/footerLinks.js"; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faApple } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-black py-12">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-balance p-8">
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
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
          <div className="flex flex-wrap gap-4 mb-4 lg:mb-0">
            <span className="text-xl font-semibold text-black border-2 py-3 px-6 rounded border-black">
              <FontAwesomeIcon icon={faGooglePlay} /> Google Play Store
            </span>
            <span className="text-xl font-semibold text-black border-2 py-3 px-6 rounded border-black">
              <FontAwesomeIcon icon={faApple} /> Apple App Store
            </span>
          </div>
          <div className="flex gap-4 mb-4 lg:mb-0">
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Coca-Cola-logo-500x281-min.png"
              alt="Coca-Cola"
              className="w-24 h-auto"
            />
            <img
              src="https://logomak.com/blog/wp-content/uploads/2023/09/Honeywell-Logo-700x394-min.png"
              alt="Honeywell"
              className="w-20 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-600">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
          <div>
            <p>© 2024 PandaDoc Inc. All rights reserved.</p>
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0">
            <Link to="/privacy" className="hover:text-blue-500">Privacy notice</Link>
            <Link to="/legal" className="hover:text-blue-500">Legal</Link>
            <Link to="/cookie-settings" className="hover:text-blue-500">Cookie settings</Link>
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-400">
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
