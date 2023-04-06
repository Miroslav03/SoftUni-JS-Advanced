function magicMatrices(matrix) {
    let sum = 0;
    let totalSum = 0
    sum = matrix[0].reduce((accumulaator, x) => accumulaator + x, 0)
    let flag = true
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i]
        totalSum = matrix[i].reduce((accumulaator, x) => accumulaator + x, 0)
        if (totalSum == sum) {
            flag = true
        } else {
            console.log(`false`);
            return
        }
    }
    totalSum = 0

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const element = matrix[j][i];
            totalSum += element
        }
        if (totalSum == sum) {
            totalSum = 0
            flag = true
        } else {
            console.log(`false`);
            return
        }
    }

    console.log(flag);

} magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)