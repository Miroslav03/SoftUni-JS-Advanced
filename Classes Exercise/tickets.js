function tickets(array, sortBy) {
    const finalArr = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (const el of array) {
        let [name, price, departed] = el.split('|');
        price = Number(price)
        const currentTicket = new Ticket(name, price, departed);
        finalArr.push(currentTicket);
    }

    switch (sortBy) {
        case 'status': {
            finalArr.sort((a, b) => a.status.localeCompare(b.status))
            break;
        } case 'destination': {
            finalArr.sort((a, b) => a.destination.localeCompare(b.destination))
            break;
        } case 'price': {
            finalArr.sort((a, b) => a.price - b.price)
            break;
        }
    }
   
    return finalArr
}
tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status')
console.log('------------------------');
    tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'destination'
   )