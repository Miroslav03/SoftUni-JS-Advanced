function extractText() {
    const elements = document.getElementById('items').children;
    const listArr = Array.from(elements);
    const result = listArr
    .map(li => li.textContent)
    .join('\n');


    document.getElementById('result').value = result
}