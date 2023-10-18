function biggerHalf(array) {

    array.sort((a, b) => a - b);
    const half = Math.floor(array.length / 2);
    const finalArr = [];

    for (let i = array.length - 1; i >= half; i--) {
        finalArr.push(array[i])
        
    }
    return finalArr.reverse();

    //array.sort((a, b) => a - b);
    //const half = Math.floor(array.length / 2);
    //const slicedArr = array.slice(half)
    //return slicedArr



}
//biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])
