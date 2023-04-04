function validityChecker(x1, y1, x2, y2) {

    const firstDistance = Math.sqrt((0 - x1) * (0 - x1) + (0 - y1) * (0 - y1))

    if (Number.isInteger(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    const secondDistance = Math.sqrt((x2 - 0) * (x2 - 0) + (y2 - 0) * (y2 - 0))

    if (Number.isInteger(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    const thirdDistance = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

    if (Number.isInteger(thirdDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
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

