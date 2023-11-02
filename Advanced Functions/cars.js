function cars(array) {

    const finalObj = {}

    const commands = {create,set,print}

    function create(name,inherit,name2){
        if(inherit){
            finalObj[name] = Object.create(finalObj[name2]);
        }else{
            finalObj[name] = {};
        }
    }

    function set(name,key,value){
        finalObj[name][key] = value;
    }

    function print(name){
        const allkeysArr = [];

        for (const key in finalObj[name]) {
            let string  = `${key}:${finalObj[name][key]}`
            allkeysArr.push(string)
        }
        console.log(allkeysArr.join(','));
    }

    for (const el of array) {
        const [command,name,key,value] = el.split(' ')
        commands[command](name,key,value)
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])