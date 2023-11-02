function sortArray(array, command) {

    return command == 'desc' ? array = array.sort((a,b) => b - a) : array = array.sort((a,b) => a - b);
}
sortArray([14, 7, 17, 6, 8], 'desc')