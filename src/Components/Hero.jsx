import React, { useEffect, useState } from 'react'
import { HeroSlideData } from '../Data/HeroSlideData'
import logoHero from '/logo.png'

export default function Hero() {

    const [heroSlide, setHeroSlide] = useState(0)

    useEffect(() => {
        const slide = setInterval(() => {
            setHeroSlide((prev) => prev === HeroSlideData.length - 1 ? 0 : prev + 1)
        }, 9000)

        return () => {
            clearInterval(slide)
        }
    }, [])


    return (
        <>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">

                {/* Hero Section */}
                <section className="h-[100vh] mt-20" style={{ backgroundImage: `url(${HeroSlideData[heroSlide].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className='bg-gradient-to-r from-[#01013cf4] from-40% to-[#ffffff00] 20% w-full h-full flex flex-col md:flex-row items-center justify-between px-12 py-20 bg-cover bg-center rounded-lg shadow-lg'>
                        <div className='max-w-370 mx-auto w-full h-full flex flex-col justify-center'>
                            <div className="max-w-200 outline-white outline-1 flex flex-col items-center">
                                <div className='flex flex-row justify-center outline-1 outline-white mb-4'>
                                    <img src={logoHero} alt="The Inspectorate Logo w-180 h-180" />
                                </div>
                                <h2 className="text-[20px] font-extrabold text-[white] leading-snug letter-fonts-2">
                                    Quality and Growth <span className="text-red-600">Redefined</span> <span className='header-fonts text-[13px]'>for Schools</span>
                                </h2>
                                <p className="mt-4 text-[white]">
                                    Expert guidance in inspection and improvement to elevate educational outcomes.
                                </p>
                                <div className="mt-6 flex space-x-4">
                                    <button className="bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition">
                                        Request Inspection
                                    </button>
                                    <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md font-semibold hover:bg-red-50 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Framework Section */}
                <div className="px-12 py-16">
                    <div className='max-w-370 mx-auto  bg-[#e3e3e3] py-6 px-6 rounded-lg'>
                        <h3 className="text-5xl font-bold text-[#01013cf4]mb-8 text-center mb-5 letter-fonts-2">Our School Inspection Framework</h3>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="p-6  rounded-lg shadow-sm hover:shadow-md transition">
                                <h4 className="text-lg font-semibold text-[#01013cf4]">🔴 Pedagogical Excellence</h4>
                                <p className="mt-2 [#01013cf4] ml-7 text-[15px]">Ensuring effective teaching practices and improved learning outcomes.</p>
                            </div>
                            <div className="p-6  rounded-lg shadow-sm hover:shadow-md transition">
                                <h4 className="text-lg font-semibold text-[#01013cf4]">🔴 Administrative Efficiency</h4>
                                <p className="mt-2 [#01013cf4] ml-7 text-[15px]">Strengthening school leadership, management systems, and operational performance.</p>
                            </div>
                            <div className="p-6  rounded-lg shadow-sm hover:shadow-md transition">
                                <h4 className="text-lg font-semibold text-[#01013cf4]">🔴 Talent Advisory</h4>
                                <p className="mt-2 [#01013cf4] ml-7 text-[15px]">Support for staff recruitment and retention.</p>
                            </div>
                            <div className="p-6  rounded-lg shadow-sm hover:shadow-md transition">
                                <h4 className="text-lg font-semibold text-[#01013cf4]">🔴 School Growth</h4>
                                <p className="mt-2 [#01013cf4] ml-7 text-[15px]">Preparing schools to meet national education standards and compliance requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <section className="px-12 py-16 bg-gradient-to-r from-gray-50 to-gray-100">
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
                </section>
            </div>
        </>
    )
}
