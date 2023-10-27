function largestNumber(text, convension) {

    let arr = text.split(' ')
    finalWord = ''
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const firstPart = element.slice(0, 1).toUpperCase()
        const secondPart = element.slice(1).toLowerCase()
        const string = firstPart + secondPart
        finalWord += string

    }
    console.log(finalWord);


    

}
largestNumber("this is an example", "Camel Case")