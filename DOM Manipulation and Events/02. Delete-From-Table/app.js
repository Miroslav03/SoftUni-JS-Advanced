function deleteByEmail() {
    const tableRows = Array.from(document.querySelectorAll('tbody tr td'))
    const filteredArr = tableRows.filter((td, i) => i % 2 != 0)
    const input = document.querySelector('input[type="text"]').value
    const result = document.getElementById('result')
    for (const td of filteredArr) {
        if(td.textContent == input){
            td.parentElement.remove()
            result.textContent = 'Deleted.'
        }else{
            result.textContent = 'Not found.'
        }
    }


}