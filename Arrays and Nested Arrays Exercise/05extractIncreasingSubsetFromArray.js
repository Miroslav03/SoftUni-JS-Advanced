function extractSubset(array) {
    let currentHighest = 0;
    const finalArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element >= currentHighest) {
            currentHighest = element;
            finalArr.push(element);
        }
    }

    return finalArr;


}
extractSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
extractSubset([1,
    2,
    3,
    4]
)
