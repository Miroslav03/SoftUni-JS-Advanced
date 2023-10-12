function aggregatElements(arr) {
    let sum = 0;
    let inverseSum = 0;
    let string = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
        inverseSum += 1 / element
        string += String(element);
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(string);

}
aggregatElements([1, 2, 3])
aggregatElements([2, 4, 8, 16])