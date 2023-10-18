function rotateArr(array,n){

    for (let i = 0; i < n; i++) {
        const lastElement = array.pop();
        array.unshift(lastElement)
    }
    console.log(array.join(' '));
}
rotateArr(['1', 
'2', 
'3', 
'4'], 
2
)
rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)