function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day)
    let number = date.getDate()
    if (day == 1) {
        date = new Date(year, month - 1, 0)
        console.log(`${year}-${date.getMonth() + 1}-${date.getDate()}`);
    } else {
        console.log(`${year}-${date.getMonth() + 1}-${number - 1}`);
    }

}
previousDay(2016, 9, 30)
previousDay(2015, 5, 10)
