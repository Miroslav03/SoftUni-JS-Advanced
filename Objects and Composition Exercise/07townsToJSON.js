function townsToJSON(array) {
    const collection =[];

    for (let i = 1; i < array.length; i++) {
        let [name,latitude,longitude] = array[i].split(' | ');
        name = name.split('| ').filter(a => a)
        name = name[0]

        latitude = Math.round(Number(latitude)*100)/100

        longitude = longitude.split(' |').filter(a => a)
        longitude = Math.round(Number(longitude[0])*100)/100
        
       collection.push({Town:name,Latitude:latitude,Longitude:longitude})
    }

    console.log(JSON.stringify(collection));

}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
)
