function evenPosition(array){
    const newArr= [];
    for (let i = 0; i < array.length; i+=2) {
        const element = array[i];
        newArr.push(element)
    }
    console.log(newArr.join(' '));
}
evenPosition(['20', '30', '40', '50', '60'])
evenPosition(['5', '10'])
