function solve() {
  const [generateBox, buyBox] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  const table = document.querySelector('table');
  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', () => {
    const input = JSON.parse(generateBox.value);
    for (const obj of input) {
      const tr = document.createElement('tr');
      //image
      const imageTd = document.createElement('td');
      const img = document.createElement('img');
      img.src = obj.img;
      imageTd.appendChild(img);
      tr.appendChild(imageTd);
      tbody.appendChild(tr);
      //name
      const nameTd = document.createElement('td');
      const nameP = document.createElement('p');
      nameP.textContent = obj.name;
      nameTd.appendChild(nameP);
      tr.appendChild(nameTd);
      //price
      const priceTd = document.createElement('td');
      const priceP = document.createElement('p');
      priceP.textContent = obj.price;
      priceTd.appendChild(priceP);
      tr.appendChild(priceTd);
      //decoration factor
      const decorationTd = document.createElement('td');
      const decorationP = document.createElement('p');
      decorationP.textContent = obj.decFactor;
      decorationTd.appendChild(decorationP);
      tr.appendChild(decorationTd);
      //mark 
      const markTd = document.createElement('td');
      const markInput = document.createElement('input');
      markInput.type = 'checkbox';
      markTd.appendChild(markInput);
      tr.appendChild(markTd);
    }
  })

  buyBtn.addEventListener('click', () => {
    const checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const bought = [];
    const totalSum = [];
    const averageDecoration = [];
    for (const checkbox of checkBoxes) {
      if (checkbox.checked) {
        const allTdonRow = Array.from(checkbox.parentElement.parentElement.querySelectorAll('td'));
        const name = allTdonRow[1].textContent;
        const price = Number(allTdonRow[2].textContent);
        const decorationFactor = Number(allTdonRow[3].textContent)
        bought.push(name);
        totalSum.push(price);
        averageDecoration.push(decorationFactor);
      }
    }
    let totalPrice = (totalSum.reduce((a, x) => a + x, 0)).toFixed(2)
      const boughtString = bought.join(', ')
      let average = averageDecoration.reduce((a, x) => a + x, 0)
      average = average / averageDecoration.length

      buyBox.textContent += `Bought furniture: ${boughtString}`
      buyBox.textContent += `\nTotal price: ${totalPrice}`
      buyBox.textContent += `\nAverage decoration factor: ${average}`
  })


}