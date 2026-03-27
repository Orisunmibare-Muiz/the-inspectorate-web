import React from 'react'
import AboutSectionOne from '../Components/AboutSectionOne'
import Nav from '../Components/Shared-Components/Nav'
import Footer from '../Components/Shared-Components/Footer'
import AboutUs from '../Components/AboutUs'

export default function About() {
    return (
        <>
            <Nav />
            <AboutUs />
            <AboutSectionOne />
            <Footer />
        </>
    )
}
