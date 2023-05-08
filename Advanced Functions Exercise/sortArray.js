function sortArray(array, command) {

    return command == 'asc' ? array = array.sort((a,b) => a - b): array = array.sort((a,b) => b - a);
}
sortArray([14, 7, 17, 6, 8], 'desc')