import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Navbar.css'
import logo from "../../assets/logo.png"
import ButtonSmall from "../Buttons/ButtonSmall/Button";
import ButtonFull from "../Buttons/ButtonFull/ButtonFull";
import arrowRight from "../../assets/arrow-right.svg"
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    function handleClick(e) {
        // Stop event propagation to prevent nested click events
        e.stopPropagation();

        setMenuOpen(!menuOpen)

        if (!menuOpen) {
            gsap.fromTo(".hamMenu", {
                top: "-800px"
            }, {
                top: "0px",
                ease: "power3.inOut",
                duration: 0.8
            })
        }
        else {
            gsap.fromTo(".hamMenu", {
                top: "0px"
            }, {
                top: "-800px",
                ease: "power3.inOut",
                duration: 0.8
            })
        }
    }

    const scrollToSection = (sectionRef, e) => {
        // Prevent any potential event propagation
        e.stopPropagation();

        // Close mobile menu
        setMenuOpen(false);
        gsap.fromTo(".hamMenu", {
            top: "0px"
        }, {
            top: "-800px",
            ease: "power3.inOut",
            duration: 0.8
        });

        // Scroll to section using scrollIntoView
        if (sectionRef === 'home') {
            // Scroll to top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const section = document.querySelector(sectionRef);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className="main-navbar">
            <div className="hamMenu">
                <div className="items">
                    <div className="item" onClick={(e) => scrollToSection('home', e)}>
                        <span>Home</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item" onClick={(e) => scrollToSection('.main-second-section', e)}>
                        <span>About</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item" onClick={(e) => scrollToSection('.main-fourth-section', e)}>
                        <span>Team</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item" onClick={(e) => scrollToSection('.main-gallery', e)}>
                        <span>Gallery</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item">
                        <ButtonFull onClick={() => { window.location.replace("https://donate.coding4good.in") }} text={"Donate"}></ButtonFull>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="logo">
                    <img style={{ height: "30px" }} src={logo} alt="" />
                </div>
                <div className="navigation">
                    <span onClick={(e) => scrollToSection('home', e)}>Home</span>
                    <span onClick={(e) => scrollToSection('.main-second-section', e)}>About</span>
                    <span onClick={(e) => scrollToSection('.main-fourth-section', e)}>Team</span>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className="right">
                    <ButtonSmall onClick={() => { window.location.replace("https://donate.coding4good.in") }} text={"Donate"}></ButtonSmall>
                    <div onClick={handleClick} className="menuBtn">
                        <div className={menuOpen ? "line1-rxc active" : "line1-rxc"}></div>
                        <div className={menuOpen ? "line2-rxy active" : "line2-rxy"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}