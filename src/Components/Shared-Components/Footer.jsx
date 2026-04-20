import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="bg-[#090024] text-gray-300 mt-20">

                <div className="max-w-370 mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            THE INSPECTORATE
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            Professional education quality assurance and school inspection
                            services focused on improving institutional standards,
                            leadership effectiveness and sustainable school growth.
                        </p>

                        <p className="mt-4 text-sm italic text-red-400">
                            Quality and Growth Redefined
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="hover:text-red-400 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-red-400 transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/gallery" className="hover:text-red-400 transition">
                                    Gallery
                                </Link>
                            </li>

                            <li>
                                <Link to="/services" className="hover:text-red-400 transition">
                                    Serva
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-red-400 transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Our Services
                        </h3>

                        <ul className="space-y-3">
                            <li>Full School Inspection</li>
                            <li>Training Programs</li>
                            <li>School Management Advisory</li>
                            <li>Education Quality Assurance</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">
                            Contact Information
                        </h3>

                        <ul className="space-y-4">

                            <li className="flex items-start gap-3">
                                <FaEnvelope className="text-red-500 mt-1" />
                                <a href="mailto:info@theinspectorate.com" className="hover:text-red-400 transition">
                                    info@theinspectorate.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaPhoneAlt className="text-red-500 mt-1" />
                                <a href="tel:+2347078058012" className="hover:text-red-400 transition">
                                    +2347078058012
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaWhatsapp className="text-red-500 mt-1" />
                                <a href="tel:09059592823" className="hover:text-red-400 transition">
                                    09059592823
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-red-500 mt-1" />
                                <a href="https://maps.google.com/?q=19B+Mobolaji+Bank+Anthony+Way,+Maryland,+Lagos" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition">    
                                    19B Mobolaji Bank Anthony Way, Maryland, Lagos
                                </a>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

                        <p>
                            © {new Date().getFullYear()} THE INSPECTORATE. All rights reserved.
                        </p>

                        <p>
                            Education Quality Assurance Services
                        </p>

                    </div>
                </div>

            </footer>
        </div>
    )
}
