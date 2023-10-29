function generateReport() {
    const output = document.getElementById('output');
    const checkBoxes = document.querySelectorAll('thead tr th input');
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const dataArr = [];
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const dataObj = {};
        const tdArr = Array.from(row.querySelectorAll('td'));
        for (let j = 0; j < tdArr.length; j++) {
            const element = tdArr[j];
            if (checkBoxes[j].checked) {
                dataObj[checkBoxes[j].name] = element.textContent
            }
        }
        dataArr.push(dataObj)
    }
    output.textContent = JSON.stringify(dataArr)
}


