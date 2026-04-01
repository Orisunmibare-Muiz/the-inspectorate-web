import React, { useState } from 'react'
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
    // Form state variables
    const [formData, setFormData] = useState({
        name: '',
        schoolName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // (formSpree) Logic to send form to Email

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default refresh 
        console.log("form submitted");

        // Validate form
        if (!formData.name || !formData.email || !formData.phone) {
            alert('Please fill in all required fields');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('https://formspree.io/f/xlgobbnq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    schoolName: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form', error);
            alert('Error submitting form. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            <div className="bg-gray-50 mt-16">

                {/* HERO-CONTACT */}

                <section className="bg-[#090024] text-white py-5">
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
                                text="Monday – Friday, 7:00am – 4:30pm"
                            />

                        </div>


                        {/* RIGHT SIDE FORM */}

                        <div className="bg-white p-6 rounded-xl shadow-md">

                            <h2 className="text-2xl font-bold mb-6">
                                Send Us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="School Name"
                                    value={formData.schoolName}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />

                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <option value="">Select Service</option>
                                    <option value="School Inspection">School Inspection</option>
                                    <option value="Training">Training</option>
                                    <option value="Full Management">Full Management</option>
                                    <option value="Consultation">Consultation</option>
                                </select>

                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                ></textarea>

                                <button type='submit' disabled={isLoading} className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition disabled:bg-gray-400">
                                    {isLoading ? 'Sending...' : 'Request Consultation'}
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

                            <a href='https://wa.me/2348088626755' className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 rounded-md hover:bg-green-700 transition">
                                <FaWhatsapp /> Contact via WhatsApp
                            </a>

                            <a href="mailto:orismuiz2003@gmail.com" className="flex items-center justify-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1e2f4f] transition">
                                    <FaEnvelope /> Send Email
                            </a>

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
