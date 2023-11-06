function subSum(array, start, end) {

   if (!Array.isArray(array)) {
      return NaN;
   }

   if (start < 0) {
      start = 0;
   }

   if (end > array.length - 1) {
      end = array.length - 1;
   }

   return array.map(x => Number(x)).reduce((a, x, i) => {
      if (i >= start && i <= end) {
         a += x
      }
      return a
   }, 0)


}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300))

console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1))
console.log(subSum([], 1, 2))
console.log(subSum('text', 0, 2))

