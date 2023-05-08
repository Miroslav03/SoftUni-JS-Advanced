function cars(array) {

    const finalObj = {}

    function create(name, inherit, name2) {
        if (inherit) {
            finalObj[name] = Object.create(finalObj[name2]);
        } else {
            finalObj[name] = {};
        }
    }

    function set(name, key, value) {
        finalObj[name][key] = value
    }
    function print(name) {
        const pairsArr = []

        for (const key in finalObj[name]) {
            let string = `${key}:${finalObj[name][key]}`
            pairsArr.push(string)
        }
        console.log(pairsArr.join(','));
    }

    const comandObj = {
        create,
        set,
        print
    }

    for (const el of array) {
        const [command, name, key, value] = el.split(' ')
        comandObj[command](name, key, value)
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])