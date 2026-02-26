import React from "react";
import "../cssfiles/Navbar.css";
function Navbar() {
    return (
        <nav className="nav">
            <img className="dinosourimg" src="https://i.pinimg.com/736x/a8/42/18/a84218362cf120b7e498fbd46bdcf04b.jpg" alt="image not found" />
            <h1 className="title">PlayWithDsa</h1>
            <ul className="menu">
                <li><a href="#" className="menuList">Home</a></li>
                <li><a href="#" className="menuList">About</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;