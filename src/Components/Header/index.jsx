import React from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Header = () => { 

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogout = () => {
        // Remove the JWT token from cookies
        Cookies.remove("jwtToken");

        // Redirect to the login page
        navigate("/login");
    };

    return (
        <header>
            <div className="forbig-devices">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <img className="bigdevice-logo" src="../IMAGES/LOGO.png" alt="logo" />
                            </Link>
                        </li>

                        <li className="bigdevice-content">
                            <Link className="bigNav-link" to="/">
                                Home
                            </Link>

                            <Link className="bigNav-link" to="/jobs">
                                Jobs
                            </Link>
                        </li>

                        <li><button onClick={handleLogout} className="btn btn-primary text-white bigBtn">Logout</button></li>
                    </ul>
                </nav>
            </div>

            <div className="forsmall-devices">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <img className="smalldevice-logo" src="../IMAGES/LOGO.png" alt="logo" />
                            </Link>
                        </li>

                        <li className="smalldevice-content">
                            <Link className="nav-link" to="/">
                                <i className="fa-solid fa-house"></i>
                            </Link>

                            <Link className="nav-link" to="/jobs">
                                <i className="fa-solid fa-briefcase"></i>
                            </Link>
                        </li>

                        <li><button onClick={handleLogout} className="btn text-white"><i className="fa-solid fa-right-from-bracket"></i></button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
