function solve() {

  //generateBox
  //buyBox
  const [generateBox, buyBox] = Array.from(document.querySelectorAll('textarea'));
  //generateButton
  //buyButton
  const [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));
  //table
  const table = document.querySelector('table');

  generateButton.addEventListener('click', generate);

  function generate() {
    const inputObj = JSON.parse(generateBox.value);

    for (const obj of inputObj) {
      const tbody = document.querySelector('tbody');
      const tr = document.createElement('tr');
      //image
      const tdImage = document.createElement('td');
      const img = document.createElement('img');
      img.src = obj.img;
      tdImage.appendChild(img);
      tr.appendChild(tdImage);
      //name
      const tdName = document.createElement('td');
      const name = document.createElement('p');
      name.textContent = obj.name;
      tdName.appendChild(name);
      tr.appendChild(tdName);
      //price
      const tdPrice = document.createElement('td');
      const price = document.createElement('p');
      price.textContent = Number(obj.price);
      tdPrice.appendChild(price);
      tr.appendChild(tdPrice);
      //decoration
      const tdDecoration = document.createElement('td');
      const decoration = document.createElement('p');
      decoration.textContent = Number(obj.decFactor);
      tdDecoration.appendChild(decoration);
      tr.appendChild(tdDecoration);
      //checkBox
      const tdCheckBox = document.createElement('td');
      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      tdCheckBox.appendChild(checkBox);
      tr.appendChild(tdCheckBox);

      tbody.appendChild(tr);
    }
  }

  const allNames = [];
  const allPrice = [];
  const allDecoration = [];

  buyButton.addEventListener('click', buy);

  function buy() {
    const checkedBoxes = Array.from(document.querySelectorAll('tbody input')).filter(x => x.checked);

    for (const box of checkedBoxes) {
      const parent = box.parentElement.parentElement;
      const data = Array.from(parent.children);

      const name = data[1].textContent;
      const price = Number(data[2].textContent);
      const decoration = Number(data[3].textContent);

      allPrice.push(price);
      allNames.push(name);
      allDecoration.push(decoration);
    }
    let totalPrice = 0;
    for (const num of allPrice) {
      totalPrice+=num;
    }
    let averageDec = 0
    for (const dec of allDecoration) {
      averageDec+=dec
    } 
    averageDec = averageDec/allDecoration.length

    buyBox.textContent += `Bought furniture: ${allNames.join(', ')}\n`;
    buyBox.textContent += `Total price: ${totalPrice.toFixed(2)}\n`
    buyBox.textContent += `Average decoration factor: ${averageDec}`
  }
}