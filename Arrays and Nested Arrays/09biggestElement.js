function biggestElement(matrix) {

    matrix = matrix.map(a => a.join(` `)).join(` `).split(` `).map(Number).sort((a, b) => a - b);
    return matrix.pop();

}
function biggestElement(matrix) {

    let biggestNumber = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        let row  = matrix[i]
        for (let j = 0; j < row.length; j++) {
            const element  = row[j]
            if(element > biggestNumber){
                biggestNumber = element
            }else{
                continue;
            }

        }

    }
    console.log(biggestNumber);

}

biggestElement([[20, 50, 10],
[8, 33, 145]]
)
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
)
