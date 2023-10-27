function extractText() {

    const items  = document.querySelectorAll('li') 
    const arr = Array.from(items).map(x => x.textContent)
    const textArea = document.getElementById('result').value = arr.join('\n')

}
