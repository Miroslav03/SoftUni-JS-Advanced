
class List {
    arr = []
    size = 0;
    add(element) {
        this.arr.push(element)
        this.size ++;
        return this.arr.sort((a, b) => a - b)
    }
    remove(index) {
        if (index >= this.arr.length || index < 0) {
            throw new Error;
        }
        const firsthalf = this.arr.slice(0, index)
        const secondhalf = this.arr.slice(index + 1)
        this.size --;
        this.arr = firsthalf.concat(secondhalf);
        return this.arr.sort((a, b) => a - b)
    }
    get(index) {
        if (index >= this.arr.length || index < 0) {
            throw new Error;
        }

        return this.arr[index]
    }
}

const myList = new List()
myList.add(5);


myList.add(3);

myList.remove(0);

