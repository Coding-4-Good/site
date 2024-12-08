import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './FourthSection.css'
import arnav from "../../../assets/arnav.png"
import PurvangPaladiya from "../../../assets/PurvangPaladiya.jpg"

gsap.registerPlugin(ScrollTrigger)

export default function FourthSection() {

    useEffect(() => {
        gsap.fromTo(
            ".aixms h1",
            { top: "400px" },
            {
                top: "0px",
                ease: "power2",
                duration: 0.7,
                stagger: 0.03,
                scrollTrigger: {
                    trigger: ".main-fourth-section",
                },
            }
        );


        gsap.fromTo(".cardTeam", {
            top: "200px",
            opacity: 0
        }, {
            top: "0px",
            opacity: 1,
            ease: "power2.inOut",
            duration: "0.7",
            stagger: "0.05",
            scrollTrigger: {
                trigger: ".card",
                start: "top top"
            }
        })


    }, [])

    return (
        <div className="main-fourth-section">
            <div className="fourthSection">
                <div className="aixms">
                    <div style={{ overflow: "hidden" }}><h1>THE</h1></div>
                    <div style={{ overflow: "hidden" }}><h1>PEOPLE</h1></div>
                    <div style={{ overflow: "hidden" }}><h1>BEHIND</h1></div>
                    <div style={{ overflow: "hidden" }}><h1>THE</h1></div>
                    <div style={{ overflow: "hidden" }}><h1>MAGIC</h1></div>
                </div>
                <div className="teamCards">
                    <div className="cardTeam">
                        <div className="boxBottom">
                            <div className="text">
                                <h1 id="namePerson">Arnav Ravinder</h1>
                                <span id="role">Founder</span>
                            </div>
                        </div>
                        <div className="img">
                            <img src={arnav} alt="" />
                        </div>
                    </div>
                    <div className="cardTeam">
                        <div className="boxBottom">
                            <div className="text">
                                <h1 id="namePerson">Purvang Paladiya</h1>
                                <span id="role">Teaching Assistant</span>
                            </div>
                        </div>
                        <div className="img">
                            <img id="purvang" src={PurvangPaladiya} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}