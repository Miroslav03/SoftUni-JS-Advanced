function solve() {

   const totalPriceArr = []
   const allNamesArr = []

   const addButtons = document.getElementsByClassName('add-product')
   const firstButton = addButtons[0]
   const secondButton = addButtons[1]
   const thirdButton = addButtons[2]


   firstButton.addEventListener('click', firstButtonEvent)
   function firstButtonEvent(event){
      const element = event.target.parentElement.parentElement;
      const name = element.querySelector(".product-title").textContent;
      const price = Number(element.querySelector(".product-line-price").textContent)
      output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      totalPriceArr.push(price)
      if(!allNamesArr.includes(name)){
         allNamesArr.push(name)
      }
   }

   secondButton.addEventListener('click',secondButtonEvent)
   function secondButtonEvent(event){
      const element = event.target.parentElement.parentElement;
      const name = element.querySelector(".product-title").textContent;
      const price = Number(element.querySelector(".product-line-price").textContent)
      output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      totalPriceArr.push(price)
      if(!allNamesArr.includes(name)){
         allNamesArr.push(name)
      }
   }

   thirdButton.addEventListener('click',thirdButtonEvent)
   function thirdButtonEvent(event){
      const element = event.target.parentElement.parentElement;
      const name = element.querySelector(".product-title").textContent;
      const price = Number(element.querySelector(".product-line-price").textContent)
      output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      totalPriceArr.push(price)
      if(!allNamesArr.includes(name)){
         allNamesArr.push(name)
      }
   }

   //output
   const output = document.querySelector('textarea')
   //chekout button

   const chekout = document.getElementsByClassName('checkout')
   const button = chekout[0]

   button.addEventListener('click',chekoutEvent)
   function chekoutEvent(){
      let sum  = 0;
      for (const num of totalPriceArr) {
         sum+=num
      }
      let string = `You bought ${allNamesArr.join(', ')} for ${sum.toFixed(2)}.`
      output.textContent += string
      firstButton.removeEventListener('click',firstButtonEvent)
      secondButton.removeEventListener('click',secondButtonEvent)
      thirdButton.removeEventListener('click',thirdButtonEvent)
      button.removeEventListener('click',chekoutEvent)
   }
}