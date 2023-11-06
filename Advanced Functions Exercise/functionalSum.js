function add(n) {
    let sum = 0;
    sum += n;

    function calc(anotherNum) {
        sum += anotherNum;
        return calc
    }

    calc.toString = () => sum
    
    return calc
}

console.log(add(1)(6)(-3).toString())