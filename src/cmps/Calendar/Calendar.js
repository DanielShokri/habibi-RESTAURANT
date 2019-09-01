import React, { Component } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Tooltip, Popover } from 'antd';
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


class Calender extends Component {

    toolTipEvent = ({ event }) => {
        const content = (
            <div>
                <p>Customer Name: <strong>{event.title}</strong></p>
                <p>Reservation Time: <strong>{moment(event.endDate).format('LT')}</strong></p>
                <p>Phone: <strong>{event.phone}</strong></p>
                <p>People: <strong>{event.people}</strong></p>
                <p>Smoking: <strong>{event.smoking ? 'Yes' : 'No'}</strong></p>
            </div>
        )
        return (
            <div>
                <div>
                    <Popover content={content} title="Reservation">
                        <strong>{event.title}</strong>
                    </Popover>
                </div>
            </div>
        )
    }

    render() {
        console.log(this.props.reservations)
        const { reservations } = this.props
        const localizer = momentLocalizer(moment)
        console.log(reservations.map((rese) => {
            return {
                title: rese.title,
                startDate: moment(rese.start).toDate(),
                endDate: moment(rese.end).toDate(),
                phone: rese.phone,
                smoking: rese.smoking,
                people: rese.people
            }

        }))
        return (
            reservations && (
                <div style={{ height: '500pt' }}>
                    <Calendar
                        popup
                        step={15}
                        timeslots={8}
                        localizer={localizer}
                        events={reservations.map((rese) => {
                            return {
                                title: rese.title,
                                startDate: moment(rese.start).toDate(),
                                endDate: moment(rese.end).toDate(),
                                smoking: rese.smoking,
                                phone: rese.phone,
                                people: rese.people
                            }
                        })}
                        components={{
                            event: this.toolTipEvent,
                        }}
                        startAccessor="startDate"
                        endAccessor="endDate"
                    />
                </div>
            )
        )
    }
}




export default Calender;