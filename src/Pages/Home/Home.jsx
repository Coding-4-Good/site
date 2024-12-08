import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import Navbar from "../../Components/Navbar/Navbar"
import './Home.css'
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import Gallery from "./Gallery/Gallery";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <ReactLenis root>
            <div className="main-home-page">
                <Navbar></Navbar>
                <FirstSection></FirstSection>
                <SecondSection></SecondSection>
                <ThirdSection></ThirdSection>
                <FourthSection></FourthSection>
                <Gallery></Gallery>
            </div>
        </ReactLenis >
    )
}