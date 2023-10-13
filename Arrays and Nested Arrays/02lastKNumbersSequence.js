function lastKNumers(n, k) {

    const arr = [1];
    const finalArr = [1]
    let value = 0;
    for (let i = 0; i < n; i++) {
        value = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        finalArr.push(value);
        arr.push(value);
        if (arr.length > k) {
            arr.shift()
        }
        value = 0;
    }
    finalArr.pop()
    return finalArr
}



lastKNumers(6, 3)
lastKNumers(8, 2)