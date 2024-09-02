import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";
import { NAV_LINKS } from "/src/utils/Navcontent.js"; // Import the content

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
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsNavVisible(false); // Scroll down
      } else {
        setIsNavVisible(true); // Scroll up
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`z-50 relative text-black px-4 py-3 flex justify-between items-center border-b bg-white transition-transform duration-300 ${
        isNavVisible ? "translate-y-0" : "-translate-y-20"
      }`}
    >
      {/* Logo */}
      <div className="text-4xl font-bold">LegalFirm</div>

      {/* Nav Items */}
      <ul className={`hidden md:flex space-x-6`}>
        {NAV_LINKS.map((link, index) => (
          <li key={index} className="relative py-2 md:py-0 transition hover:text-green-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
            {link.name === "Services/Agreements" ? (
              <>
                <button
                  className="flex items-center space-x-1"
                  onClick={toggleServicesDropdown}
                >
                  <span className="text-[15px] font-semibold hover:text-green-500">
                    {link.name}
                  </span>
                  <ChevronDownIcon className="h-5 w-5" />
                </button>
                {isServicesOpen && <Dropdown isOpen={isServicesOpen} />}
              </>
            ) : (
              <Link
                to={link.path}
                className="text-[15px] font-semibold py-2 md:py-0 transition hover:text-green-500 ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav Items */}
      <ul className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        {NAV_LINKS.map((link, index) => (
          <li key={index} className="relative py-2 md:py-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
            {link.name === "Services/Agreements" ? (
              <>
                <button
                  className="flex items-center space-x-1"
                  onClick={toggleServicesDropdown}
                >
                  <span className="text-[15px] font-semibold hover:text-green-500">
                    {link.name}
                  </span>
                  <ChevronDownIcon className="h-5 w-5" />
                </button>
                {isServicesOpen && <Dropdown isOpen={isServicesOpen} />}
              </>
            ) : (
              <Link
                to={link.path}
                className="py-2 text-[15px] font-semibold hover:text-green-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="md:flex justify-end">
        <button className="border-[1px] border-black hover:text-green-500 text-black font-bold py-2 px-8 rounded hover:animate-bounce">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
