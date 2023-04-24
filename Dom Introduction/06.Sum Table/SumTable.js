function sumTable() {
    const table  = document.querySelectorAll('table tr')
    let totalSum = 0
    for (let i = 1; i < table.length-1; i++) {
        const elements = table[i].children;
        const number = Number(elements[elements.length -1].textContent)
        totalSum +=number
    }
    document.getElementById(`sum`).textContent = totalSum
}