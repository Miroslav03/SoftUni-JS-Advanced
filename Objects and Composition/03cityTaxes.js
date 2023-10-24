function cityTaxes(name, population, treasury) {

    const obj = {
        taxRate: 10,
        name,
        population,
        treasury,

        collectTaxes() {
            this.treasury += this.population * this.taxRate
        },

        applyGrowth(percentage) {
            this.population += this.population * percentage / 100

        },

        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100

        }

    }


    return obj;
}
const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

