function sameNumber(number) {

    const string = String(number)
    let priviousEl = string[0];
    let flag = undefined;
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        sum+= Number(element)
        if (priviousEl == element) {
            flag = 'true'
            continue;
        } else {
            flag = 'false'
            priviousEl = element
        }
    }
    console.log(flag);
    console.log(sum);
}
sameNumber(1234)