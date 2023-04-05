function processOddPositions(array) {
    array = array
        .filter((a, i) => i % 2 != 0)
        .map((a) => a * 2)
        .reverse()
        .join(` `)
   
        return array
}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])
