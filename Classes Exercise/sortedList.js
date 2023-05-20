function sortedList() {

    class List {
        constructor() {
            this.arr = [];
            this.size = 0;
        }

        add(num) {
            this.arr.push(num)
            this.size++
            return this.arr.sort((a, b) => a - b);
        }

        remove(index) {
            if (index >= 0 && index < this.arr.length) {
                const arr1 = this.arr.slice(0, index);
                const arr2 = this.arr.slice(index + 1);
                this.arr = arr1.concat(arr2);
                this.size--
                return this.arr.sort((a, b) => a - b);
            } else {
                throw new Error
            }
        }

        get(index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.sort((a, b) => a - b);
                return this.arr[index];
            } else {
                throw new Error
            }
        }


    }


    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1));
    
    list.remove(1);
    console.log(list.get(1))

}
sortedList()
