import React from 'react';
import './AppHeader.css'
import { Link } from "react-scroll";

export default function AppHeader() {
    return (
        <header className="header">
            <a className="logo" href=".page-top">HABIBI</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="link link-theme link-arrow"
                    >
                        HOME
              </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="restaurant"
                        spy={true}
                        smooth={true}
                        offset={-55}
                        duration={500}
                        className="link link-theme link-arrow"
                    >
                        RESTAURANT
              </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="link link-theme link-arrow"
                    >
                        MENU
              </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        to="reservation"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="link link-theme link-arrow"
                    >
                        RESERVATIONS
              </Link>
                </li>
            </ul>
        </header>
    )
}

