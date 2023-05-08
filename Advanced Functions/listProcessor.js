function listProcessor(array) {

    let result = [];

    function add(string) {
        result.push(string)
    }

    function remove(string) {
        if (result.includes(string)) {
            result = result.filter(word => word != string)
        }
    }

    function print() {
        console.log(result.join(','));
    }

    const comandsObj = {
        add,
        remove,
        print
    }

    for (const el of array) {
        const [command,argument] = el.split(' ')
        comandsObj[command](argument)
    }

} listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'] )