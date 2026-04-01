import React from 'react'
import { HeroServiceData, HeroServiceOtherData } from '../Data/HeroServiceData';
import { ventures } from '../Data/HeroServiceData';
import logo from '/logo.png'
import supposedSVG from '/Professional-person .png'
import { Link } from 'react-router-dom';

export default function HeroService() {
    return (
        <>
            <div className="bg-gray-50 relative">

                {/* HERO SECTION */}

                <section
                    className="text-white"
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="hidden sm:block bg-gradient-to-b from-[#10003f] from-15% to-transparent md:bg-gradient-to-r md:from15% py-16 md:py-20 min-h-[60vh] md:h-[70vh]">

                        <div className="max-w-full lg:max-w-370 mx-auto px-6 md:px-0">

                            <h1 className="text-6xl md:text-5xl lg:text-6xl font-bold mt-10 md:mt-14 mb-4">
                                Partnership &{" "}
                                <span className="text-[white]">Venture Services</span>
                            </h1>

                            <p className="font-bold text-[30px] md:text-2xl lg:text-[30px] md:text-gray-200 max-w-xl text-[#ffffff]">
                                Empowering Schools for Lasting Excellence and Growth
                            </p>

                        </div>
                    </div>
                </section>


                {/* IMAGE (ONLY LARGE SCREENS) */}

                <div className="hidden lg:block absolute top-13 -right-1 rounded-[20px]">
                    <img src={supposedSVG} alt="" className="w-179" />
                </div>


                {/* PARTNERSHIP SERVICES */}

                <div
                    className="
                    flex flex-col 
                    lg:flex-row 
                    relative 
                    lg:absolute lg:top-90 lg:left-13.5 
                    max-w-full lg:max-w-370 
                    mx-auto 
                    mt-10 md:mt-16 lg:mt-0
                    "
                >

                    {/* LEFT SIDE */}

                    <section className="w-full lg:max-w-230 mx-auto px-6 py-16 md:py-5 md:bg-gradient-to-b from-[#fffffff5] from-80% to-transparent rounded-[20px]">

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-12 text-center">
                            OUR PARTNERSHIP SERVICES
                        </h2>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            {HeroServiceData.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md p-6 px-5 hover:shadow-lg transition"
                                    >
                                        <Icon className="text-red-600 text-3xl mb-4" />

                                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm">
                                            {service.desc}
                                        </p>
                                    </div>
                                );
                            })}

                        </div>
                    </section>


                    {/* RIGHT SIDE */}

                    <div className="flex flex-col justify-end mt-6 lg:mt-0 px-6 lg:px-0">

                        <div className="w-full grid sm:grid-cols-2 gap-5 py-5">

                            {HeroServiceOtherData.map((props, index) => {
                                const Icon = props.icon;

                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                                    >
                                        {Icon && (
                                            <Icon className="text-red-600 text-3xl mb-4" />
                                        )}

                                        <p className="text-lg md:text-xl font-semibold mb-2">
                                            {props.head}
                                        </p>

                                        <p className="text-gray-600 text-sm">
                                            {props.para}
                                        </p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                </div>



                {/* VENTURES SECTION */}

                <section className="bg-white py-16 md:py-20 mt-16 lg:mt-220">

                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-2xl md:text-3xl font-bold mb-10 md:mb-12 text-center">
                            OUR VENTURES
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">

                            {ventures.map((venture, index) => {
                                const Icon = venture.icon;

                                return (
                                    <div
                                        key={index}
                                        className="flex gap-4 bg-gray-50 p-6 rounded-xl shadow-sm"
                                    >
                                        <Icon className="text-red-600 text-2xl mt-1" />

                                        <div>
                                            <h3 className="font-semibold text-lg">
                                                {venture.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm">
                                                {venture.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* CTA SECTION */}

                <section className="bg-[#090024] text-white py-16">

                    <div className="max-w-4xl mx-auto text-center px-6">

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Partner With The Inspectorate
                        </h2>

                        <p className="text-gray-200 mb-8">
                            We help schools improve academic quality, operational excellence
                            and sustainable institutional growth.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">

                            <Link to={"/contact"}>
                                <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition">
                                    REQUEST PARTNERSHIP
                                </button>
                            </Link>

                            <Link to={"/contact"}>
                                <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1e2f4f] transition">
                                    Contact Us
                                </button>
                            </Link>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}
