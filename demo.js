function solve(string) {

    const splitedText = string.split(`.`).filter(a => a)
    let finalString = `<p>`
    let counter = 0
    const paragraphArr = []
    for (let i = 0; i < splitedText.length; i++) {
        const element = splitedText[i];
        if (counter == 3) {
            counter = 0
            finalString += `</p>`
            output.innerHTML += finalString
            finalString = `<p>`
            i--
        }
        else if (i == splitedText.length - 1) {
            finalString += element + `</p>`
            output.innerHTML += finalString
            
        } else {
            finalString += element + `.`
            counter++

        }
    }
    console.log(paragraphArr);

} solve(`aa. a. a.`)