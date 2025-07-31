import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-800">MyLegalInstant</h3>
            <p className="text-gray-600 mb-6">
              Your trusted partner for quick and reliable legal solutions. We make legal assistance accessible to everyone.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=100091639333112" target="_blank" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://x.com/mylegalinstant"  target="_blank" className="text-purple-600 hover:text-purple-800 transition-colors">
                <BsTwitterX size={22} />
              </a>
              <a href="https://www.instagram.com/mylegalinstant?igsh=emU2ZWpncmdpNTNq" target="_blank" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.linkedin.com/in/my-legal-instant-a220a8204?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-purple-600 hover:text-purple-800 transition-colors">
                <Linkedin size={22} />
              </a>
            </div>
            
            {/* App Store Links with actual images */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a href="#" className="hover:opacity-90 transition duration-300 w-40">
                <img 
                  src="https://cdn.pixabay.com/photo/2021/09/22/16/07/google-play-6647242_1280.png" 
                  alt="Play Store" 
                  className="h-26 w-full object-contain"
                />
              </a>
              <a href="#" className="hover:opacity-90 transition duration-300 w-40">
                <img 
                  src="https://www.svgrepo.com/download/303128/download-on-the-app-store-apple-logo.svg" 
                  alt="Apple Store" 
                  className="h-30 w-full object-contain"
                />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-800">Quick Links</h3>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-gray-600 hover:text-purple-700 transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="text-gray-600 hover:text-purple-700 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/Services" className="text-gray-600 hover:text-purple-700 transition-colors">Services</NavLink></li>
              <li><NavLink to="/products" className="text-gray-600 hover:text-purple-700 transition-colors">Products</NavLink></li>
              <li><NavLink to="/lawyer-contact" className="text-gray-600 hover:text-purple-700 transition-colors">Lawyer Connect</NavLink></li>
              <li><NavLink to="/team" className="text-gray-600 hover:text-purple-700 transition-colors">Team</NavLink></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-800">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">legal consultation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Consultation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Document Review</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Contract drafting </a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">Start-up Compliance</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-700 transition-colors">E-stamp paper delivery</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-purple-800">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">MIG, Mayuri Nagar, Hyderabad, <br />Telangana,500049</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-purple-600 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-gray-600 hover:text-purple-700">
                 +91 912-103-7327
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-purple-600 flex-shrink-0" />
                <a href="mailto:info@mylegalinstant.com" className="text-gray-600 hover:text-purple-700">
                  info@mylegalinstant.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter Subscription */}
      <div className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-semibold text-purple-800">Subscribe to Our Newsletter</h4>
              <p className="text-gray-600">Stay updated with legal tips and our services</p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-white py-6 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {currentYear} MyLegalInstant. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-700 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}