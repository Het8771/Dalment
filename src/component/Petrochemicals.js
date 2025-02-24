import React, { useState, useEffect } from 'react';
import back2 from "../image/back2.svg";
import logo from "../image/logo.png";
import petro from "../image/petro.svg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const OverviewCard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLogisticsOpen, setMobileLogisticsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
      if (!e.target.closest('.dropdown-menu') && !e.target.closest('.header-dropdown-button')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', closeMenu);
    return () => document.removeEventListener('mousedown', closeMenu);
  }, [isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  const productItems = [
    { name: 'Energy', link: '/energy' },
    { name: 'Chemicals', link: '/chemicals' },
    { name: 'Metal & Minerals', link: '/Metal' },
    { name: 'Petrochemicals in Bulk', link: '/petrochemicals' },
    { name: 'Agrocommodities', link: '/Agrocommodities' },
    { name: 'Food & Feed Ingredients', link: '/Food' },
    { name: 'Bio & Pharma sciences', link: '/Bio' },
    { name: 'Machineries & Equipment', link: '/Machineries' }
  ];

  const serviceItems = [
    { name: 'Recycleling Solutions', link: '/RecyclelingSolutions' },
  ];

  const logisticsItems = [
    { name: 'Shipping CHarting & Barge Service', link: '/Shipping' },
    { name: 'Storage Terminal, Bleninigin & Drumming Facilities', link: '/Storage' },
    { name: 'Port Cargo Handling Service', link: '/Port' },
    { name: 'Transport and Logistics service', link: '/Transport' },
  ];

  return (
    <>
      <header
        className="relative bg-center h-[400px] object-cover text-white"
        style={{ backgroundImage: `url(${back2})` }}
      >
        <div className="absolute inset-0 bg-[#045CA6] opacity-70"></div>
        <div className="container mx-auto relative z-10 px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link to="/"><img src={logo} alt="DALMENT Logo" className="h-8 md:h-12" /></Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 top-full left-0">
              <DropdownMenu
                title="Product"
                items={productItems}
                isActive={activeDropdown === 'product'}
                setActive={() => setActiveDropdown('product')}
                id="product"
              />
              <DropdownMenu
                title="Services"
                items={serviceItems}
                isActive={activeDropdown === 'services'}
                setActive={() => setActiveDropdown('services')}
                id="services"
              />
              <DropdownMenu
                title="Logistics"
                items={logisticsItems}
                isActive={activeDropdown === 'logistics'}
                setActive={() => setActiveDropdown('logistics')}
                id="logistics"
              />
              <Link to="/Contactus">Contact Us</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white focus:outline-none menu-button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 bottom-0 w-full bg-white transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50 mobile-menu`}>
          <div className="p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-800 float-right">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="clear-both"></div>

            {/* Mobile Menu Links - From Dropdowns */}
            <MobileDropdown
              title="Product"
              items={productItems}
              isOpen={mobileProductOpen}
              setOpen={setMobileProductOpen}
            />
            <MobileDropdown
              title="Services"
              items={serviceItems}
              isOpen={mobileServicesOpen}
              setOpen={setMobileServicesOpen}
            />
            <MobileDropdown
              title="Logistics"
              items={logisticsItems}
              isOpen={mobileLogisticsOpen}
              setOpen={setMobileLogisticsOpen}
            />

            <Link to="/Contactus" className="block text-gray-800 py-2">Contact Us</Link>

          </div>

        </div>
        {/* Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
        )}

        {/* Energy Text */}
        <div className="flex justify-center items-center h-full absolute top-0 left-0 w-full p-4 sm:p-6 md:p-8">
  <h1 className="text-white text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-center leading-tight">
    PETROCHEMICALS IN BULK
  </h1>
</div>
      </header>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Overview Section */}
        <div className="flex flex-col md:flex-row items-center bg-white p-4 md:p-10">
          {/* Image Section */}
           <div className="relative w-full md:w-1/2 flex justify-center items-center">
              <div className="absolute w-[47%] h-[87%] bg-[#045CA6]  mr-[35%]  md:left-auto md:top-0 md:-left-10 "></div>
              <img src={petro} alt="Overview" className="relative w-[70%] md:w-[55%] h-auto z-10  shadow-md mt-[10%] mb-[20%]" />
            </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-[#045CA6] text-3xl md:text-4xl font-bold mb-4 md:mb-8 underline text-left">OVERVIEW</h1>
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries but also the leap.
            </p>
            <p className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries but also the leap.
            </p>
            <button className="bg-[#045CA6] mt-4 md:mt-8 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center gap-2 border-2 border-[#045CA6] hover:bg-transparent hover:text-[#045CA6] text-sm md:text-base">
              <span>Read More</span>
              <span className="text-lg">&#8594;</span>
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-center ">
      <div className="bg-white  overflow-hidden  w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Form */}
          <div className="p-8 lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#045CA6] mb-2 sm:mb-3 lg:mb-7 relative inline-block">
              GET IN TOUCH
              <span className="absolute bottom-[-4px] sm:bottom-[-6px] lg:bottom-[-8px] left-1/2 transform -translate-x-1/2 w-10 sm:w-12 lg:w-16 h-[2px] sm:h-[3px] bg-[#045CA6]"></span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto text-gray-600 mt-3 sm:mt-4 lg:mt-6 ml-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <br />
            <form>
  <div className="mb-4">
    <label htmlFor="fullName" className="block text-black-700 text-sm mb-2">
      Full Name
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      </div>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Enter Your Full Name"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 pl-10 text-sm"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-black-700 text-sm mb-2">
      Email
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>
      </div>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter Your Email Address"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 pl-10 text-sm"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="mobile" className="block text-black-700 text-sm mb-2">
      Mobile Number
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      </div>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        placeholder="Enter Your Mobile Number"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-300 pl-10 text-sm"
        required
      />
    </div>
  </div>

  <div className="mb-4">
    <label htmlFor="message" className="block text-black-700 text-sm mb-2">
      Message
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-gray-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
        </svg>
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Enter Your Message"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 border-gray-300 pl-10 text-sm"
        required
      ></textarea>
    </div>
  </div>

  <div className="flex items-center justify-center">
    <button className="bg-[#045CA6] hover:bg-blue-700 text-white py-3 px-4 w-full rounded focus:outline-none focus:shadow-outline text-sm" type="submit">
      Send Message
    </button>
  </div>
</form>
 </div>

          {/* Right Side - Contact Info */}
          <div className="bg-[#045CA6] text-white p-8 lg:w-1/2 flex flex-col justify-start relative ">
            {/*<div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <svg
                className="absolute top-0 left-0"
                width="100%"
                height="100%"
                viewBox="0 0 400 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H400V600L0 400V0Z"
                  fill="#045CA6"
                  opacity="0.8"
                />
              </svg>
            </div>*/}
            <div className="bg-white p-12 relative z-10 lg:absolute mt-52 ml-[-80px] w-50 h-60 mb-20">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#045CA6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.913A2.25 2.25 0 012.25 7.007V6.75m19.5 0h-19.5" />
                </svg>
                <span className="text-sm text-gray-700 ">xyztechnology04@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#045CA6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                <span className="text-sm text-gray-700">+91 83000 00042</span>
              </div>
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 text-[#045CA6]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-gray-700">B-8, 210, Township-2 Sarthana Jakatnaka, Surat Gujarat 395006</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

function DropdownMenu({ title, items, isActive, setActive, id }) {
  return (
    <div
      className="relative hidden lg:block" // Hide on mobile, show on desktop
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive(null)}
    >
      <button className="flex items-center hover:text-yellow-400 transition-colors header-dropdown-button">
        {title} <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`absolute bg-white text-gray-800 shadow-md mt-2 py-2 rounded dropdown-menu ${isActive ? 'block' : 'hidden'} z-20`}>
        {items.map((item, index) => (
          <a key={index} href={item.link} className="block px-4 py-2 hover:bg-gray-100">{item.name}</a>
        ))}
      </div>
    </div>

  );
}

function MobileDropdown({ title, items, isOpen, setOpen }) {
  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between w-full text-gray-800 py-2 font-semibold"
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transform ${isOpen ? 'rotate-180' : ''} transition-transform duration-200`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} ml-4`}>
        {items.map((item, index) => (
          <Link key={index} to={item.link} className="block text-gray-800 py-2">{item.name}</Link>
        ))}
      </div>
    </div>

  );
}

export default OverviewCard;