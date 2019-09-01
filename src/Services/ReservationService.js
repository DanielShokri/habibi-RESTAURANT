import StorageService from "./StorageService";
import moment from 'moment';


export default {
    getReservations,
    addReservation
}


let reservations = [
    {
        email: "danielshokri@gmail.com",
        end: "2019-09-01T12:08:57.541Z",
        people: 2,
        phone: "052-4337900",
        smoking: false,
        start: "2019-09-02T10:08:57.541Z",
        terms: true,
        title: "moshe",
        _id: "cWVZJk1YDS",
    },
    {
        email: "danielshokri@gmail.com",
        end: "2019-09-01T12:08:57.541Z",
        people: 2,
        phone: "052-4337900",
        smoking: true,
        start: "2019-09-02T10:08:57.541Z",
        terms: true,
        title: "dani",
        _id: "cWVZJk1YDS",
    },

]


function getReservations() {
    let reservationDB = StorageService.load('reservations')
    if (reservationDB) return Promise.resolve(reservationDB)
    return new Promise((resolve, reject) => {
        resolve(reservations)
        StorageService.save('reservations', reservations);
    })
}




function addReservation(reservation) {
    return new Promise((resolve, reject) => {
        reservation._id = _makeId()
        reservations.push(reservation)
        StorageService.save('reservations', reservations);
        resolve(reservations)
        console.log('The resesvation is save!')
    })
}







function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}