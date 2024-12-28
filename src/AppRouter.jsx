import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Gallery from "./Pages/Gallery/Gallery";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home></Home>}></Route>
                <Route exact path="/gallery" element={<Gallery></Gallery>}></Route>
            </Routes>
        </BrowserRouter>
    )
}