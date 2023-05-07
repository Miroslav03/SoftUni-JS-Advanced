function filter(data, criteria) {

    const arr = JSON.parse(data)
    let key = ``

    if (criteria == 'all ') {
        key = "all"
    } else {
        [key, value] = criteria.split('-')
    }

    const result = []

    for (const obj of arr) {
        let string = ''
        const keys = Object.keys(obj)
        if (key == 'all') {
            string = `${obj.first_name} ${obj.last_name} - ${obj.email}`
            result.push(string)
        }
        else if (keys.includes(key)) {
            if (obj[key] == value) {
                string = `${obj.first_name} ${obj.last_name} - ${obj.email}`
                result.push(string)
            }
        } else {
            continue
        }

    }

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        console.log(`${i}. ${element}`);
    }
}
const sample = `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
}, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
},
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`

const criteria = 'gender-Female'

filter(sample, criteria)