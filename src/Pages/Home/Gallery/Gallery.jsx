import React, { useEffect, useRef, useState } from "react";
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
import image23 from "../../../assets/Kids/24.jpg"
import image24 from "../../../assets/Kids/25.jpg"
import image25 from "../../../assets/Kids/26.jpg"
import image26 from "../../../assets/Kids/27.jpg"
import image27 from "../../../assets/Kids/28.jpg"
import image28 from "../../../assets/Kids/29.jpg"
import image29 from "../../../assets/Kids/30.jpg"
import image30 from "../../../assets/Kids/31.jpg"
import image31 from "../../../assets/Kids/32.jpg"
import image32 from "../../../assets/Kids/33.jpg"
import image33 from "../../../assets/Kids/34.jpg"
import image34 from "../../../assets/Kids/35.jpg"
import image35 from "../../../assets/Kids/36.jpg"
import image36 from "../../../assets/Kids/37.jpg"
import image37 from "../../../assets/Kids/38.jpg"
import image38 from "../../../assets/Kids/39.jpg"
import image39 from "../../../assets/Kids/40.jpg"

import playIcon from "../../../assets/play.svg"
import pauseIcon from "../../../assets/pauze.svg"

// Import your video files here
import video1 from "../../../assets/Kids/Video1.mp4"
import video2 from "../../../assets/Kids/Video2.mp4"
import video3 from "../../../assets/Kids/Video3.mp4"
import video4 from "../../../assets/Kids/Video4.mp4"
import video5 from "../../../assets/Kids/Video5.mp4"
import video7 from "../../../assets/Kids/Video7.mp4"
// Add more video imports as needed

gsap.registerPlugin(ScrollTrigger)

export default function Gallery() {
    // State to manage video play/pause for each video
    const [videoStates, setVideoStates] = useState(
        Array(7).fill().map(() => ({ isPlaying: false, showControls: false }))
    );


    // Refs for video elements
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
        gsap.fromTo(".videos",
            { x: "0" },
            {
                x: "-=100%",
                ease: "none",
                duration: 10000,
                scrollTrigger: {
                    trigger: ".main-videos-section",
                    start: "top-=100 top",
                    pin: true,
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            ".aixms1 h1",
            { top: "400px" },
            {
                top: "0px",
                ease: "power2",
                duration: 0.7,
                stagger: 0.03,
                scrollTrigger: {
                    trigger: ".main-videos-section",
                },
            }
        );
    }, [])

    // Handle video play/pause
    const toggleVideoPlayback = (index) => {
        const newVideoStates = videoStates.map((state, i) => ({
            isPlaying: i === index && !state.isPlaying,
            showControls: true
        }));

        // Pause all other videos
        videoRefs.current.forEach((videoEl, i) => {
            if (i !== index) {
                videoEl.pause();
                videoEl.currentTime = 0;
            }
        });

        // Play or pause the selected video
        const videoElement = videoRefs.current[index];
        if (newVideoStates[index].isPlaying) {
            videoElement.play();
        } else {
            videoElement.pause();
        }

        setVideoStates(newVideoStates);
    };

    // Handle video end
    const handleVideoEnd = (index) => {
        const newVideoStates = [...videoStates];
        const videoElement = videoRefs.current[index];

        // Reset video to start and keep controls visible
        videoElement.currentTime = 0;
        videoElement.play();

        newVideoStates[index] = {
            isPlaying: true,
            showControls: true
        };

        setVideoStates(newVideoStates);
    };

    // Handle mouse enter/leave for video controls
    const handleMouseEnter = (index) => {
        const newVideoStates = [...videoStates];
        newVideoStates[index].showControls = true;
        setVideoStates(newVideoStates);
    };

    const handleMouseLeave = (index) => {
        const newVideoStates = [...videoStates];
        newVideoStates[index].showControls = false;
        setVideoStates(newVideoStates);
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
                            <img src={image23} alt="" />
                            <img src={image24} alt="" />
                            <img src={image25} alt="" />
                            <img src={image26} alt="" />
                            <img src={image27} alt="" />
                            <img src={image28} alt="" />
                            <img src={image29} alt="" />
                            <img src={image30} alt="" />
                            <img src={image31} alt="" />
                            <img src={image32} alt="" />
                            <img src={image33} alt="" />
                            <img src={image34} alt="" />
                            <img src={image35} alt="" />
                            <img src={image36} alt="" />
                            <img src={image37} alt="" />
                            <img src={image38} alt="" />
                            <img src={image39} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-videos-section">
                <div className="asixsxfd">
                    <div className="aixms1">
                        <div style={{ overflow: "hidden" }}><h1>V</h1></div>
                        <div style={{ overflow: "hidden" }}><h1>I</h1></div>
                        <div style={{ overflow: "hidden" }}><h1>D</h1></div>
                        <div style={{ overflow: "hidden" }}><h1>E</h1></div>
                        <div style={{ overflow: "hidden" }}><h1>O</h1></div>
                        <div style={{ overflow: "hidden" }}><h1>S</h1></div>
                    </div>

                    <div className="videos">
                        {[video1, video2, video3, video4, video5, video7].map((videoSrc, index) => (
                            <div
                                key={index}
                                className="video"
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <video
                                    ref={el => videoRefs.current[index] = el}
                                    src={videoSrc}
                                    onEnded={() => handleVideoEnd(index)}
                                />
                                {videoStates[index].showControls && (
                                    <div
                                        className="playButton"
                                        onClick={() => toggleVideoPlayback(index)}
                                        style={{
                                            opacity: videoStates[index].showControls ? 1 : 0
                                        }}
                                    >
                                        <img
                                            src={videoStates[index].isPlaying ? pauseIcon : playIcon}
                                            alt={videoStates[index].isPlaying ? "Pause" : "Play"}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}