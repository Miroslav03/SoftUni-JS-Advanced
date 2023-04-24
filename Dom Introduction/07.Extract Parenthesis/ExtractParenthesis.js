function extract(content) {
    const text = document.getElementById(content).textContent
    const paattern = /\(([^)]+)\)/g
    let Arr = []

    let mathces = paattern.exec(text)

    while (mathces) {
        Arr.push(mathces[1])
        mathces = paattern.exec(text)
    }
    

    return Arr.join("; ")
}