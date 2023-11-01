function solve() {

   function removeDuplicates(arr) {
      return Array.from(new Set(arr))
   }
   const totalSumArr = [];
   const productsArr = [];
   const buttons = Array.from(document.querySelectorAll('button[class="add-product"]'));
   const checkoutButton = document.querySelector('button[class="checkout"]');

   const textarea = document.querySelector('textarea');

   const breadButton = buttons[0];
   const milkButton = buttons[1];
   const tomatoesButton = buttons[2];

   breadButton.addEventListener('click', bread)
   function bread() {
      textarea.textContent += `Added Bread for 0.80 to the cart.\n`;
      const price = 0.80;
      totalSumArr.push(price)
      productsArr.push('Bread')
   }
   milkButton.addEventListener('click', milk)
   function milk() {
      textarea.textContent += `Added Milk for 1.09 to the cart.\n`;
      const price = 1.09;
      totalSumArr.push(price)
      productsArr.push('Milk')
   }
   tomatoesButton.addEventListener('click', tomato)
   function tomato() {
      textarea.textContent += `Added Tomatoes for 0.99 to the cart.\n`;
      const price = 0.99;
      totalSumArr.push(price)
      productsArr.push('Tomatoes')
   }

   checkoutButton.addEventListener('click', function checkout() {
      const sum = totalSumArr.reduce((a, x) => a + x, 0)
      const noDuplicates = removeDuplicates(productsArr)
      const string = noDuplicates.join(', ')
      textarea.textContent += `You bought ${string} for ${sum.toFixed(2)}.`
      checkoutButton.removeEventListener('click', checkout)
      breadButton.removeEventListener('click', bread)
      milkButton.removeEventListener('click', milk)
      tomatoesButton.removeEventListener('click', tomato)
   })

}