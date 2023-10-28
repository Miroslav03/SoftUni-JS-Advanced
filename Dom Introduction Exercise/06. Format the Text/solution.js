function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');



  const newString = input.value.split('.').map((x) => x.trim()).filter((x) => x != '').filter((x) => x.length > 0)
  for (let i = 0; i < newString.length; i += 3) {
    const arr = []
    for (let j = 0; j < 3; j++) {
      if (newString[i + j]) {
        arr.push(newString[i + j])
      }
    }
    const finalStr = arr.join('. ') + '.'
    output.innerHTML += `<p>${finalStr}</p>`
  }


}