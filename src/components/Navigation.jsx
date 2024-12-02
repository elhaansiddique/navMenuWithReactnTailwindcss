import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiX, FiChevronDown } from 'react-icons/fi';
import { RiMenu3Fill } from "react-icons/ri";


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const menuRef = useRef(null);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle menu item click
    const handleMenuClick = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <nav className='bg-white w-full mx-auto top-0 left-0 z-50 shadow-[0_4px_12px_rgba(0,255,0,0.1)] relative'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center px-4 py-2'>
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold">
                            LOGO
                        </Link>
                    </div>

                    <div className='hidden lg:flex text-lg font-normal flex-row space-x-4 items-center justify-center'>
                        <Link to="/" className="hover:text-green-600 transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-green-600 transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-green-600 transition-colors">Contact</Link>
                        <div className="relative group">
                            <span className="cursor-pointer hover:text-green-600 transition-colors flex items-center gap-1">
                                Services
                                <FiChevronDown className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
                            </span>
                            <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded-md py-2 
                                transition-all duration-300 transform whitespace-nowrap 
                                before:content-[''] before:absolute before:top-[-10px] before:left-0 before:right-0 before:h-[10px]">
                                <Link to="/services/webDevelopment" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">
                                    Web Development
                                </Link>
                                <Link to="/services/appDevelopment" className="block px-4 py-2 hover:bg-green-50 hover:text-green-600">
                                    App Development
                                </Link>
                            </div>
                        </div>
                        <Link to="/services/seo" className="hover:text-green-600 transition-colors">SEO</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 hover:bg-green-50 hover:text-green-600 rounded-full transition-colors">
                            <FiSearch className="w-5 h-5" />
                        </button>
                        <button className="p-2 hover:bg-green-50 hover:text-green-600 rounded-full transition-colors">
                            <FiUser className="w-5 h-5" />
                        </button>
                        <button 
                            className="lg:hidden p-2 hover:bg-green-50 hover:text-green-600 rounded-full transition-colors"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                                if (!isMenuOpen) setIsServicesOpen(false);
                            }}
                        >
                            {isMenuOpen ? 
                                <FiX className="w-6 h-6" /> : 
                                <RiMenu3Fill className="w-6 h-6" />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div 
                ref={menuRef}
                className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
            >
                <div className="container mx-auto">
                    <div className="flex flex-col p-4 space-y-3">
                        <Link to="/" className="hover:text-green-600 transition-colors" onClick={handleMenuClick}>
                            Home
                        </Link>
                        <Link to="/about" className="hover:text-green-600 transition-colors" onClick={handleMenuClick}>
                            About
                        </Link>
                        <Link to="/contact" className="hover:text-green-600 transition-colors" onClick={handleMenuClick}>
                            Contact
                        </Link>
                        <div className="relative">
                            <span 
                                className="cursor-pointer hover:text-green-600 transition-colors flex items-center justify-between"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services
                                <FiChevronDown 
                                    className={`w-5 h-5 transform transition-transform duration-300 ${
                                        isServicesOpen ? 'rotate-180' : ''
                                    }`} 
                                />
                            </span>
                            <div 
                                className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                                    isServicesOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <Link to="/services/webDevelopment" className="block hover:text-green-600 transition-colors" onClick={handleMenuClick}>
                                    Web Development
                                </Link>
                                <Link to="/services/appDevelopment" className="block hover:text-green-600 transition-colors" onClick={handleMenuClick}>
                                    App Development
                                </Link>
                            </div>
                        </div>
                        <Link to="/services/seo" className="hover:text-green-600 transition-colors" onClick={handleMenuClick}>
                            SEO
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
