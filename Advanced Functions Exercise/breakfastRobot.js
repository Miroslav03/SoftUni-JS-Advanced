function solution() {
    const macronutrinets = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    const commands = {
        restock,
        prepare,
        report
    }

    const recipes = {
        apple: parseRecipeData(0, 1, 0, 2),
        lemonade: parseRecipeData(0, 10, 0, 20),
        burger: parseRecipeData(0, 5, 7, 3),
        eggs: parseRecipeData(5, 0, 1, 1),
        turkey: parseRecipeData(10, 10, 10, 10)
    }

    function parseRecipeData(protein, carbohydrate, fat, flavour) {
        return {
            protein,
            carbohydrate,
            fat,
            flavour
        }
    }
    function restock(microelement, quanity) {
        macronutrinets[microelement] += Number(quanity)
        return 'Success';
    }

    function prepare(recipe, quanity) {
        const needed = recipes[recipe];
        quanity = Number(quanity);
        for (const key in macronutrinets) {
            if ((macronutrinets[key] - needed[key] * quanity) < 0) {
                return `Error: not enough ${key} in stock`;
            }
        }
        for (const key in macronutrinets) {
            macronutrinets[key] -= needed[key] * quanity;
        }
    
        return `Success`
    }

    function report() {
        let finalString = ``
        for (const [key, value] of Object.entries(macronutrinets)) {
            finalString += `${key}=${value}` + ' ';

        }
        return finalString.trim();
    }

    return function (string) {
        const [command, second, quanity] = string.split(' ');

        return commands[command](second, quanity);
    }

}

let manager = solution();

console.log(manager("restock flavour 10"))
console.log(manager("prepare apple 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare burger 1"))
console.log(manager("report"))

