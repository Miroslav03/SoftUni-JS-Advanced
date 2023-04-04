function wordUppercase(string){

    const regex = /[a-zA-Z0-9]+/g
    const matches = string.match(regex)
    const finalArr = []

    for (let i = 0; i < matches.length; i++) {
        let element = matches[i];
        element = element.toUpperCase()
        finalArr.push(element)
    }

    console.log(finalArr.join(`, `));


}
wordUppercase('Hi, how1 are you?')
wordUppercase('hello')