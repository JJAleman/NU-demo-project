import React from "react";
import  { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/vector/default.svg";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    <h1 className="logo">
                        <Logo/>
                    </h1>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About                        
                        </Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar; 