function greatestCommonDivisor(n1,n2){

    const biggerNumber = Math.max(n1,n2)
    let greatestCommonDivisor = 0
    for (let i = 1; i <= biggerNumber; i++) {
        const currentNumber = i;
        if(n1%currentNumber==0&&n2%currentNumber==0){
            greatestCommonDivisor = i
        }
    }

    return console.log(greatestCommonDivisor);

}
greatestCommonDivisor(2154, 458)