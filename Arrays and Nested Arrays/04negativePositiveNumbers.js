function negativePositive(array) {
    const finalArr = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= 0) {
            finalArr.push(element)
        } else {
            finalArr.unshift(element)
        }

    }
    console.log(finalArr.join(`\n`));

}
negativePositive([7, -2, 8, 9])
negativePositive([3, -2, 0, -1])
