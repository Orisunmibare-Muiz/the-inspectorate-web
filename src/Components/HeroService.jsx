import React from 'react'
import { HeroServiceData, HeroServiceOtherData } from '../Data/HeroServiceData';
import { ventures } from '../Data/HeroServiceData';
import logo from '/logo.png'
import supposedSVG from '/Professional-person .png'

export default function HeroService() {
    return (
        <>
            <div className="bg-gray-50 relative">

                {/* HERO SECTION */}

                <section className=" text-white" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="bg-gradient-to-b from-[#01016ef5] from-15% via-[#ffffffe4] to-transparent md:bg-gradient-to-r py-20 h-[70vh]">
                        <div className="max-w-370 mx-auto px-6 md:px-0">

                            <h1 className="text-4xl md:text-6xl font-bold mt-14 mb-4">
                                Partnership & <span className='text-[#01016ef5]'>Venture Services</span>
                            </h1>

                            <p className="font-bold text-[30px] text-gray-200 max-w-xl">
                                Empowering Schools for Lasting Excellence and Growth
                            </p>
                        </div>
                    </div>
                </section>

                <div className='absolute top-4.5 -right-15 rounded-[20px]'>
                    <img src={supposedSVG} alt="" className='w-185' />
                </div>


                {/* PARTNERSHIP SERVICES */}

                <div className='flex flex-row md:absolute md:top-90 md:left-13.5 max-w-370 mx-auto'>
                    <section className="max-w-230 mx-auto px-6 py-20 md:py-5 md:bg-gradient-to-b from-[#fffffff5] from-80% to-transparent rounded-[20px]">

                        <h2 className="text-5xl font-bold mb-12 text-center">
                            OUR PARTNERSHIP SERVICE
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                            {HeroServiceData.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                                    >

                                        <Icon className="text-red-600 text-3xl mb-4" />

                                        <h3 className="text-xl font-semibold mb-2">
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

                    <div className='flex flex-col justify-end'>
                        <div className='w-full grid md:grid-cols-2 gap-5 py-5'>
                            {HeroServiceOtherData.map((props, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition bg-white">
                                    <p className="text-xl font-semibold mb-2">{props.head}</p>
                                    <p className="text-gray-600 text-sm">{props.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>



                {/* VENTURES SECTION */}

                <section className="bg-white py-20 mt-90">

                    <div className="max-w-7xl mx-auto px-6">

                        <h2 className="text-3xl font-bold mb-12 text-center">
                                OUR VENTURES
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

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

                <section className="bg-[#1e2f4f] text-white py-16">

                    <div className="max-w-4xl mx-auto text-center px-6">

                        <h2 className="text-3xl font-bold mb-4">
                            Partner With The Inspectorate
                        </h2>

                        <p className="text-gray-200 mb-8">
                            We help schools improve academic quality, operational excellence
                            and sustainable institutional growth.
                        </p>

                        <div className="flex justify-center gap-4">

                            <button className="bg-red-600 px-6 py-3 rounded-md hover:bg-red-700 transition">
                                Request Inspection
                            </button>

                            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#1e2f4f] transition">
                                Contact Us
                            </button>

                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}
