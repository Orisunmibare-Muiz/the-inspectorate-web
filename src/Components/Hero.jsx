import React, { useEffect, useState } from 'react'
import { HeroSlideData } from '../Data/HeroSlideData'
import logoHero from '/logo.png'
import ChooseUs from './ChooseUs'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {

    const [heroSlide, setHeroSlide] = useState(0)

    useEffect(() => {
        const slide = setInterval(() => {
            setHeroSlide((prev) => prev === HeroSlideData.length - 1 ? 0 : prev + 1)
        }, 9000)

        return () => {
            clearInterval(slide)
        }
    }, [HeroSlideData.length])




    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 mt-16">

                {/* Hero Section */}
                <section className="relative h-screen overflow-hidden">

                    {/* Hero Slides */}
                    {HeroSlideData.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1500 ease-in-out
                            ${index === heroSlide ? "opacity-100" : "opacity-0"}`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                    ))}

                    {/* Overlay with content */}
                    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center md:item:start md:justify-start px-6 sm:px-12 lg:px-14 py-16 md:py-24"
                        style={{
                            background: 'linear-gradient(to right, #090024 25%, rgba(255,255,255,0) 100%)'
                        }}>

                        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 5}} viewport={{once: true}}

                            className="max-w-[700px] w-full flex flex-col items-center md:justify-start text-center md:text-left">

                            {/* Logo */}
                            <div className="mb-6">
                                <img src={logoHero} alt="The Inspectorate Logo" className="w-48 sm:w-56 md:w-64 lg:w-100" />
                            </div>

                            {/* Heading/Tagline */}
                            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug letter-fonts-2 md:text-center">
                                PARTNER WITH THE INSPECTORATE FOR QUALITY ASSURANCE AND ENVIABLE SCHOOL GROWTH.
                            </p>

                            <p className='text-[white] text-[18px] font-semibold'>
                                Expert Support for Quality Academic Operations Yielding Enviable Growth.
                            </p>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">

                                <Link to={"/contact"}>
                                    <button className="bg-red-600 text-white px-15 py-3 rounded-md font-semibold hover:bg-red-700 transition w-full sm:w-auto">
                                        Request Partnership
                                    </button>
                                </Link>

                                <Link to={"/about"}>
                                    <button className="border border-red-600 text-red-600 px-15 py-3 rounded-md font-semibold hover:bg-red-50 transition w-full sm:w-auto">
                                        Learn More
                                    </button>
                                </Link>
                            </div>

                        </motion.div>

                    </div>

                </section>


                {/* Framework Section */}
                <motion.div className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16" initial={{opacity: 0, y: 90}} whileInView={{opacity: 1, y:0}} transition={{duration: 2}} viewport={{once: true, amount: 0.5}}>

                    <div className="max-w-7xl mx-auto bg-[#e3e3e3] py-8 sm:py-10 px-4 sm:px-6 lg:px-10 rounded-lg  max-w-370 mx-auto">

                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#01013cf4] text-center mb-8">
                            Our School Inspection Framework
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

                            <div className="p-5 sm:p-6 md:px-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                                <h4 className="text-base sm:text-lg font-semibold text-[#01013cf4]">
                                    🔴 Pedagogical Excellence
                                </h4>
                                <p className="mt-3 text-[#01013cf4] text-sm sm:text-[15px] leading- font-semibold md:ml-7">
                                    Ensuring effective, creative and modern teaching practices and highly improved learning outcomes within a safe, conducive and secure learning environment.
                                </p>
                            </div>

                            <div className="p-5 sm:p-6 md:px-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                                <h4 className="text-base sm:text-lg font-semibold text-[#01013cf4]">
                                    🔴 School Growth
                                </h4>
                                <p className="mt-3 text-[#01013cf4] text-sm sm:text-[15px] leading-relaxed font-semibold md:ml-7">
                                    Ensure learning and communication outcomes that promote student retention and positive references; introduce and promote latest trends in school marketing for unusual growth.
                                </p>
                            </div>

                            <div className="p-5 sm:p-6 md:px-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                                <h4 className="text-base sm:text-lg font-semibold text-[#01013cf4]">
                                    🔴 Administrative Efficiency
                                </h4>
                                <p className="mt-3 text-[#01013cf4] text-sm sm:text-[15px] leading-relaxed font-semibold md:ml-7">
                                    Strengthening school leadership, management systems and operational efficiency with a touch of professionalism.
                                </p>
                            </div>

                            <div className="p-5 sm:p-6 md:px-4 rounded-lg shadow-sm hover:shadow-md transition bg-white">
                                <h4 className="text-base sm:text-lg font-semibold text-[#01013cf4]">
                                    🔴 Rebranded Faculty
                                </h4>
                                <p className="mt-3 text-[#01013cf4] text-sm sm:text-[15px] leading-relaxed font-semibold md:ml-7">
                                    Engage teaching staff with first class professional development programs for highly improved instructional delivery and customer satisfaction.
                                </p>
                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* Core Principle */}
                <ChooseUs />



                {/* Stats Section */}
                <motion.section className="px-12 py-16" initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 5}} viewport={{once: true, amount: 0.5}}>
                    <div className="grid md:grid-cols-3 gap-8 text-center moving-shadow-container max-w-370 z-20 mx-auto">
                        <div className=''>
                            <p className="text-5xl font-bold text-white">25<span className='text-red-500 text-[60px]'>+</span></p>
                            <p className="mt-2 text-[white] font-bold">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-white">60<span className='text-red-500 text-[60px]'>+</span></p>
                            <p className="mt-2 text-[white] font-bold">Schools Reviewed</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold text-white">Trusted</p>
                            <p className="mt-2 text-[white] font-bold">Educational Consultant</p>
                        </div>
                    </div>
                </motion.section>
            </div>
        </>
    )
}
