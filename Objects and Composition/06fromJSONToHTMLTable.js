function fromJSONToHTMLTable(input) {

    const arr = []
    const data = JSON.parse(input)

    arr.push(`<table>`);

    const keys = Object.keys(data[0])
    arr.push(`   <tr>${keys.map(a => `<th>${escape(a)}</th>`).join(``)}</tr>   `);

    for (const obj of data) {
        const values = Object.values(obj)
        arr.push(`   <tr>${values.map(a => `<td>${escape(a)}</td>`).join(``)}</tr>   `);
       
    }
    function escape(value){
        return value.toString().replace(`<`,`&lt;`).replace(`>`,`&gt;`)
    }
    arr.push(`</table>`);

    return arr.join(`\n`)
}