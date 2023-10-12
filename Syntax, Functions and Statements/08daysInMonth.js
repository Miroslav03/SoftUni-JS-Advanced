function daysInAMonth(month, year) {

    const date = new Date(year, month , 0)
    const days = date.getDate()
    console.log(days);
}
daysInAMonth(1, 2012)