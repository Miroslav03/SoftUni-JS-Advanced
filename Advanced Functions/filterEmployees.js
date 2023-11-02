function filter(data, criteria) {

    const input  = JSON.parse(data);
    const [key,value] = criteria.split('-')
    const finalArr = [];
    for (const obj of input) {
        let string  = '';
        if(obj[key] == value){
            string = `${obj.first_name} ${obj.last_name} - ${obj.email}`
            finalArr.push(string)
        }
    }
    for (let i = 0; i < finalArr.length; i++) {
        const element = finalArr[i];
        console.log(`${i}. ${element}`);
    }
   
}
const sample = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`


const criteria = 'last_name-Johnson'

filter(sample, criteria)