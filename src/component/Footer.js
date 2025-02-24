import React from 'react';
import { Link } from 'react-router-dom';
import logof from "../image/logof.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:w-1/3">
          {/* Logo */}
          <div className="mb-6">
            <Link to="/">
              <img src={logof} alt="DALMENT Logo" className="h-12" />
            </Link>
          </div>
          {/* Description */}
          <p className="text-gray-600 text-lg mb-6 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            simply dummy text of the printing and typesetting industry
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              { name: 'instagram', icon: <FaInstagram className="w-5 h-5" />, link: 'https://instagram.com' },
              { name: 'facebook', icon: <FaFacebook className="w-5 h-5" />, link: 'https://facebook.com' },
              { name: 'linkedin', icon: <FaLinkedin className="w-5 h-5" />, link: 'https://linkedin.com' },
              { name: 'twitter', icon: <FaTwitter className="w-5 h-5" />, link: 'https://twitter.com' }
            ].map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="text-white bg-[#045CA6] rounded-full flex items-center justify-center h-10 w-10 transition duration-300 hover:bg-blue-700">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="mb-8 md:mb-0">
          <h3 className="font-bold text-[#045CA6] mb-4 text-xl">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: 'Careers', path: '/' },
              { name: 'Article', path: '/' },
              { name: 'Blogs', path: '/' }
            ].map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-gray-600 hover:text-blue-500 transition duration-300 text-xl">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Product */}
        <div>
          <h3 className="font-bold text-[#045CA6] mb-4 text-xl">Product</h3>
          <ul className="space-y-2">
            {[
              { name: 'Energy', path: '/Energy' },
              { name: 'Chemicals', path: '/Chemicals' },
              { name: 'Metal & Minerals', path: '/Metal' },
              { name: 'Petrochemicals in Bulk', path: '/Petrochemicals' },
              { name: 'Agro commodities', path: '/Agrocommodities' }
            ].map((product) => (
              <li key={product.name}>
                <Link to={product.path} className="text-gray-600 hover:text-blue-500 transition duration-300 text-xl">{product.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
