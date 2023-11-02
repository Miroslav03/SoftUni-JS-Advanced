function listProcessor(array) {

    let finalArr = [];
    const commandObj = { add, remove, print };

    function add(name) {
        finalArr.push(name);
    }

    function remove(name) {
        finalArr = finalArr.filter((x) => x != name);
    }
    function print() {
        console.log(finalArr.join(','))
    }

    for (const el of array) {
        const [command,name] = el.split(' ')
        commandObj[command](name)
    }

} listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])



