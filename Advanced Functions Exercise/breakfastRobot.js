function solution() {

    const methods = { restock, prepare, report };
    const microelements = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipes = {
        apple: parseNeededIngredinets(0, 1, 0, 2),
        lemonade: parseNeededIngredinets(0, 10, 0, 20),
        burger: parseNeededIngredinets(0, 5, 7, 3),
        eggs: parseNeededIngredinets(5, 0, 1, 1),
        turkey: parseNeededIngredinets(10, 10, 10, 10)
    }

    function parseNeededIngredinets(protein, carbohydrate, fat, flavour) {
        return { protein, carbohydrate, fat, flavour }
    }

    function restock(ingrtedient, quanity) {
        microelements[ingrtedient] += Number(quanity);
        return 'Success';
    }

    function prepare(name, quanity) {
        quanity = Number(quanity);
        for (const key in microelements) {
            if ((microelements[key] - recipes[name][key] * quanity) < 0) {
                errorFlag = true;
                return `Error: not enough ${key} in stock`;
            } else{
                microelements[key] -= recipes[name][key] * quanity;
            }
        }
        return 'Success';

    } function report() {
        return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }


    return function (elements) {
        const [command, ingrtedient, quanity] = elements.split(' ');
        return methods[command](ingrtedient, quanity);
    }


}


let manager = solution (); 
console.log (manager ('restock carbohydrate 10')); // Success 
console.log (manager ('restock flavour 10',)); // Error: not enough carbohydrate in stock 
console.log (manager ('prepare apple 1',)); // Error: not enough carbohydrate in stock 
console.log (manager ('restock fat 10',)); // Error: not enough carbohydrate in stock 
console.log (manager ('prepare burger 1',)); // Error: not enough carbohydrate in stock 
console.log (manager ('report',)); // Error: not enough carbohydrate in stock 

