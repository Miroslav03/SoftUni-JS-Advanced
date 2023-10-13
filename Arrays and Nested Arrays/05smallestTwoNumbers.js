function smallestTwoNumbers(array) {

    array = array.sort((a, b) => a - b)
    console.log(array[0] + ' ' + array[1]);

}
smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])
