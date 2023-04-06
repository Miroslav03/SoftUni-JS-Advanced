function printEveryNthElement(array,n){
    const finalArr = [];

    for (let i = 0; i < array.length; i+=n) {
        const element = array[i];
        finalArr.push(element);
    }

   return finalArr
}
printEveryNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
printEveryNthElement(['dsa',
'asd', 
'test', 
'tset'], 
2
)
printEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6
)