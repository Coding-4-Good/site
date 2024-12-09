import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './ThirdSection.css';

import pageFilled from "../../../assets/file-filled.svg"
import codeIcon from "../../../assets/code-2.svg"
import userIcon from "../../../assets/users.svg"
import refreshIcon from "../../../assets/refresh-4.svg"

gsap.registerPlugin(ScrollTrigger)

export default function ThirdSection() {
    const cardsData = [
        { icon: pageFilled, number: 5, label: "Curriculums" },
        { icon: codeIcon, number: NaN, label: "Personal Projects" },
        { icon: userIcon, number: 40, label: "Students" },
        { icon: refreshIcon, number: 15, label: "Sessions" }
    ];

    useEffect(() => {
        // Ensure GSAP ScrollTrigger is registered
        gsap.registerPlugin(ScrollTrigger);

        // Number counting animation
        const createNumberAnimation = (element, targetNumber) => {
            gsap.fromTo(element,
                {
                    // Use a data attribute to store the original number
                    "--counter": 0
                },
                {
                    "--counter": targetNumber,
                    duration: 2,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        once: true
                    },
                    onUpdate: function () {
                        // Use CSS custom property to animate
                        const currentValue = Math.round(parseFloat(getComputedStyle(element).getPropertyValue('--counter')));
                        element.textContent = currentValue + '+';
                    }
                }
            )
        }

        // Select all number elements and apply animation
        const numberElements = document.querySelectorAll('.num h1');
        numberElements.forEach((element, index) => {
            createNumberAnimation(element, cardsData[index].number);
        });

        // Existing animations
        gsap.fromTo(".raxis h1", {
            top: "300px",
            transform: "rotate(12deg)"
        }, {
            top: "0px",
            transform: "rotate(0deg)",
            ease: "power2",
            duration: "1",
            stagger: "0.05",
            scrollTrigger: {
                trigger: ".raxis h1",
            }
        })

        gsap.fromTo(".card", {
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
            }
        })

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, []) // Empty dependency array ensures this runs once on mount

    return (
        <div className="main-third-section">
            <div className="main-asdx">
                <div className="raxis">
                    <div style={{ overflow: "hidden" }}><h1>THINGS </h1></div>
                    <div style={{ overflow: "hidden" }}><h1>WE</h1></div>
                    <div style={{ overflow: "hidden" }}><h1>HAVE</h1></div>
                    <div style={{ overflow: "hidden" }}><h1>ACHIEVED</h1></div>
                </div>
                <div className="cards">
                    {cardsData.map((card, index) => (
                        <div key={index} className="card">
                            <div className="icon">
                                <img height={"80px"} src={card.icon} alt="" />
                            </div>
                            <div className="num">
                                <h1>{card.number}+</h1>
                            </div>
                            <div className="descr">
                                <span>{card.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
