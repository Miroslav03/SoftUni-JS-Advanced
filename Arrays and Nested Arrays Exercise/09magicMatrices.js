function magicMatrices(matrix) {
    const sum = matrix[0].reduce((a, v) => a + v, 0)

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        const checkSum = row.reduce((a, v) => a + v, 0);
        if (checkSum == sum) {
            continue
        } else {
            console.log('false');
            return
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = 0
        for (let j = 0; j < matrix.length; j++) {
            const element = matrix[j][i];
            rowSum += element

        }
        if(sum == rowSum){
            continue
        }else{
            console.log('false');
            return
        }

    }

    console.log('true');

}

magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]

)