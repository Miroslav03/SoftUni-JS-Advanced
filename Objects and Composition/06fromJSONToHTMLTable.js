
const data = JSON.parse(input)

const arr = []

arr.push(`<table>`);

const keys = Object.keys(arr[0]).map(a => a.split(" ").join("")).join('</th><th>')
arr.push(`   <tr><th>${keys}</th></tr>   `);

for (const obj of arr) {
    const values = Object.values(obj).join('</td><td>')
    arr.push(`   <tr><td>${values}</td></tr>   `);
}

arr.push(`</table>`);

return arr.join(`\n`)


