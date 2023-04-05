function evenPosition(array){
    const finaalArr = []

    for (let i = 0; i < array.length; i+=2) {
        const element = array[i];
        finaalArr.push(element)
    }

    console.log(finaalArr.join(` `));

}
evenPosition(['20', '30', '40', '50', '60'])
evenPosition(['5', '10'])
