import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import Footer from "../../Components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.08,
            wheelMultiplier: 1.2,
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        window.platefulLenis = lenis;

        // Sync ScrollTrigger with Lenis
        lenis.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
            },
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            fixedMarkers: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="main-home-page">
            <Navbar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Footer />
        </div>
    );
}
