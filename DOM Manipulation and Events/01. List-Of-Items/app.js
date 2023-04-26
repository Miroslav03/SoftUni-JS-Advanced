function addItem() {
    const input = document.getElementById('newItemText').value
    const items = document.getElementById('items')
    const newBox = document.createElement('li')
    newBox.textContent = input
    items.appendChild(newBox)

}