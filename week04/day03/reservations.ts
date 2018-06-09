'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  bookingID: string;

  constructor() {
    this.bookingID = this.getCodeBooking() + ' for ' + this.getDowBooking();
  }

  getDowBooking(): string {
    let daysOfTheWeek: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let randomNumber: number = Math.floor(Math.random() * 7);

    return daysOfTheWeek[randomNumber];
  }

  getCodeBooking(): string {
    let possibleCharacterToUse: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWZXY';
    let randomNumber: number;
    let bookingCode: string = '';

    for (let i: number = 0; i < 8; i++) {
      randomNumber = Math.floor(Math.random() * 36);
      bookingCode = bookingCode.concat(possibleCharacterToUse[randomNumber]);
    }

    return bookingCode;
  }
}

let reservation: Reservation = new Reservation();

console.log(`Booking# ${reservation.bookingID}`);
