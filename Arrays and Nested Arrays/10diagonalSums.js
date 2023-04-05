function diagonalSums(matrix) {

    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i][i];
        firstSum += element;
        matrix[i].reverse()
    }

    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i][i];
        secondSum += element;
    }

    console.log(firstSum, secondSum);
    
}

function diagonalSums(input) {

    let firstSum = 0;
    let secondSum = 0;
 
    for (let i = 0; i < input.length; i++) {
        firstSum += input[i][i];
        secondSum += input[i][input.length - 1 - i];
    }
    console.log(firstSum, secondSum);
}

diagonalSums([[20, 40],
[10, 60]]
)
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)