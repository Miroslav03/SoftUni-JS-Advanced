function calorieObject(array) {
    const collection = {};

    for (let i = 0; i < array.length; i += 2) {
        const name = array[i];
        let calorie = undefined;
        if (i == 0) {
            calorie = Number(array[i + 1])

        } else {
            calorie = Number(array[i + 1])
        }
        collection[name] = calorie

    }

    console.log(collection);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])
