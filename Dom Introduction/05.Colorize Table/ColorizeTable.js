function colorize() {
    const table = document.querySelectorAll('tr')
    const arr = Array.from(table)

    for (let i = 1; i < arr.length; i+=2) {
        const element = arr[i].style.backgroundColor = 'teal';
    }
}