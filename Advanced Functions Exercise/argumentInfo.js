function argumentInfo(...arguments) {

    const obj = {}
    const arr = arguments

    for (const el of arr) {
        if (!obj.hasOwnProperty(typeof el)) {
            obj[typeof el] = 0;
            obj[typeof el]++
            console.log(`${typeof el}: ${el}`);
        } else {
            obj[typeof el] += 1
            console.log(`${typeof el}: ${el}`);
        }
    }

    const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1])
    for (const [key,value] of sortedEntries) {
        console.log(`${key} = ${value}`);
    }
}
argumentInfo({ name: 'bob' }, 3.333, 9.999)