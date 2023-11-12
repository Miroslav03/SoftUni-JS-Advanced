(function extend() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        const newArr = [];
        for (let i = this.length - 1; i >= n; i--) {
            newArr.push(this[i]);
        }
        return newArr.reverse();
    }
    Array.prototype.take = function (n) {
        const newArr = [];

        for (let i = 0; i < n; i++) {
            newArr.push(this[i]);
        }
        return newArr;
    }
    Array.prototype.sum = function () {
        return this.reduce((a, x) => a + x, 0)
    }
    Array.prototype.average = function () {
        return this.reduce((a, x) => a + x, 0) / this.length
    }

})()

let arr = [1, 2, 3, 4]
let newArr = arr.skip(2)
let newArr1 = arr.take(2)
let newArr2 = arr.sum()
let newArr3 = arr.average()

debugger
debugger