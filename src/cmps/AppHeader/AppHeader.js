import React, { Component } from 'react';
import './AppHeader.css'
import { Link, animateScroll as scroll } from "react-scroll";

class AppHeader extends Component {

    render() {
        return (
            <header className="header">
                <a className="logo" href=".page-top">HABIBI</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><a href="#one" className="link link-theme link-arrow">HOME</a></li>
                    <li><a href="#two" className="link link-theme link-arrow">RESTAURANT</a></li>
                    <li><a href="#three" className="link link-theme link-arrow">MENU</a></li>
                    <li><a href="#four" className="link link-theme link-arrow">RESERVATIONS</a></li>
                </ul>
            </header>
        )
    }
}


export default AppHeader;
