function subSum(array, start, end) {

   if (Array.isArray(array) == false) {
      return NaN;
   }
   if (start < 0) {
      start = 0;
   }
   if (end > array.length - 1) {
      end = array.length - 1;
   }
   for (let i = 0; i < array.length; i++) {
      const number = array[i];
      if (typeof number == 'string') {
         return NaN
      }
   }
   const sum = array.slice(start,end+1).reduce((acc, n) => acc + n, 0);
   return sum

}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(subSum([], 1, 2))
console.log(subSum('text', 0, 2))

