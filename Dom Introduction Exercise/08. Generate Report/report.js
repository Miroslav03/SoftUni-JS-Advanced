function generateReport() {
    const output = document.getElementById('output')
    const checkBoxes = Array.from(document.querySelectorAll('thead tr th input'))
    const boxes = Array.from(document.querySelectorAll('tbody tr'))
    let finalArr = []

    for (let i = 0; i < boxes.length; i++) {
        const element = boxes[i];
        let result = {}
        const arr = Array.from(element.querySelectorAll('td'))

        for (let j = 0; j < arr.length; j++) {
            const text = arr[j].textContent
            if(checkBoxes[j].checked){
                result[checkBoxes[j].name] = text
            }
            
        }
        finalArr.push(result)
       
    }
    output.value = JSON.stringify(finalArr)
}


