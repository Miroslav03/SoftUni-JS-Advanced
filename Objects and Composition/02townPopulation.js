function townPopulation(array) {
    const townList = {};

    for (let i = 0; i < array.length; i++) {
        const [townName,population] = array[i].split(` <-> `);
        
        if(townList.hasOwnProperty(townName)){
            townList[townName] += Number(population)
        }else{
            townList[townName] = Number(population)
            
        }
    }

    for (const [townName,population] of Object.entries(townList)) {
            console.log(`${townName} : ${population}`);
    }

}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)
