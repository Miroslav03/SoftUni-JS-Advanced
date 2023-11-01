function addItem() {
    const btn = document.querySelector('input[type="button"]')
    const text = document.getElementById('newItemText').value
    const items = document.getElementById('items')
    const li = document.createElement('li')
    li.textContent = text
    items.appendChild(li)
    
}