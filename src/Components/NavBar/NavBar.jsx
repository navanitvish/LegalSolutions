import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { NAV_LINKS } from "/src/utils/Navcontent.js";
import Logo from "/src/assets/WhatsApp Image 2024-09-04 at 17.21.56_f63b6f4c.jpg";
import ServicesDropdown from "../NavBar/ServicesDropdown";

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleServicesDropdown = useCallback(() => {
    setIsServicesOpen((prevState) => !prevState);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      <div className="backdrop-blur-md bg-white/90 p-2 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 transition-transform hover:scale-105 duration-300 ">
              <img 
                src={Logo} 
                alt="MyLegal" 
                className="w-28 h-24 rounded-xl "
              />
            </div>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/"
                    className="text-gray-700 text-lg lg:text-xl font-semibold hover:text-purple-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 after:rounded-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-700 text-lg lg:text-xl font-semibold hover:text-purple-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 after:rounded-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    to="/Services"
                    className="text-gray-700 text-lg lg:text-xl font-semibold hover:text-purple-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 after:rounded-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <ServicesDropdown />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-700 text-lg lg:text-xl font-semibold hover:text-purple-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 after:rounded-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lawyer-contact"
                    className="text-gray-700 text-lg lg:text-xl font-semibold hover:text-purple-600 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 after:rounded-full after:origin-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    Lawyer Connect
                  </Link>
                </li>
              </ul>

              {/* Login Button */}
              <div className="flex items-center">
                <Link to="/login" className="bg-white  lg:text-xl text-purple-600 font-semibold px-6 py-2 rounded-full border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Login
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="px-4 py-3 space-y-3 bg-white/90 backdrop-blur-md border-t">
            {NAV_LINKS.map((link, index) => (
              <li
                key={index}
                className="list-none"
              >
                {link.name === "Services/Agreements" ? (
                  <div className="relative">
                    <button
                      className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                      onClick={toggleServicesDropdown}
                    >
                      <span className="text-sm font-semibold">{link.name}</span>
                      <ChevronDownIcon className="h-5 w-5 ml-2" />
                    </button>
                    {isServicesOpen && <Dropdown isOpen={isServicesOpen} />}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;