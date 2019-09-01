import React, { Component } from 'react';
import Calendar from '../../cmps/Calendar/Calendar'
import ReservationService from '../../Services/ReservationService';

class CalenderPage extends Component {

    state = { reservations: [] }

    async componentDidMount() {
        const reservations = await ReservationService.getReservations();
        this.setState({ reservations });
    }

    render() {
        return (
            <div>
                <h1>Hi, Admin!</h1>
                <Calendar {...this.state}></Calendar>
            </div>
        )
    }

}



export default CalenderPage;