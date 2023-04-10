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

} 

function magicMatrices(matrix) {
    let rowSum = 0;
    let colSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i].join('');
        for (let j = 0; j < row.length; j++) {
            rowSum += Number(row[j]);
            colSum += Number(row[0]);
        }
        
    }
    if(rowSum ==colSum){
        return console.log('true');
    }else{
        return console.log('false');
    }
}
magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   
)