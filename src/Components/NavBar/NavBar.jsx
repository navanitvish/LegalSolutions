import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { NAV_LINKS } from "/src/utils/Navcontent.js";
import Logo from "/src/assets/WhatsApp Image 2024-09-04 at 17.21.56_f63b6f4c.jpg";
import ServicesDropdown from "../NavBar/ServicesDropdown";
import { logout } from "../../redux/slices/authSlice"; // Adjust path as needed

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Get user data from Redux store
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const toggleServicesDropdown = useCallback(() => {
    setIsServicesOpen((prevState) => !prevState);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prevState) => !prevState);
  }, []);

  const toggleProfileDropdown = useCallback(() => {
    setIsProfileDropdownOpen((prevState) => !prevState);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setIsProfileDropdownOpen(false);
  };

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

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileDropdownOpen && !event.target.closest('.profile-dropdown')) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileDropdownOpen]);

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
                className="w-24 h-20 rounded-xl "
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

              {/* Login Button or User Profile */}
              <div className="flex items-center">
                {isAuthenticated && user ? (
                  <div className="relative profile-dropdown">
                    <button
                      onClick={toggleProfileDropdown}
                      className="flex items-center space-x-3 px-4 py-2 rounded-full hover:bg-purple-50 transition-all duration-300"
                    >
                      {user.profileImage || user.image || user.avatar ? (
                        <img
                          src={user.profileImage || user.image || user.avatar}
                          alt={user.name || user.username}
                          className="w-10 h-10 rounded-full object-cover border-2 border-purple-600"
                        />
                      ) : (
                        <UserCircleIcon className="w-10 h-10 text-purple-600" />
                      )}
                      <span className="text-gray-700 font-semibold text-lg">
                        {user.name?.slice(0, 8)  || user.username || user.email?.split('@')[0]}
                      </span>
                      <ChevronDownIcon className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-900">
                            {user.name || user.username}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {user.email}
                          </p>
                        </div>
                        <Link
                          to="/profile"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsProfileDropdownOpen(false)}
                        >
                          <UserCircleIcon className="w-5 h-5 mr-3" />
                          My Profile
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to="/signin"
                    className="bg-white lg:text-xl text-purple-600 font-semibold px-6 py-2 rounded-full border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    SignUp
                  </Link>
                )}
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
            {/* Mobile User Profile */}
            {isAuthenticated && user && (
              <div className="px-4 py-3 bg-purple-50 rounded-lg mb-3">
                <div className="flex items-center space-x-3">
                  {user.profileImage || user.image || user.avatar ? (
                    <img
                      src={user.profileImage || user.image || user.avatar}
                      alt={user.name || user.username}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-600"
                    />
                  ) : (
                    <UserCircleIcon className="w-12 h-12 text-purple-600" />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {user.name || user.username}
                    </p>
                    <p className="text-xs text-gray-600">{user.email}</p>
                  </div>
                </div>
              </div>
            )}

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
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}

            <div className="px-4 pt-2 space-y-2">
              {isAuthenticated && user ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center justify-center w-full bg-purple-100 text-purple-600 font-semibold px-6 py-2 rounded-lg hover:bg-purple-200 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <UserCircleIcon className="w-5 h-5 mr-2" />
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block w-full bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;