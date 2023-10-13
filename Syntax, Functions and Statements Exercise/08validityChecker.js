function validityChecker(x1, y1, x2, y2) {

    function solve(x1, y1, x2, y2) {
        const formula = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

        let output = '';
        if (Number.isInteger(formula)) {
            output = `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`
        } else {
            output = `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`
        }
        console.log(output);
    }

    solve(x1, y1, 0, 0)
    solve(x2, y2, 0, 0)
    solve(x1, y1, x2, y2)



}
validityChecker(3, 0, 0, 4)
//{3, 0} to {0, 0} is valid
//{0, 4} to {0, 0} is valid
//{3, 0} to {0, 4} is valid
console.log(`---------------------------`);

validityChecker(2, 1, 1, 1)
//{2, 1} to {0, 0} is invalid
//{1, 1} to {0, 0} is invalid
//{2, 1} to {1, 1} is valid

