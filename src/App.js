import React from "react";
import "./App.css";
import Navbar from "./components/jsfile/Navbar.js";
import InputConversion from "./components/jsfile/InputConversion.js";
function App() {

    return (
        <>
            <Navbar />
            <div className="flexbox">
                <InputConversion />
            </div>

        </>
    )
}
export default App;