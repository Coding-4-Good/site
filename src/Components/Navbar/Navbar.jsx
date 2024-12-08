import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";
import './Navbar.css'
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import ButtonSmall from "../Buttons/ButtonSmall/Button";
import ButtonFull from "../Buttons/ButtonFull/ButtonFull";
import arrowRight from "../../assets/arrow-right.svg"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    const [menuOpen, setMenuOpen] = useState(false)

    function handleClick() {
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

    return (
        <div className="main-navbar">
            <div className="hamMenu">
                <div className="items">
                    <div className="item">
                        <span>Home</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item">
                        <span>About</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item">
                        <span>Team</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item">
                        <span>Gallery</span>
                        <img style={{ height: '30px' }} src={arrowRight} alt="" />
                    </div>
                    <div className="item">
                        <ButtonFull text={"Donate"}></ButtonFull>
                    </div>
                </div>
            </div>
            <div className="navbar">
                <div className="logo">
                    <img style={{ height: "30px" }} src={logo} alt="" />
                </div>
                <div className="navigation">
                    <span>Home</span>
                    <span>About</span>
                    <span>Team</span>
                    <span>Gallery</span>
                </div>
                <div className="right">
                    <ButtonSmall text={"Donate"}></ButtonSmall>
                    <div onClick={handleClick} className="menuBtn">
                        <div className={menuOpen ? "line1-rxc active" : "line1-rxc"}></div>
                        <div className={menuOpen ? "line2-rxy active" : "line2-rxy"}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}