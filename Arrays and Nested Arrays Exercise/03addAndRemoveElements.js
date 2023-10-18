function addAndRemoveElements(array) {
    const finalArr = [];
    let start = 1;

    for (let i = 0; i < array.length; i++) {
        const command = array[i]
        switch (command) {
            case 'add': {
                finalArr.push(start)
                start += 1
                break;
            }
            case 'remove': {
                finalArr.pop()
                start += 1
                break;
            }

        }

    }

    if (finalArr.length == 0) {
        console.log('Empty');
    } else {
        console.log(finalArr.join(`\n`));
    }


}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']

)

