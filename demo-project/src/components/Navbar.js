import React from "react";
import  { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to="/">
                    {/* this h1 will be changed to img once I have a logo created */}
                    <h1 className="logo">Logo Will Go here</h1>
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