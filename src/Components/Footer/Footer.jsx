import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Footer.css'
import logo from "../../assets/logo.png"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <div className="main-footer">
            <div className="footer">
                <div className="top-axs">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}