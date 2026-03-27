import React from 'react'
import { FaCheckCircle, FaSchool, FaAward } from "react-icons/fa"
import CEO from '/Professional-person .png'

export default function AboutSectionOne() {
    return (
        <>
            <section className="bg-gray-50 py-16">

                <div className="max-w-full lg:max-w-370 mx-auto px-6">

                    {/* HEADER */}
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                        About the Chief Inspector/CEO
                    </h2>


                    {/* MAIN CARD */}
                    <div className="bg-white rounded-2xl shadow-md p-6 md:p-10">

                        <div className="grid lg:grid-cols-3 gap-8">

                            {/* LEFT IMAGE */}
                            <div className="lg:col-span-1">
                                <img
                                    src={CEO} // replace with actual image
                                    alt="Uwem Ekpo"
                                    className="rounded-xl w-full object-cover"
                                />

                                <div className="mt-4 bg-gray-100 p-4 rounded-xl text-center">
                                    <h3 className="text-xl font-bold">Uwem Ekpo</h3>
                                    <p className="text-gray-600 text-sm">
                                        Chief School Inspector <br /> & Education Consultant
                                    </p>
                                </div>
                            </div>


                            {/* RIGHT CONTENT */}
                            <div className="lg:col-span-2 space-y-6">

                                <div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        Uwem Ekpo
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        Uwem Ekpo is a seasoned and highly experienced Education Business Management Professional with 25+ years experience in Educational Management.
                                    </p>

                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        An education graduate from the University of Ilorin, his experience spans across years of teaching, supervision, school management and development.
                                    </p>

                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                       His experience has seen him work as an English Language Teacher, Vice Principal, Principal, Regional Manager (Education Management), School Inspector, Consultant and Quality Assurance Expert.
                                    </p>

                                    <p className="text-gray-600 mt-3 leading-relaxed">
                                        He is very passionate about quality, excellence and school growth.
                                    </p>
                                </div>


                                {/* EXPERTISE */}
                                <div className="bg-gray-50 p-5 rounded-xl">
                                    <h4 className="font-semibold mb-3">
                                        My Key Areas of Expertise:
                                    </h4>

                                    <ul className="space-y-2 text-gray-600">

                                        <li className="flex items-center gap-2">
                                            <FaCheckCircle className="text-red-600" />
                                            Academic Excellence Strategy  and Systems
                                        </li>

                                        <li className="flex items-center gap-2">
                                            <FaCheckCircle className="text-red-600" />
                                            Leadership and Staff Development
                                        </li>

                                        <li className="flex items-center gap-2">
                                            <FaCheckCircle className="text-red-600" />
                                            School Growth Mechanisms
                                        </li>

                                    </ul>
                                </div>


                                {/* STATS */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                    <StatCard
                                        icon={FaAward}
                                        title="Experienced Leadership"
                                        text="23+ years in education including leadership roles in private schools."
                                    />

                                    <StatCard
                                        icon={FaSchool}
                                        title="Private School Expertise"
                                        text="Extensive experience working with private educational institutions."
                                    />

                                    <StatCard
                                        icon={FaCheckCircle}
                                        title="Certified Expertise"
                                        text="Professional certifications in inspection, compliance and school development."
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* QUOTE + CTA */}
                    <div className="mt-12 bg-white rounded-2xl shadow-md p-6 md:p-10 grid lg:grid-cols-2 gap-8 items-center">

                        {/* TEXT */}
                        <div>

                            <p className="text-xl md:text-2xl italic text-gray-700 mb-4">
                                “Quality education is not inspected into existence,
                                it is built through systems.”
                            </p>

                            <p className="text-gray-600">
                                Driven by this philosophy, Uwem Ekpo is committed to helping schools
                                achieve sustainable growth through structured systems, strong leadership,
                                and continuous quality improvement.
                            </p>

                            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
                                REQUEST PARTNERSHIP
                            </button>

                        </div>


                        {/* IMAGE */}
                        <div>
                            <img
                                src="/ceo-2.jpg" // replace
                                alt=""
                                className="rounded-xl w-full object-cover"
                            />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

/* STAT CARD */

function StatCard({ icon, title, text }) {
    return (
        <div className="bg-gray-50 p-4 rounded-xl flex gap-3">

            {icon({ className: "text-red-600 text-xl mt-1" })}

            <div>
                <h4 className="font-semibold text-sm">
                    {title}
                </h4>
                <p className="text-gray-600 text-xs">
                    {text}
                </p>
            </div>

        </div>
    )
}


