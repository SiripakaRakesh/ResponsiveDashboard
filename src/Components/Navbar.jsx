import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faDashboard,
    faTimes,
    faGreaterThan,
    faProjectDiagram,
    faUserFriends,
    faDollarSign,
    faCogs,
    faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const toggleButton = document.getElementById("toggle-button");
        const navLinks = document.querySelector(".nav-links");

        const handleClick = (event) => {
            if (event.target.tagName === "A") {
                setSidebarOpen(false);
                navLinks.classList.remove("active");
            }
        };

        const handleToggle = () => {
            setSidebarOpen(!sidebarOpen);
            navLinks.classList.toggle("active");
        };

        toggleButton.addEventListener("click", handleToggle);
        navLinks.addEventListener("click", handleClick);

        return () => {
            toggleButton.removeEventListener("click", handleToggle);
            navLinks.removeEventListener("click", handleClick);
        };
    }, [sidebarOpen]);

    return (
        <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
            <button id="toggle-button" className="sidebar-toggle">
                <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} className="cross" />
            </button>
            <ul className="nav-links">
                <Link to='/' className="main">
                    <FontAwesomeIcon icon={faDashboard} />Dashboard
                </Link>
                <li>
                    <Link to='/'>
                        <div className="line">
                            <div className="left">
                                <FontAwesomeIcon icon={faDashboard} />Dashboard
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/customers'>
                        <div className="line">
                            <div className="left">
                                <FontAwesomeIcon icon={faUserFriends} />Customer
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/income'>
                        <div className="line">
                            <div className="left">
                                <FontAwesomeIcon icon={faDollarSign} />Income
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/product'>
                        <div className="line">
                            <div className="left">
                                <FontAwesomeIcon icon={faProjectDiagram} />Product
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/promote'>
                        <div className="line">
                            <div className="left">
                                <FontAwesomeIcon icon={faCogs} />Promote
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to='/help'>
                        <div className="line">
                            <div className="left">
                                <FontAwesomeIcon icon={faHandsHelping} />Help
                            </div>
                            <div className="right">
                                <FontAwesomeIcon icon={faGreaterThan} />
                            </div>
                        </div>
                    </Link>
                </li>
                <div className="account">
                    <div className="line1">
                        <div className="left1">
                            <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTcxMTEwMzR8&ixlib=rb-4.0.3&q=85" alt="rakesh-image" />
                        </div>
                        <div className="right1">
                            <p>Rakesh Siripaka</p>
                            <p>Project Manager</p>
                        </div>
                        <div className="what">
                            <FontAwesomeIcon icon={faGreaterThan}/>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;
