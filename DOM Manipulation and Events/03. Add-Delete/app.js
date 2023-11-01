function addItem() {
    const items = document.getElementById('items');
    const newItemText = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = newItemText
    items.appendChild(li)
    const deleteBtn = document.createElement('a')
    deleteBtn.href = '#'
    deleteBtn.textContent = '[Delete]'
    li.appendChild(deleteBtn)

    deleteBtn.addEventListener('click',deleteElement)

    function deleteElement(){
        li.remove()
    }
}