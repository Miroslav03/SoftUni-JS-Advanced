  function solve() {
    const wordCase = document.getElementById(`naming-convention`).value
    const text = document.getElementById('text').value

    let finalWord = ``
    switch (wordCase) {
      case 'Camel Case': {
        finalWord = ``
        const words = text.split(` `).map(a => a.toLowerCase())
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
        finalWord = ``
        const words = text.split(` `).map(a => a.toLowerCase())
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
      default: {
        finalWord = `Error!`
      }
    }

    document.getElementById(`result`).textContent = finalWord

  }