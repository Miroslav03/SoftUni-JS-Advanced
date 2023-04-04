function sumOfNumbers(n1,n2){

    const firstNum = Number(n1)
    const secondNum = Number(n2) 
    let sum = 0 

    for (let i = firstNum; i <= secondNum; i++) {
        const number = i
        sum+= number
    }

    console.log(sum)

}
sumOfNumbers('1', '5' )