function townsToJSON(array) {
    const collection = [];
    for (let i = 1; i < array.length; i++) {
        let [Town, Latitude, Longitude] = array[i].split('|').filter((a) => a != '').map((a) => a.trim());
        Latitude = Number(Number(Latitude).toFixed(2))
        Longitude = Number(Number(Longitude).toFixed(2))
        collection.push({ Town, Latitude, Longitude })
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
