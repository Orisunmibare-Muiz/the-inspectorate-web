import React from 'react'
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaClock,
    FaSearch,
    FaCalendarAlt,
    FaHandshake
} from "react-icons/fa";

export default function ContactSession() {
    return (
        <>
            <div className="bg-gray-50">

                {/* HERO-CONTACT */}

                <section className="bg-[#090024] text-white py-16">
                    <div className="max-w-full lg:max-w-370 mx-auto px-6 text-center">

                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            CONTACT THE INSPECTORATE
                        </h1>

                        <p className="text-gray-200 max-w-2xl mx-auto">
                            We are available to support your school’s growth, compliance and excellence.
                        </p>

                    </div>
                </section>


                {/* CONTACT SECTION */}

                <section className="max-w-full lg:max-w-370 mx-auto px-6 py-16">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* LEFT SIDE */}

                        <div className="space-y-5">

                            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>

                            <ContactCard
                                icon={FaMapMarkerAlt}
                                title="Office Address"
                                text="19B Mobolaji Bank Anthony Way, Maryland, Lagos"
                            />

                            <ContactCard
                                icon={FaPhoneAlt}
                                title="Phone"
                                text="+2347078058012"
                            />

                            <ContactCard
                                icon={FaWhatsapp}
                                title="WhatsApp"
                                text="09059592823"
                            />

                            <ContactCard
                                icon={FaEnvelope}
                                title="Email"
                                text="info@theinspectorate.com"
                            />

                            <ContactCard
                                icon={FaClock}
                                title="Business Hours"
                                text="Monday – Friday, 7:30am – 4:00pm"
                            />

                        </div>


                        {/* RIGHT SIDE FORM */}

                        <div className="bg-white p-6 rounded-xl shadow-md">

                            <h2 className="text-2xl font-bold mb-6">
                                Send Us a Message
                            </h2>

                            <form className="space-y-4">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <input
                                    type="text"
                                    placeholder="School Name"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <select className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <option>Select Service</option>
                                    <option>School Inspection</option>
                                    <option>Training</option>
                                    <option>Full Management</option>
                                    <option>Consultation</option>
                                </select>

                                <textarea
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                ></textarea>

                                <button className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition">
                                    Request Consultation
                                </button>

                            </form>

                        </div>

                    </div>

                </section>


                {/* QUICK ACTIONS */}

                <section className="max-w-full lg:max-w-370 mx-auto px-6 pb-10">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <ActionCard
                            icon={FaSearch}
                            title="Request Inspection"
                        />

                        <ActionCard
                            icon={FaCalendarAlt}
                            title="Book Consultation"
                        />

                        <ActionCard
                            icon={FaHandshake}
                            title="Partner With Us"
                        />

                    </div>

                </section>


                {/* MAP */}

                <section className="max-w-full lg:max-w-370 mx-auto px-6 pb-16">

                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe
                            title="map"
                            src="https://maps.google.com/maps?q=Maryland%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-[300px] border-0"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                </section>


                {/* CTA */}

                <section className="bg-[#090024] text-white py-12">

                    <div className="max-w-full lg:max-w-370 mx-auto px-6 text-center">

                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Let’s Build a Better School System Together
                        </h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">

                            <button className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition">
                                <FaWhatsapp /> Contact via WhatsApp
                            </button>

                            <button className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1e2f4f] transition">
                                <FaEnvelope /> Send Email
                            </button>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}

/* ACTION CARD */

function ActionCard({ title }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition cursor-pointer">

            <p className="font-semibold">{title}</p>

        </div>
    );
}




function ContactCard({ icon: Icon, title, text }) {
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm flex gap-4 items-start">

            {Icon && <Icon className="text-red-600 text-xl mt-1" />}

            <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{text}</p>
            </div>

        </div>
    );
}
