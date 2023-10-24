function townPopulation(array) {
    const cities = {}
    for (let i = 0; i < array.length; i++) {
        let [city,population] = array[i].split(' <-> ');
        population = Number(population)
        if(cities.hasOwnProperty(city)){
            cities[city]+= population
        }else{
            cities[city] = population
        }
    }
    
    for (const [city,population] of Object.entries(cities)) {
        console.log(`${city} : ${population}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
console.log(`----------------------`);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
