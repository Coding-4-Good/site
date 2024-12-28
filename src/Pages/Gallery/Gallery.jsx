import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Gallery.css";
import ReactLenis from "lenis/react";
import ButtonSmall from "../../Components/Buttons/ButtonLarge/ButtonLarge";
import Footer from "../../Components/Footer/Footer"

import image1 from "../../assets/Kids/1.jpg";
import image2 from "../../assets/Kids/2.jpg";
import image3 from "../../assets/Kids/3.jpg";
import image4 from "../../assets/Kids/4.jpg";
import image5 from "../../assets/Kids/5.jpg";
import image6 from "../../assets/Kids/6.jpg";
import image7 from "../../assets/Kids/7.jpg";
import image8 from "../../assets/Kids/8.jpg";
import image9 from "../../assets/Kids/9.jpg";
import image10 from "../../assets/Kids/11.jpg";
import image11 from "../../assets/Kids/12.jpg";
import image12 from "../../assets/Kids/13.jpg";
import image13 from "../../assets/Kids/14.jpg";
import image14 from "../../assets/Kids/15.jpg";
import image15 from "../../assets/Kids/16.jpg";
import image16 from "../../assets/Kids/17.jpg";
import image17 from "../../assets/Kids/18.jpg";
import image18 from "../../assets/Kids/19.jpg";
import image19 from "../../assets/Kids/20.jpg";
import image20 from "../../assets/Kids/21.jpg";
import image21 from "../../assets/Kids/22.jpg";
import image22 from "../../assets/Kids/23.jpg";
import image23 from "../../assets/Kids/24.jpg";
import image24 from "../../assets/Kids/25.jpg";
import image25 from "../../assets/Kids/26.jpg";
import image26 from "../../assets/Kids/27.jpg";
import image27 from "../../assets/Kids/28.jpg";
import image28 from "../../assets/Kids/29.jpg";
import image29 from "../../assets/Kids/30.jpg";
import image30 from "../../assets/Kids/31.jpg";
import image31 from "../../assets/Kids/32.jpg";
import image32 from "../../assets/Kids/33.jpg";
import image33 from "../../assets/Kids/34.jpg";
import image34 from "../../assets/Kids/35.jpg";
import image35 from "../../assets/Kids/36.jpg";
import image36 from "../../assets/Kids/37.jpg";
import image37 from "../../assets/Kids/38.jpg";
import image38 from "../../assets/Kids/39.jpg";
import image39 from "../../assets/Kids/40.jpg";

import video1 from "../../assets/Kids/Video1.mp4"
import video2 from "../../assets/Kids/Video2.mp4"
import video3 from "../../assets/Kids/Video3.mp4"
import video4 from "../../assets/Kids/Video4.mp4"
import video5 from "../../assets/Kids/Video5.mp4"
import video7 from "../../assets/Kids/Video7.mp4"

const Gallery = () => {
    const navigate = useNavigate();
    const [imagesText, setImagesText] = useState("Images →");
    const [videosText, setVideosText] = useState("Videos →");
    const [playingIndex, setPlayingIndex] = useState(null);
    const videoRefs = useRef([]);

    useEffect(() => {
        const letters = document.querySelectorAll("#asid span");
        gsap.to(letters, {
            color: "black",
            duration: 1,
            stagger: 0.06,
            delay: 0.4,
        });
    }, []);

    useEffect(() => {
        const handlePopState = () => navigate("/");
        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, [navigate]);

    useEffect(() => {
        const updateText = () => {
            setImagesText(window.innerWidth <= 659 ? "Images ↓" : "Images →");
            setVideosText(window.innerWidth <= 659 ? "Videos ↓" : "Videos →");
        };
        updateText();
        window.addEventListener("resize", updateText);
        return () => window.removeEventListener("resize", updateText);
    }, []);

    const handlePlayPause = (index) => {
        videoRefs.current.forEach((video, idx) => {
            if (video) {
                if (idx === index) {
                    if (video.paused) {
                        video.play();
                        video.muted = false; // Ensure video plays with sound
                        setPlayingIndex(index);
                    } else {
                        video.pause();
                        setPlayingIndex(null);
                    }
                } else {
                    video.pause();
                }
            }
        });
    };

    const images = [

        image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
        image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
        image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
        image31, image32, image33, image34, image35, image36, image37, image38, image39
    ];

    const videos = [
        video1, video2, video3, video4, video5, video7
    ];

    return (
        <ReactLenis root>
            <div className="gallery-page-main">
                <div className="btnBack">
                    <ButtonSmall text={"< Back"} onClick={() => navigate("/")}></ButtonSmall>
                </div>
                <div className="asjdaf">
                    <div className="asd">
                        <h1 id="asid" className="gallery-title">
                            {Array.from("Gallery").map((letter, index) => (
                                <span key={index}>{letter}</span>
                            ))}
                        </h1>
                        <span>Scroll down to explore!</span>
                    </div>
                </div>
                <div className="gallery">
                    <div className="img-saddf">
                        <h1>{imagesText}</h1>
                    </div>
                    {images.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                    <div className="img-saddf">
                        <h1>{videosText}</h1>
                    </div>
                    {videos.map((video, index) => (
                        <div
                            className="gallery-item video-container"
                            key={index}
                            onMouseEnter={(e) => {
                                const btn = e.currentTarget.querySelector(".play-pause-btn");
                                if (btn) btn.style.opacity = 1;
                            }}
                            onMouseLeave={(e) => {
                                const btn = e.currentTarget.querySelector(".play-pause-btn");
                                if (btn) btn.style.opacity = 0;
                            }}
                        >
                            <video
                                ref={(el) => (videoRefs.current[index] = el)}
                                src={video}
                                alt={`Video ${index + 1}`}
                                loop
                            />
                            <button
                                className="play-pause-btn"
                                onClick={() => handlePlayPause(index)}
                            >
                                {playingIndex === index ? "❚❚" : "▶"}
                            </button>
                        </div>
                    ))}
                </div>
                <Footer></Footer>
            </div>
        </ReactLenis>
    );
};

export default Gallery;
