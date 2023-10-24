function heroicInventory(array) {
 
    const finalArr = [];

    for (let i = 0; i < array.length; i++) {
        let [name,level,items] = array[i].split(' / ');
        level = Number(level)
        if(items != undefined){
            items = items.split(', ')
        }else{
            items = []
        }
        debugger
        finalArr.push({name,level,items})
    }

    console.log(JSON.stringify(finalArr));


}
heroicInventory(['Isacc / 25 / BarrelVest, DestructionSword',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])
