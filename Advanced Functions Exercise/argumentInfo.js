function argumentInfo(...arguments) {
    const arr = [];
    const counter = {};
    for (const arg of arguments) {
        let type = typeof arg;
        arr.push({ type: type, value: arg })
        if (!counter[type]) {
            counter[type] = 0;
            counter[type]++;
        } else {
            counter[type]++;
        }
    }

    for (const obj of arr) {
        const entries = Object.entries(obj);
        console.log(`${entries[0][1]}: ${entries[1][1]}`);

    }

    const sortedObj = Object.entries(counter).sort(((a, b) => b[1] - a[1]));
    for (const [key, value] of sortedObj) {
        console.log(`${key} = ${value}`);
    }


}
argumentInfo('cat', 42, function () { console.log('Hello world!'); }, function () { console.log('Hsadd!'); })