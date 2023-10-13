function greatestCommonDivisor(num1, num2) {

    const bigger = Math.max(num1, num2);
    let greatesDivisor = undefined;

    for (let i = 1; i <= bigger; i++) {
        const element = i;
        if (num1 % element == 0 && num2 % element == 0) {
            greatesDivisor = element;
        }
    }

    console.log(greatesDivisor);

}

greatestCommonDivisor(2154, 458)