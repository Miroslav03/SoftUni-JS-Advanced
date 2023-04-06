function equalNeighbors(matrix){


    let neighbors = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            const firstEl = matrix[i][j]
            const secondEl = matrix[i][j+1]
            if(firstEl === secondEl){
                neighbors++
            }
        }
        
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length-1; j++) {
            const firstEl = matrix[j][i]
            const secondEl = matrix[j+1][i]
            if(firstEl === secondEl){
                neighbors++
            }
        }
        
    }

    console.log(neighbors);

}
equalNeighbors([['2', '3', '4', '7', '7'],
               ['4', '0', '1', '3', '4'],
                ['2', '3', '1', '4', '2'],
                ['9', '8', '7', '7', '7']]
)

equalNeighbors([['test', 'yes', 'yo', 'ho'],
               ['well', 'done', 'yo', '6'],
                ['not', 'done', 'yet', '5']]
)

//equalNeighbors([[2, 2, 5, 7, 4],
                //[4, 0 ,5, 3, 4],
                //[2, 5, 5, 4, 2]]
//)
//equalNeighbors([[1,2,1],
                //[3,4,3],
                //[0,2,2]])

//equalNeighbors(['test', 'yo', 'yo', 'ho', 'well', 'done', 'yo', '6', 'not', 'done', 'yet', '5']);
                

