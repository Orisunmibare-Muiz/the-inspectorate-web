import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { ChooseUsData } from '../Data/ChooseUsData';

export default function ChooseUs() {
    return (
        <>
            <div className='h-full w-full'>
                <section className="lg:max-w-370 mx-auto rounded-[10px] bg-[] py-20">

                    <div className="max-w-full lg:max-w-370 mx-auto px-6">

                        {/* HEADER */}
                        <h2 className="text-[#090024] text-3xl md:text-5xl font-bold text-center mb-16">
                            Our Core Principles
                        </h2>

                        {/* CIRCULAR GRID */}
                        <div className="flex flex-wrap lg:flex-nowrap justify-center">

                            {ChooseUsData.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ zIndex: ChooseUsData.length - index }}
                                    className="
                                relative
                                w-[240px] h-[240px]
                                md:w-[260px] md:h-[260px]
                                lg:w-[280px] lg:h-[280px]
                                rounded-full
                                bg-[#090024]
                                flex flex-col items-center justify-center text-center p-6
                                border border-[white]
                                transition duration-300
                                hover:scale-105 hover:-translate-y-2
                                hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]
                                border-10
                                
                                lg:-ml-7
                                first:lg:ml-0
                            "
                                >

                                    <div className="mb-4 text-green-400 text-2xl">
                                        <FaCheckCircle />
                                    </div>

                                    <h3 className="text-white font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}
