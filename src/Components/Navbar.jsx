import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const navItems = [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'About', path: '/about' },
        { id: 3, text: 'My Skills', path: '/skills' },
        { id: 4, text: 'My Projects', path: '/projects' },
        { id: 5, text: 'Contact', path: '/contact' },
      
    ];

    return (
        <>
            {/* Fixed Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img src="/img4.jpg" alt="Profile" className="h-10 w-10 rounded-full" />
                        <h1 className="text-xl md:text-2xl font-bold text-green-400">
                            SAQUIB<span className="text-red-500">.</span>
                        </h1>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex space-x-6 items-center">
                        {navItems.map(({ id, text, path }) => (
                            <li key={id}>
                                <Link
                                    to={path}
                                    className="hover:text-green-400 transition duration-200 font-medium"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Icon */}
                    <div className="md:hidden" onClick={() => setMenu(!menu)}>
                        {menu ? <ImCross size={22} /> : <FiMenu size={22} />}
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown */}
            {menu && (
                <div className="md:hidden fixed top-16 left-0 right-0 bg-black text-white shadow-md z-40 transition-all duration-300 ease-in-out">
                    <ul className="flex flex-col space-y-4 py-4 px-6">
                        {navItems.map(({ id, text, path }) => (
                            <li key={id}>
                                <Link
                                    to={path}
                                    onClick={() => setMenu(false)}
                                    className="block text-lg font-medium hover:text-green-400 transition"
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Padding for main content to avoid hiding under navbar */}
            <div className="h-16 md:h-16" />
        </>
    );
}

export default Navbar;
