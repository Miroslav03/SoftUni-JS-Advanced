function addItem() {
    const input = document.getElementById('newItemText').value
    const item  = document.getElementById('items')

    const li = document.createElement('li')
    li.textContent = input
    item.appendChild(li)

    const deleteButton  = document.createElement('a')
    deleteButton.href = '#'
    deleteButton.textContent = '[Delete]'
    li.appendChild(deleteButton)

    deleteButton.addEventListener('click', function listener(){
        li.remove()
    })

}