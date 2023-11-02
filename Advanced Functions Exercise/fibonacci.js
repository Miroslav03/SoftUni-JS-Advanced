function getFibonator() {
    const arr = [0,1]
    let index = 0
    return function create() {
        if(index < 1){
            index++
            return 1
        }else{
            const lastTwoNumSum = arr.reduce((a, x) => a + x, 0)
        arr.push(lastTwoNumSum);
        arr.shift()
        return lastTwoNumSum
        }
    }
}


let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13