import React from "react";
import "./App.css";
import Navbar from "./components/jsfile/Navbar.js";
import InputConversion from "./components/jsfile/InputConversion.js";
import About from "./components/jsfile/About.js";
import { Routes, Route } from "react-router-dom";
function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/"
                    element={<div className="flexbox">
                        <InputConversion /></div>} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;