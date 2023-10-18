function processOddPositions(array) {
    const newArr = array.filter((v, i) => i % 2 != 0)
        .map((v) => v * 2)
        .reverse()
        .join(' ')
    return newArr;
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])
