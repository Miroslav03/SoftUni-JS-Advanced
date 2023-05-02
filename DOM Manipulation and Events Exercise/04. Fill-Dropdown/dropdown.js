function addItem() {
    const newItemText = document.getElementById('newItemText')
    const newItemValue = document.getElementById('newItemValue')

    const menu = document.getElementById('menu')
    const text = document.createElement('option')

    text.value = newItemValue.value
    text.textContent = newItemText.value

    menu.appendChild(text)

    newItemText.value = ''
    newItemValue.value = ''

}