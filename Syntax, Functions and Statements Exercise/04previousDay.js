function previousDay(year,month,day){

    const date = new Date(year,month - 1,day-1)

    const days = date.getDate()
    const months = date.getMonth() + 1
    const years = date.getFullYear()

    console.log(`${years}-${months}-${days}`);   
}
previousDay(2016, 9, 30)
previousDay(2015, 5, 10)
