import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function AppRouter() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/gallery" element={<Gallery />} />
            </Routes>
        </BrowserRouter>
    );
}
