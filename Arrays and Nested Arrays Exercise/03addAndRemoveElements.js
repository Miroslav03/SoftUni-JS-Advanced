function addAndRemoveElements(array) {
    const finalArr = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        const comand = array[i];
        switch (comand) {
            case 'add': {
                count = i + 1;
                finalArr.push(count);
                break;
            }
            case 'remove': {
                finalArr.pop();
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
    'add',
    'add']
)
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
)
addAndRemoveElements(['remove',
    'remove',
    'remove']
)
//if empty print Empty

