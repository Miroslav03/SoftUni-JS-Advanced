function fromJSONToHTMLTable(input) {
    let finalStr = '<table>'
    const arr = JSON.parse(input)
    const keys = Object.keys(arr[0]).map((key) => key.trim())
    let currentString = ''
    for (let i = 0; i < keys.length; i++) {
        currentString += `<th>${keys[i]}</th>`

    }
    finalStr += '\n    <tr>' + currentString
    finalStr += '</tr>'
    currentString = ''
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        for (const key in obj) {
            currentString += `<td>${obj[key]}</td>`
        }
        finalStr += '\n    <tr>' + currentString
        finalStr += '</tr>'
        currentString = ''
    }
    finalStr += '\n</table>'
    console.log(finalStr);
}
fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)