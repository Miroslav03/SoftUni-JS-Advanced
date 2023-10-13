function sumFirstaAndLast(array){

   const firstElement = Number(array.shift())
   const lastElement = Number(array.pop())
   console.log(firstElement+lastElement);

}
sumFirstaAndLast(['20', '30', '40'])