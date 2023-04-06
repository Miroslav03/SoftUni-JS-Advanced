function listOfNames(array) {

    array.sort((a, b) => a.localeCompare(b)).join(`\n`)

    for (let i = 0; i < array.length; i++) {
        const name = array[i];
        console.log(`${i+1}.${name}`);
        
    }

}
listOfNames(["John", "Bob", "Christina", "Ema"])
