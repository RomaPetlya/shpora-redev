import React from "react";
import reactLogo from "../assets/react.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="logo">
                        <img
                            src={reactLogo}
                            className="logo react"
                            alt="React logo"
                        />
                        <p className="logo-text">CSR React</p>
                    </div>
                    <div className="nav">
                        <NavLink to="/" className="nav-item">
                            Home
                        </NavLink>

                        <NavLink to="/learn" className="nav-item">
                            Learn
                        </NavLink>
                        <a href="https://react.dev/learn" className="nav-item" target="blank">
                            Documentation
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
