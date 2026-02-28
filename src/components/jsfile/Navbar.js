import React from "react";
import "../cssfiles/Navbar.css";
import { NavLink } from "react-router-dom"
function Navbar() {
    return (
        <nav className="nav">
            <img className="dinosourimg" src="https://i.pinimg.com/736x/a8/42/18/a84218362cf120b7e498fbd46bdcf04b.jpg" alt="image not found" />
            <h1 className="title">PlayWithDsa</h1>
            <ul className="menu">
                <li><NavLink to="/" className="menuList">Home</NavLink></li>
                <li><NavLink to="/about" className="menuList">About</NavLink></li>
            </ul>
        </nav>
    );
}
export default Navbar;