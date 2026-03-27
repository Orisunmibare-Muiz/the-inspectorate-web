import React from 'react'
import Bag from "/Bag.svg"

export default function AboutUs() {
    return (
        <>
            <div className="mt-16 flex flex-col items-center px-4 sm:px-6">

                {/* Blue Background */}
                <div className="
                w-full max-w-[370px] sm:max-w-xl md:max-w-3xl lg:max-w-370
                mx-auto rounded-[20px]
                bg-radial-[at_90%_140%] from-[grey] via-[#090024] to-[#090024] to-10%
                h-auto lg:h-[70vh]
                mt-10 lg:mt-16
            ">

                    {/* Text Container */}
                    <div className="
                    outline outline-1 outline-white
                    h-full w-full
                    p-6 sm:p-10 lg:p-15
                    relative
                    ">

                        {/* Image */}
                        <img
                            src={Bag}
                            alt="A bag"
                            className="
                            w-32 sm:w-48 md:w-56 lg:w-70
                            mx-auto mb-6
                            lg:float-right lg:ml-6 lg:mb-0
                            "
                        />

                        {/* Title */}
                        <p className="
                        text-white font-bold
                        text-2xl sm:text-3xl md:text-4xl lg:text-[50px]
                        mb-4 lg:mb-5
                        text-center lg:text-left
                    ">
                            Contact Us
                        </p>

                        {/* Paragraphs */}
                        <p className="text-white mb-3 text-sm sm:text-base lg:text-base text-center lg:text-left">
                            The Inspectorate is a private Educational Management Consult, specializing in Education Quality Assurance, School Growth and Leader's Development.
                        </p>

                        <p className="text-white mb-3 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                            We are a team of seasoned and highly experienced professionals who are passionate about helping schools to build and maintain high educational standards and sustainable growth.
                        </p>

                        <p className="text-white mb-3 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                            Education today is no longer defined solely by the curriculum on the page, but by the consistency of its delivery and the strength of the systems supporting it. As institutions face increasing pressure from varying forms of students' academic challenges, parents' expectations, staff issues and regulatory compliance, THE INSPECTORATE does not just offer a comprehensive, external push, in terms of teacher and student development, we come with creative academic innovations churned out from years of on-the-field experience - national and international.
                        </p>

                        <p className="text-white mb-3 leading-relaxed text-sm sm:text-base text-center lg:text-left">
                            Our school Inspection framework moves far beyond simple 'fault-finding', to providing your leadership team with a data-driven roadmap for pedagogical excellence, administrative efficiency and total instructional growth.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}
