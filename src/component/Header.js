import React, { useState, useEffect } from 'react';
import logo from "../image/logo.png";
import back from "../image/back.svg";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
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
        { name: 'Storage Terminal,Bleningin & Drumming Facilities', link: '/Storage' },
        { name: 'Port Cargo Handling Service', link: '/Port' },
        { name: 'Transport and Logistics service', link: '/Transport' },
    ];

    return (
        <header className="relative bg-cover bg-center h-screen text-white"
                style={{ backgroundImage: `url(${back})` }}>
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
                {/* Hero Content */}
                <div className="container mx-auto relative z-10 mt-10 md:mt-20 px-4 md:px-0">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-0">
                        <div className="text-left w-full md:w-1/2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-0">
                                END-TO-END <br /><span className="text-yellow-400">PROJECT LOGISTIC</span>
                            </h1>
                        </div>
                        <div
                            className="flex flex-wrap justify-start justify-end  mr-50 space-x-4 items-center mt-4 md:mt-0 w-full md:w-1/2">
                            <a href="#" className="text-white hover:text-yellow-300 text-sm md:text-base lg:text-lg">
                                Tracking
                            </a>
                            <a href="#" className="text-white hover:text-yellow-300 text-sm md:text-base lg:text-lg">
                                Feedback
                            </a>
                            <a href="#" className="text-white hover:text-yellow-300 text-sm md:text-base lg:text-lg">
                                Request quote
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col text-white relative mt-8 md:mt-0 w-full md:w-1/2 lg:w-[42%] md:ml-auto">
                        <div className="flex space-x-2 items-center">
                            <FaMapMarkerAlt className="text-white text-lg md:text-xl opacity-50"/>
                            <input
                                type="text"
                                placeholder="Enter B/L, Container or Booking Number"
                                className="bg-transparent text-white text-sm md:text-base opacity-50 focus:outline-none placeholder-white w-full"
                            />
                        </div>
                        <div className="border-b border-white mt-2 w-full opacity-50"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

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

export default Header;
