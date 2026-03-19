import React, { useState } from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About us", path: "/" },
        { name: "Our School Inspection Framework", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

            <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-0">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */} 
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src={logo}
                            alt="The Inspectorate Logo"
                            className="w-10 sm:w-12"
                        />
                        <h1 className="text-base sm:text-lg font-bold text-red-600">
                            The Inspectorate
                        </h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">

                        {menuItems.map((props, index) => (
                            <Link
                                key={index}
                                to={props.path}
                                className="relative group"
                            >
                                {props.name}

                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                    </nav>

                    {/* Desktop CTA */}
                    <button className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                        REQUEST PARTNERSHIP
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-2xl"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="md:hidden bg-white border-t">

                    <div className="flex flex-col px-4 py-4 space-y-4 text-sm font-medium">

                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                className="hover:text-red-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}

                        <button className="bg-red-600 text-white px-4 py-2 rounded-md w-full">
                            REQUEST INSPECTION
                        </button>

                    </div>

                </nav>
            )}

        </header>
    );
}