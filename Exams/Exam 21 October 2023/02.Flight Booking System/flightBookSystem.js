class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (this.flights.find(flight => flight.flightNumber === flightNumber)) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        } else {
            this.flights.push({ flightNumber, destination, departureTime, price })
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    }

    bookFlight(passengerName, flightNumber) {
        if (!(this.flights.find(flight => flight.flightNumber === flightNumber))) {
            return `Flight ${flightNumber} is not available for booking.`
        } else {
            this.bookings.push({ passengerName, flightNumber })
            this.bookingsCount++
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }

    cancelBooking(passengerName, flightNumber) {
        if (!(this.bookings.find(booking => booking.passengerName === passengerName && booking.flightNumber === flightNumber))) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        } else {
            this.bookings.filter(booking => booking.passengerName === passengerName);
            this.bookingsCount--
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }
    }

    showBookings(criteria) {
        if (this.bookingsCount === 0) {
            throw new Error(`No bookings have been made yet.`)
        }

        switch (criteria) {
            case 'all': {
                const arr = []
                arr.push(`All bookings(${this.bookingsCount}):`)
                for (const obj of this.bookings) {
                    arr.push(`${obj.passengerName} booked for flight ${obj.flightNumber}.`);
                }
                return arr.join('\n');
            }
            case 'cheap': {
                const cheapFlights = []
                const cheapBookings = []

                for (const flight of this.flights) {
                    if (flight.price <= 100) {
                        cheapFlights.push(flight.flightNumber)
                    }
                }
                if (cheapFlights.length === 0) {
                    return "No cheap bookings found."
                }
                for (const booking of this.bookings) {
                    if (cheapFlights.find(number => number === booking.flightNumber)) {
                        cheapBookings.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`)
                    }
                }

                if (cheapBookings.length > 0) {
                    cheapBookings.unshift('Cheap bookings:')
                    return cheapBookings.join('\n')
                }
            }
            case 'expensive': {
                const expensiveFlights = []
                const expensiveBookings = []

                for (const flight of this.flights) {
                    if (flight.price > 100) {
                        expensiveFlights.push(flight.flightNumber)
                    }
                }
                if (expensiveFlights.length === 0) {
                    return "No expensive bookings found."

                }
                for (const booking of this.bookings) {
                    if (expensiveFlights.find(number => number === booking.flightNumber)) {
                        expensiveBookings.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`)
                    }
                }

                if (expensiveBookings.length > 0) {
                    expensiveBookings.unshift('Expensive bookings:')
                    return expensiveBookings.join('\n')
                }
            }

        }
    }
}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));

console.log(system.cancelBooking("Alice", "AA101"));
console.log(system.cancelBooking("Bob", "BB202"));

console.log(system.showBookings("all"));
