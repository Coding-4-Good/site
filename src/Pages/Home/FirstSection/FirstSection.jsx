import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./FirstSection.css"
import Leaf from "../../../Components/Leaf/Leaf";
import ButtonLarge from "../../../Components/Buttons/ButtonLarge/ButtonLarge";
gsap.registerPlugin(ScrollTrigger)

export default function FirstSection() {

    useEffect(() => {

        gsap.set(".line1", { left: "-200px" })
        gsap.set(".line2", { left: "-300px" })
        gsap.set(".ecoad button", { opacity: 0 })

        gsap.fromTo(".main-first-section", {
            scale: 1,
            rotate: 0
        }, {
            scale: 0.8,
            rotate: -12,
            duration: 1,
            ease: 'power1',
            scrollTrigger: {
                trigger: ".main-first-section",
                start: "top top",
                scrub: true
            }
        })


        gsap.fromTo(".eres h1", {
            top: "300px",
            transform: "rotate(12deg)"
        }, {
            top: "0px",
            transform: "rotate(0deg)",
            ease: "power2",
            duration: "1",
            stagger: "0.05",
            onComplete: () => {

                gsap.fromTo(".ecoad button", {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: "power3.inOut",
                    duration: 0.8
                })

                gsap.fromTo(".line1", {
                    left: "-200px"
                }, {
                    left: "400px",
                    ease: "power3.inOut",
                    duration: 2
                })
                gsap.fromTo(".line2", {
                    left: "-300px"
                }, {
                    left: "300px",
                    ease: "power3.inOut",
                    duration: 3
                })
            }
        })
        gsap.fromTo(".imgbox ", {
            opacity: "0"
        }, {
            opacity: "1",
            ease: "power4",
            duration: "0.5",
            stagger: "0.02",
            delay: 0.6
        })
    }, [])

    return (
        <>
            <div className="div">
                <div className="main-first-section">
                    <div className="leaves">
                        <div className="leaf2">
                            <Leaf></Leaf>
                        </div>
                        <div className="leaf1">
                            <Leaf></Leaf>
                        </div>
                    </div>
                    <div className="firstSection">
                        <div className="joas">
                            <span>Based in Bengaluru, Karnataka</span>
                        </div>
                        <div className="eres">
                            <div style={{ overflow: "hidden" }}><h1>EMPOWERING</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>UNDERPRIVILEGED</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>STUDENTS</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>WITH</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>THE</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>POWER</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>OF</h1></div>
                            <div style={{ overflow: "hidden" }}>
                                <h1>CODING</h1>
                                <div className="lines">
                                    <div className="line1"></div>
                                    <div className="line2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="ecoad">
                            <ButtonLarge onClick={() => { window.location.replace("https://donate.coding4good.in") }} text={"Donate"}></ButtonLarge>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}