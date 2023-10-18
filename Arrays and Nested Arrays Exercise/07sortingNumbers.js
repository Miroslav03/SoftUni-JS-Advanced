function sortingNumbers(array) {
    const finalArr = []
    array.sort((a, b) => a - b)
    
    for (let i = 0; i < array.length; i++) {
        const firstEl = array.shift()
        const lastEl = array.pop()

        finalArr.push(firstEl)
        finalArr.push(lastEl)   
    }

    return finalArr.concat(array);
}

sortingNumbers([1,
    65,
    3,
    52,
    48,
    63,
    31,
    -3,
    18,
    56])

