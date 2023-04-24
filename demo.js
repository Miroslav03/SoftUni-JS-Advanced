function solve(text, wordCase) {
    let finalWord = ``
    switch (wordCase) {
        case 'Camel Case': {
            const words = text.split(` `)
            const firstWord = words.shift()
            finalWord = firstWord
            for (let i = 0; i < words.length; i++) {
                const element = words[i];
                let currentWord = ``
                for (let j = 0; j < element.length; j++) {
                    let letter = element[j];
                    if (j == 0) {
                        letter = letter.toUpperCase()
                    }
                    currentWord += letter
                }
                finalWord += currentWord
            }

            break;
        }
        case 'Pascal Case': {
            const words = text.split(` `).map(a => a.toLowerCase())
            finalWord = ''
            for (let i = 0; i < words.length; i++) {
                const element = words[i];
                let currentWord = ``
                for (let j = 0; j < element.length; j++) {
                    let letter = element[j];
                    if (j == 0) {
                        letter = letter.toUpperCase()
                    }
                    currentWord+=letter
                }
                finalWord+=currentWord
            }
            
            break;
        }
        default:{
            finalWord = 'Error'
        }
            break;
    }
    console.log(finalWord);  

} solve("tdsaaddd saddsa", "Pascal Case")