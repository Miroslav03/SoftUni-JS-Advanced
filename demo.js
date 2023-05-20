let  arr = [3]
index = 2
let arr1 = arr.slice(0, index)
let arr2 = arr.slice(index+1)
arr = arr1.concat(arr2)

console.log(arr);