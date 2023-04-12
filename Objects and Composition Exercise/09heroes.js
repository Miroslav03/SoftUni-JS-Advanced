function solve() {

    const charecter = {}
    
    charecter.fighter = (name) => {
        const fighter = {};
        fighter.name = name;
        fighter.health = 100;
        fighter.stamina = 100;

        fighter.fight = () => {
            fighter.stamina -= 1
            console.log(`${fighter.name} slashes at the foe!`)
        }
        return fighter;
    }

    charecter.mage = (name) => {
        const mage = {};
        mage.name = name;
        mage.health = 100;
        mage.mana = 100;

        mage.cast = (spell) => {
            mage.mana -= 1
            console.log(`${mage.name} cast ${spell}`)
        }
        return mage;
    }


    return charecter;

}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
