function negativePositive(array) {

    const arr = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            arr.unshift(element)
        } else {
            arr.push(element)
        }
        
    }

    console.log(arr);

}
negativePositive([7, -2, 8, 9])
negativePositive([3, -2, 0, -1])
