import StorageService from "./StorageService";
import moment from 'moment';


export default {
    getReservations,
    addReservation
}


let reservations = [

    {
        email: "danielshokri@gmail.com",
        people: 4,
        phone: "052-4337900",
        smoking: true,
        start: "2019-09-09T18:35:43.384Z",
        terms: true,
        title: "daniel",
        _id: "MmoMaKUNvT"
    }
]


function getReservations() {
    let reservationDB = StorageService.load('reservations')
    if (reservationDB) {
        StorageService.save('reservations', reservations);
        return Promise.resolve(reservationDB)
    }
    else {
        return new Promise((resolve, reject) => {
            StorageService.save('reservations', reservations);
            resolve(reservations)
        })

    }
}




function addReservation(reservation) {
    return new Promise((resolve, reject) => {
        reservation._id = _makeId()
        reservations.push(reservation)
        StorageService.save('reservations', reservations);
        console.log('The reservation is save!')
        resolve(reservations)
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