import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Footer.css'
import logo from "../../assets/logo.png"
import Button from "../../Components/Buttons/ButtonLarge/ButtonLarge"
import MohitTiwari from "../../assets/MohitTiwari.jpg"
import ImerxnLogo from "../../assets/imerxnLogo.png"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

    useEffect(() => {


        gsap.fromTo(
            ".asdasasd span",
            { top: "100px" },
            {
                top: "0px",
                ease: "power2",
                duration: 0.7,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: ".asdasasd span   ",
                    start: "top bottom", // Adjust start point as needed
                    end: "top center", // Adjust end point as needed
                    toggleActions: "play none none none", // Play the animation once
                },
            }
        );
    })

    return (
        <div className="main-footer">
            <div className="footer">
                <div className="idkl">
                    <div className="top-axs">
                        <div className="logo1">
                            <img src={logo} alt="" />

                            <div className="linemain">
                                <div className="line"></div>
                            </div>
                        </div>

                        <div className="mainSmallText">
                            <div className="supportedByImerxn">
                                <h1>Supported by </h1>
                                <img height={30} src={ImerxnLogo} alt="" />
                            </div>
                            <div className="asdasasd">
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
                            <div className="axmixs">
                                <Button onClick={() => { window.location.replace("https://donate.coding4good.in") }} text={"Donate"}></Button>
                            </div>

                        </div>
                    </div>
                    <div className="left-tax">
                        <div className="contact-form">
                            <form action="https://formspree.io/f/xanykzve" method="POST">
                                <div className="textInput">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email" />
                                </div>
                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div className="bottom">
                    <div className="bottom-inner">
                        <span>© Coding4Good All rights reserved.</span>
                        <div onClick={() => { window.location.replace("https://mohittiwaridev.xyz") }} className="siteByMohit">
                            <span>CODED BY MOHIT</span>
                            <img height={50} src={MohitTiwari} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}