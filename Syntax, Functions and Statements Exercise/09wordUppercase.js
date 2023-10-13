function wordUppercase(string) {
    const martched = string.match(/\w+/g)
    
    const finalArr = []
    for (let i = 0; i < martched.length; i++) {
        const element = martched[i].toUpperCase();
        finalArr.push(element);
    }
    console.log(finalArr.join(', '))
}
wordUppercase('Functions in JS can be nested, i.e. hold other functions')
