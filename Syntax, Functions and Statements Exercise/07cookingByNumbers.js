function cookingByNumbers(...args){

    const arr = [...args]
    let number = Number(arr.shift())

    for (let i = 0; i < arr.length; i++) {
        const comand = arr[i];
        
        switch (comand) {
            case `chop`:{
                number /=2
                console.log(number);
                break;
            }
            case `dice`:{
                number = Math.sqrt(number)
                console.log(number);
                break;
            }
            case `spice`:{
                number +=1
                console.log(number);
                break;
            }
            case `bake`:{
                number *=3
                console.log(number);
                break;
            }
            case `fillet`:{
                number = number - 0.2*number
                console.log(number);
                break;
            }

        }
    }

    

}cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')