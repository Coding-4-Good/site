import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Gallery.css";
import ButtonSmall from "../../Components/Buttons/ButtonLarge/ButtonLarge";
import Footer from "../../Components/Footer/Footer";

// Image URLs
const image1 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/be8d5d5eb6a96d353eeeebce56abd8242e189052_1.jpg";
const image2 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/cba36154fa07a443db5f17d976aa9b9a96e60b89_2.jpg";
const image3 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f410ebfe2ad99685577a6f86275a68dfc2bc873b_3.jpg";
const image4 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/297542b35639474eed79cfe28061514b18c108b1_4.jpg";
const image5 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4378cd5551600bb85a61a3c8c751de0c34363f36_5.jpg";
const image6 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c2dee6b37a1663fb43ab0752c28d9c3ede6e17ca_6.jpg";
const image7 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/489979409c69b98e170ad68c7c3f95d8005e60cf_7.jpg";
const image8 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/d0b2d4135ef4054a4a3bcd9367bcbd785ccaab37_8.jpg";
const image9 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/ca0cec1b48b5e2d241b030ccdcff33fc908ebc10_9.jpg";
const image10 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/2c3a5ed4eb80fcfdde1c6e594a3b92c3705df649_10.jpg";
const image11 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/1927bd35ae6217fad8002b12a34a0ae195071fe4_12.jpg";
const image12 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/5d9ff5d283667940af6870c70c9ffe2e7046bc75_13.jpg";
const image13 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/75205021dc05d003fad405e11c15b529ab0bcd4a_14.jpg";
const image14 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/58b23da044028e7619f1bbd8043a13ff9eee2b31_15.jpg";
const image15 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/dfe9ee917238dd1a2bf9136ef6fc2a53296bc0b4_16.jpg";
const image16 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/34b42d3af8ddec0cbc5b17b659fc8698a517bf04_17.jpg";
const image17 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/eeeef74e8b834caa3010a7744cc923b3690af175_18.jpg";
const image18 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a9065146487d8f38254bfaaa913b715fa17f40e7_19.jpg";
const image19 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/3cd46c7b63f98d3ad889ea4b69321a14ae80e760_20.jpg";
const image20 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/0e1a7e9c9c79b75e98097d29affc171b2269f392_21.jpg";
const image21 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/29e36f58497f62304ea609c0f01d79ba6d719bf6_22.jpg";
const image22 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a2333992a9c74d83657839604c4b86ad9c9ae33_23.jpg";
const image23 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4fbe22662581d2e8e926af93a0912edb5abce2f3_24.jpg";
const image24 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/fa757becddbf82a66e9f57fbc4f4aa0ddbda57ce_25.jpg";
const image25 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/bc14dd3d170c1ebdb148c742fd1297b4fd823c3d_26.jpg";
const image26 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c7611e72c40e04095379f016f0d782e50401c9b0_27.jpg";
const image27 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/3c3aa85727118ec0d5af6e352fc768b84a5b83a7_28.jpg";
const image28 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4aa348322240c240eb6a3755f63facf96fb143a2_29.jpg";
const image29 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4dea70f0998791f7af0ee64f75f69b9c6a6f2204_30.jpg";
const image30 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/463eaa64d8afeb70f51bf8483285d12e4312cf0e_31.jpg";
const image31 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/fa757becddbf82a66e9f57fbc4f4aa0ddbda57ce_32.jpg";
const image32 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/5c3149615fbab676632cd5a6bec963aed85297dd_33.jpg";
const image33 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/039c2181570c7b7ff357a442d1a7ec0e220abc7a_34.jpg";
const image34 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/5fa901d6133d22826fe94b20997d420ac04e2206_35.jpg";
const image35 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/88f8603f3b01b30c1bdb0d3edacfa831910fc15e_36.jpg";
const image36 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/7b4e27b2df7aae23d1aac558ff425c004fe11cf9_37.jpg";
const image37 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c7611e72c40e04095379f016f0d782e50401c9b0_38.jpg";
const image38 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/51a2bcee80b5397f344eee45d5f7a39d57ecee12_39.jpg";
const image39 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4dea70f0998791f7af0ee64f75f69b9c6a6f2204_40.jpg";

// Video URLs
const video1 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/6f7a800d6df1fed649ea88ed9e1b29e406463847_video1.mp4";
const video2 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/f0525eec6e948d3fc00c8a8adb22e76f7acb27f1_video2.mp4";
const video3 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/242810004b07e5f9661798e3f84b6cdd2e0bbfff_video3.mp4";
const video4 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/2856ae203ff8f3fb3f6475f9921ec7e4eab80fd1_video4.mp4";
const video5 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/9f9794dabe78725c1e756f88a9d6d76ce6e11a68_video5.mp4";
const video7 = "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a4f4030e74e6a219bea4a168cad53bc440e91e78_video7.mp4";


const Gallery = () => {
    const navigate = useNavigate();
    const [imagesText, setImagesText] = useState("Images");
    const [videosText, setVideosText] = useState("Videos");
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
                <div className="images-sa">
                    {images.map((img, index) => (
                        <div className="gallery-item" key={index}>
                            <img src={img} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="img-saddf">
                    <h1>{videosText}</h1>
                </div>
                <div className="videos">
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
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;
