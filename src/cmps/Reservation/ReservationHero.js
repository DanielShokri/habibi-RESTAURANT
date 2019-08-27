import React, { Component } from 'react';
import './ReservationHero.css'
import { Button } from 'antd';


export default function ReservationHero() {
    return (
        <div className="reservation-hero">
            <h2>Make A Reservation</h2>
            <p><strong>Our restaurant is open between:</strong> 12:00 - 01:00</p>
            <Button>Make A Reservation</Button>
        </div>
    )
}

