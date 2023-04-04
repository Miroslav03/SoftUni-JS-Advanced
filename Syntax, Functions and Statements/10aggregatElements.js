function aggregateElements(array){

    function sumArr(array){
        let sum  = 0
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            sum+=element
        }
        return sum
    }   

    function inverseValue(array) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            const element = 1/array[i];
            sum+=element
        }
        return sum
    }

    function concatenateValues(array){
        let string = ``
        for (let i = 0; i < array.length; i++) {
            const element = String(array[i]);
            string+=element;
        }
        return string
    }

    console.log(sumArr(array))
    console.log(inverseValue(array)) 
    console.log(concatenateValues(array))


}
aggregateElements([1, 2, 3])