import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar Container */}
            <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between md:justify-start md:gap-10">
                
                {/* Left: Hamburger (mobile) or Logo (desktop) */}
                <div className="flex-shrink-0">
                    {/* Hamburger on mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                // Close icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                // Hamburger icon
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Logo on desktop */}
                    <div className="hidden md:block text-xl font-bold text-blue-600">
                        MyProjectDeploy
                    </div>
                </div>

                {/* Center: Nav Links (only visible on desktop) */}
                <div className="hidden md:flex gap-6 text-gray-700 font-medium flex-1 justify-center">
                    <Link to="/Dashboard/Home" className="hover:text-blue-600">Home</Link>
                    <Link to="/Dashboard/Service" className="hover:text-blue-600">Service</Link>
                    <Link to="/Dashboard/About" className="hover:text-blue-600">About</Link>
                    <Link to="/Dashboard/Contact" className="hover:text-blue-600">Contact</Link>
                </div>

                {/* Right: Profile Icon (always visible) */}
                <div className="flex-shrink-0">
                    <Link to="/Dashboard/Account">
                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition duration-200">
                            👤
                        </div>
                    </Link>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md">
                    <Link to="/Dashboard/Home" onClick={() => setIsOpen(false)} className="block text-gray-700">Home</Link>
                    <Link to="/Dashboard/Service" onClick={() => setIsOpen(false)} className="block text-gray-700">Service</Link>
                    <Link to="/Dashboard/About" onClick={() => setIsOpen(false)} className="block text-gray-700">About</Link>
                    <Link to="/Dashboard/Contact" onClick={() => setIsOpen(false)} className="block text-gray-700">Contact</Link>
                </div>
            )}
        </>
    );
}

