function solve() {
  const text = document.getElementById('text').value
  const convention = document.getElementById('naming-convention').value
  const result = document.getElementById('result-container')
  let finalWord = ''
  switch (convention) {
    case 'Camel Case': {
      const arr = text.split(' ')
      finalWord = arr[0].toLowerCase()
      for (let i = 1; i < arr.length; i++) {
        const element = arr[i].toLowerCase();
        const firstPart = element.slice(0, 1).toUpperCase()
        const secondPart = element.slice(1).toLowerCase()
        const string = firstPart + secondPart
        finalWord += string
      }
      break;
    }
    case 'Pascal Case': {
      const arr = text.split(' ')
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i].toLowerCase();
        const firstPart = element.slice(0, 1).toUpperCase()
        const secondPart = element.slice(1).toLowerCase()
        const string = firstPart + secondPart
        finalWord += string
      }
      break;
    }
    default: {
      finalWord = 'Error!'
    }
      break;
  }
  document.getElementById('result').textContent = finalWord
}

