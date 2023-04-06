function sortingNumbers(array) {

    array.sort((a, b) => a - b)
    let finalArr = [];
    const length = Math.ceil(array.length / 2);
    for (let i = 1; i <= length; i++) {
        const currentSmallest = array.shift();
        const currentHighest = array.pop();
        finalArr.push(currentSmallest);
        finalArr.push(currentHighest);
    }
    finalArr = finalArr.filter(a => a != undefined)
    return finalArr
    
}
function sortingNumbers(array) {

    array.sort((a, b) => a - b);
    let finalArr = [];
    while(array.length !=0){
        finalArr.push(array.shift());
        finalArr.push(array.pop());
    }
    return finalArr;
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

