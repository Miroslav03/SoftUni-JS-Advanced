function sumOfNumbers(n, m) {

    let sum = 0;
    n = Number(n);
    m = Number(m);

    for (let i = n; i <= m; i++) {
        sum += Number(i);
    }

    return console.log(sum);

}
sumOfNumbers('1.2', '1.3')