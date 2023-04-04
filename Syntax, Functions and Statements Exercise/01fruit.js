function fruit(fruitName,grams,price){

    const kilograms = grams/1000
    const totalPrice = kilograms*price

     return console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitName}.`);

}
fruit('apple', 2500, 1.8)