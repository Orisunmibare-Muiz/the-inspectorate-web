import React, { useState } from 'react'
import logo from '/logo.png'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

                <div className="flex justify-between items-center px-6 md:px-0 md:py-2 py-4 max-w-370 mx-auto">

                    {/* Logo + Brand */}
                    <a href="/" className="flex items-center gap-2">
                        <img className="w-12 md:w-14" src={logo} alt="The Inspectorate Logo" />
                        <h1 className="text-lg md:text-xl font-bold text-red-600">
                            The Inspectorate
                        </h1>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 text-sm font-medium">

                        {["Home", "About us", "Our School Inspection Framework", "Services", "Contact"].map((item, index) => (
                            <a key={index} href="#" className="relative group">
                                {item}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
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
                        ☰
                    </button>

                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="md:hidden bg-white border-t">

                        <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">

                            <a href="#" className="hover:text-red-600">Home</a>
                            <a href="#" className="hover:text-red-600">About us</a>
                            <a href="#" className="hover:text-red-600">Our School Inspection Framework</a>
                            <a href="#" className="hover:text-red-600">Curriculum</a>
                            <a href="#" className="hover:text-red-600">Contact</a>

                            <button className="bg-red-600 text-white px-4 py-2 rounded-md w-full">
                                REQUEST INSPECTION
                            </button>

                        </nav>

                    </div>
                )}

            </header>
        </>
    )
}
