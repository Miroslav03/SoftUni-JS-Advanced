function heroicInventory(array) {
    const finalArr = [];

    function createHero(name, level, arrItems) {
        const hero = {};
        hero.name = name;
        hero.level = level;
        hero.items = arrItems;
        return hero;
    }

    for (let i = 0; i < array.length; i++) {
        let [name, level, items] = array[i].split(' / ');

        level = Number(level);

        items =  items ? items.split(', ') : []

        finalArr.push(createHero(name,level,items))
    }
    console.log(JSON.stringify(finalArr));
}

heroicInventory(['Isacc / 25 / BarrelVest, DestructionSword',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])
