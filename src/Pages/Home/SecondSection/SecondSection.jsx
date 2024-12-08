import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './SecondSection.css'
import CardPixelReveal from "../../../Components/ImageReveal/CardPixelReveal";
import image1 from "../../../assets/Kids/8.jpg"
import image2 from "../../../assets/Kids/17.jpg"
import ButtonLarge from "../../../Components/Buttons/ButtonLarge/ButtonLarge"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    useEffect(() => {

        gsap.fromTo(".main-first-section", {
            opacity: 1
        }, {
            opacity: 0,
            ease: "power1",
            duration: 0.1,
            scrollTrigger: {
                trigger: ".main-second-section",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })

        gsap.fromTo(
            ".asdasx h1",
            { top: "100px" },
            {
                top: "0px",
                ease: "power2",
                duration: 0.7,
                stagger: 0.03,
                scrollTrigger: {
                    trigger: ".asdasx h1",
                    start: "top bottom", // Adjust start point as needed
                    end: "top center", // Adjust end point as needed
                    toggleActions: "play none none none", // Play the animation once
                },
            }
        );
        gsap.fromTo(
            ".asdas span",
            { top: "100px" },
            {
                top: "0px",
                ease: "power2",
                duration: 0.7,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: ".asdas span   ",
                    start: "top bottom", // Adjust start point as needed
                    end: "top center", // Adjust end point as needed
                    toggleActions: "play none none none", // Play the animation once
                },
            }
        );

    }, []);

    return (
        <div className="div1">
            <div className="main-second-section">
                <div className="secondSection">
                    <div className="radcx">
                        <div className="asdasx">
                            <div style={{ overflow: "hidden" }}><h1>Teaching</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>coding</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>to</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>young</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>underprivileged</h1></div>
                            <div style={{ overflow: "hidden" }}><h1>students</h1></div>
                        </div>
                        <div className="asdas">
                            <div style={{ overflow: "hidden" }}><span>At</span></div>
                            <div style={{ overflow: "hidden" }}><span>Coding4Good,</span></div>
                            <div style={{ overflow: "hidden" }}><span>we</span></div>
                            <div style={{ overflow: "hidden" }}><span>work</span></div>
                            <div style={{ overflow: "hidden" }}><span>with</span></div>
                            <div style={{ overflow: "hidden" }}><span>children</span></div>
                            <div style={{ overflow: "hidden" }}><span>aged</span></div>
                            <div style={{ overflow: "hidden" }}><span>12</span></div>
                            <div style={{ overflow: "hidden" }}><span>to</span></div>
                            <div style={{ overflow: "hidden" }}><span>16</span></div>
                            <div style={{ overflow: "hidden" }}><span>from</span></div>
                            <div style={{ overflow: "hidden" }}><span>lesser-privileged</span></div>
                            <div style={{ overflow: "hidden" }}><span>backgrounds</span></div>
                            <div style={{ overflow: "hidden" }}><span>to</span></div>
                            <div style={{ overflow: "hidden" }}><span>teach</span></div>
                            <div style={{ overflow: "hidden" }}><span>them</span></div>
                            <div style={{ overflow: "hidden" }}><span>coding</span></div>
                            <div style={{ overflow: "hidden" }}><span>and</span></div>
                            <div style={{ overflow: "hidden" }}><span>essential</span></div>
                            <div style={{ overflow: "hidden" }}><span>technology</span></div>
                            <div style={{ overflow: "hidden" }}><span>skills.</span></div>
                            <div style={{ overflow: "hidden" }}><span>This</span></div>
                            <div style={{ overflow: "hidden" }}><span>critical</span></div>
                            <div style={{ overflow: "hidden" }}><span>age</span></div>
                            <div style={{ overflow: "hidden" }}><span>group</span></div>
                            <div style={{ overflow: "hidden" }}><span>represents</span></div>
                            <div style={{ overflow: "hidden" }}><span>the</span></div>
                            <div style={{ overflow: "hidden" }}><span>future</span></div>
                            <div style={{ overflow: "hidden" }}><span>of</span></div>
                            <div style={{ overflow: "hidden" }}><span>innovation,</span></div>
                            <div style={{ overflow: "hidden" }}><span>and</span></div>
                            <div style={{ overflow: "hidden" }}><span>we</span></div>
                            <div style={{ overflow: "hidden" }}><span>believe</span></div>
                            <div style={{ overflow: "hidden" }}><span>that</span></div>
                            <div style={{ overflow: "hidden" }}><span>every</span></div>
                            <div style={{ overflow: "hidden" }}><span>child,</span></div>
                            <div style={{ overflow: "hidden" }}><span>regardless</span></div>
                            <div style={{ overflow: "hidden" }}><span>of</span></div>
                            <div style={{ overflow: "hidden" }}><span>their</span></div>
                            <div style={{ overflow: "hidden" }}><span>circumstances,</span></div>
                            <div style={{ overflow: "hidden" }}><span>deserves</span></div>
                            <div style={{ overflow: "hidden" }}><span>the</span></div>
                            <div style={{ overflow: "hidden" }}><span>chance</span></div>
                            <div style={{ overflow: "hidden" }}><span>to</span></div>
                            <div style={{ overflow: "hidden" }}><span>succeed</span></div>
                            <div style={{ overflow: "hidden" }}><span>in</span></div>
                            <div style={{ overflow: "hidden" }}><span>a</span></div>
                            <div style={{ overflow: "hidden" }}><span>world</span></div>
                            <div style={{ overflow: "hidden" }}><span>driven</span></div>
                            <div style={{ overflow: "hidden" }}><span>by</span></div>
                            <div style={{ overflow: "hidden" }}><span>technology.</span></div>
                        </div>
                        <div className="rad">
                            <ButtonLarge text={"Donate"}></ButtonLarge>
                        </div>
                    </div>

                    <div className="imageKid">
                        <CardPixelReveal defaultImage={image1} activeImage={image2} gridSize={13}
                            animationStepDuration={0.3}></CardPixelReveal>
                    </div>
                </div>
            </div>
        </div>
    )
}