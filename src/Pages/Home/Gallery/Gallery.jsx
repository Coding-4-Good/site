import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Gallery.css'
import image1 from "../../../assets/Kids/1.jpg"
import image2 from "../../../assets/Kids/2.jpg"
import image3 from "../../../assets/Kids/3.jpg"
import image4 from "../../../assets/Kids/4.jpg"
import image5 from "../../../assets/Kids/5.jpg"
import image6 from "../../../assets/Kids/6.jpg"
import image7 from "../../../assets/Kids/7.jpg"
import image8 from "../../../assets/Kids/8.jpg"
import image9 from "../../../assets/Kids/9.jpg"
import image10 from "../../../assets/Kids/11.jpg"
import image11 from "../../../assets/Kids/12.jpg"
import image12 from "../../../assets/Kids/13.jpg"
import image13 from "../../../assets/Kids/14.jpg"
import image14 from "../../../assets/Kids/15.jpg"
import image15 from "../../../assets/Kids/16.jpg"
import image16 from "../../../assets/Kids/17.jpg"
import image17 from "../../../assets/Kids/18.jpg"
import image18 from "../../../assets/Kids/19.jpg"
import image19 from "../../../assets/Kids/20.jpg"
import image20 from "../../../assets/Kids/21.jpg"
import image21 from "../../../assets/Kids/22.jpg"
import image22 from "../../../assets/Kids/23.jpg"

// Import your video files here
import video1 from "../../../assets/Kids/video-1.mp4"
import video2 from "../../../assets/Kids/video-2.mp4"
// Add more video imports as needed

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
    // Refs for video elements to control playback
    const videoRefs = useRef([]);

    useEffect(() => {
        gsap.set(".main-fifth-section", { display: "none" })

        // Image scroll animation
        gsap.fromTo(".images",
            { x: "0" },
            {
                x: "-=100%",
                ease: "none",
                duration: 10000,
                scrollTrigger: {
                    trigger: ".main-gallery",
                    start: "top-=100 top",
                    pin: true,
                    scrub: true,
                },
            }
        );


    }, [])

    // Handler for video hover
    const handleVideoHover = (index, isHovering) => {
        const video = videoRefs.current[index];
        if (video) {
            if (isHovering) {
                video.play();
            } else {
                video.pause();
            }
        }
    };

    return (
        <>
            <div className="div4">
                {/* Image Gallery Section (unchanged) */}
                <div className="main-gallery">
                    <div className="asoasx">
                        <div className="adsas">
                            <h1>GALLERY</h1>
                        </div>
                        <div className="images">
                            <img src={image1} alt="" />
                            <img src={image2} alt="" />
                            <img src={image3} alt="" />
                            <img src={image4} alt="" />
                            <img src={image5} alt="" />
                            <img src={image6} alt="" />
                            <img src={image7} alt="" />
                            <img src={image8} alt="" />
                            <img src={image9} alt="" />
                            <img src={image10} alt="" />
                            <img src={image11} alt="" />
                            <img src={image12} alt="" />
                            <img src={image13} alt="" />
                            <img src={image14} alt="" />
                            <img src={image15} alt="" />
                            <img src={image16} alt="" />
                            <img src={image17} alt="" />
                            <img src={image18} alt="" />
                            <img src={image19} alt="" />
                            <img src={image20} alt="" />
                            <img src={image21} alt="" />
                            <img src={image22} alt="" />
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}