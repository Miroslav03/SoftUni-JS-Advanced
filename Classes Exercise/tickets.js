function tickets(array, sortBy) {
    let finalArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price
            this.status = status;
        }
    }

    for (let i = 0; i < array.length; i++) {
        let [destination, price, status] = array[i].split('|');
        price = Number(price);
        const command = new Ticket(destination, price, status);
        finalArr.push(command);

    }

    switch (sortBy) {
        case 'destination': {
            return finalArr.sort((a, b) => a.destination.localeCompare(b.destination));
        }
        case 'status': {
            return finalArr.sort((a, b) => a.status.localeCompare(b.status));  
        }
        case 'price': {
            return finalArr.sort((a, b) => a.price - b.price);
        }
    }

}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')