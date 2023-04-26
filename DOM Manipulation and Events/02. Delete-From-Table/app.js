function deleteByEmail() {
    const input = document.querySelector('input[type="text"]').value
    const table = Array.from(document.querySelectorAll('tbody tr'))
    let result = document.getElementById('result')
    
    let flag = false

    for (const el of table) {
        col = el.children[1]
        if(input == col.textContent){
            el.remove()
            flag = true
        }
    }
    if(flag){
        result.textContent = 'Deleted.'
    }else{
        result.textContent = 'Not found.'
    }
}