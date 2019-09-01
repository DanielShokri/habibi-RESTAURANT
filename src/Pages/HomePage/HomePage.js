import React, { Component } from 'react';
import './HomePage.css'
import { Button } from 'antd';
import Carousel from '../../cmps/Carousel/Carousel'
import { NavLink } from "react-router-dom";

import Menu from '../../cmps/Menu/Menu'
import ReservationHero from '../../cmps/Reservation/ReservationHero'
import Footer from '../../cmps/Footer/Footer'
import AppHeader from '../../cmps/AppHeader/AppHeader'

const HomePage = () => {

    return (
        <div>
            <AppHeader></AppHeader>
            <div className="hero-image" id="home">
            </div>
            <div className="hero-text">
                <h1 className="home-title">Israeli Cuisine in Tel-Aviv</h1>
                <p>HABIBI</p>
                <h3 className="food-desc">Kabobs × hummus&nbsp;× TAbboulleh&nbsp;× pita wraps</h3>
            </div>
            <div className="section-wrapper">
                <div className="res-desc" id="restaurant">
                    <h2 className="section-restaurant-title">A little about us</h2>
                    <p><strong>At Habibi Israeli Restaurant, we offer customers authentic Israeli cuisine. With a variety of traditional dishes, there is something to appeal to anyone.</strong></p>

                    <p>Treat yourself to authentic, traditional, Israeli cuisine at Habibi Restaurant in Tel-Aviv . Our experienced staff offers a new approach to dining out. The market for Israeli cuisine is untapped in this area, so we are happy to add a new level of variety.</p>

                    <p><strong>All of our dishes are made from scratch using fresh ingredients and spices imported from Lebanon. Visit us today to try any of our delicious entrees.</strong></p>

                    <p>Habibi Restaurant is a family owned business that has been a long time coming. Our main goal in this business is to bring a diverse taste along with a glimpse of the Israeli culture to Tel-Aviv. All of our dishes are direct results of family recipes that have been passed down from generation to generation. One thing you will notice when you come visit us is that we are 100% dedicated on customer service and will go the extra mile to to satisfy our customer.</p>
                    <p>
                        We offer lunch and dinner, complete with healthy, natural food options. Our menu consists of 50% meat based platters and 50% vegetarian platters. We offer an eclectic selection including:</p>

                    <p>
                        Lunch is served daily from 10:30am -4:00pm. With a relaxed, casual setting, complete with Israeli music, your visit with us is sure to be a memorable one. Since we are located downtown, we encourage our community business people to join us for lunch. Additionally, we offer our full menu for takeout or you can request our catering service by contacting us here or calling 08-445-8874.</p>
                    <p>
                        In addition to our lunch, catering and takeout services, we offer a fine dining experience for dinner.  Dinner is offered daily from 4:00pm - 9:30pm except on Sundays. All of our items are prepared fresh daily, and meals are cooked to order. We also serve a variety of deserts such as bakalava and namoura. We now also offer free Wi-Fi and military members will receive a 10% discount on an individual meal. </p>
                </div>
                <div className="side-bar">
                    <Button><NavLink to="/reservation">Make A Reservation</NavLink></Button>
                    <h3 className="sidebar-details">PHONE</h3>
                    <p>08-445-8874</p>
                    <h3 className="sidebar-details">LOCATION</h3>
                    <p>Allenby 10, Tel-Aviv.</p>
                    <h3 className="sidebar-details">HOURS</h3>
                    <p><strong>Sunday-Thursday</strong> - 12:00 - 01:00</p>
                    <p>This is a map</p>
                </div>
            </div>
            <Carousel></Carousel>
            <Menu></Menu>
            <ReservationHero></ReservationHero>
            <Footer></Footer>
        </div>
    )
}


export default HomePage; 