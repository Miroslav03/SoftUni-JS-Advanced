function sumTable() {
    const arr = Array.from(document.querySelectorAll('tr'))
    const sumValue = document.getElementById('sum');
    let sum = 0;

    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        const tr = element.childNodes
        const value = Number(tr[tr.length - 1].textContent)
        sum+=value
    }
    sumValue.textContent = sum

}