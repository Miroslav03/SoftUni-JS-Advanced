(function stringExtention() {
    String.prototype.ensureStart = function (str) {
        if (this.toString().startsWith(str)) {
            return this.toString();
        } else {
            return str + this.toString();
        }

    }
    String.prototype.ensureEnd = function (str) {
        if (this.toString().endsWith(str)) {
            return this.toString();
        } else {
            return this.toString() + str;
        }
    }
    String.prototype.isEmpty = function () {
        return this.toString().length === 0;
    }
    String.prototype.truncate = function (n) {
        let string = this.toString();
        if (string.length <= n) {
            return string;
        }
        if (n < 4) {
            return `.`.repeat(n)
        }

        if (string.includes(' ')) {
            let lastIndexOFSpace = undefined
            while (true) {
                lastIndexOFSpace = string.lastIndexOf(' ');
                if ((string.slice(0, lastIndexOFSpace) + '...').length <= n){
                    return string.slice(0, lastIndexOFSpace) + '...'
                }else{
                    string = string.slice(0, lastIndexOFSpace) + '...'
                    continue
                }
            }

        } else {
            return string = string.slice(0, n - 3) + '...'
        }

    }
    String.format = function (...params) {
        const arr = [...params];
        let finalString = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (finalString.includes(`{${i - 1}}`)) {
                finalString = finalString.replace(`{${i - 1}}`, arr[i])
            } else {

            }
        }

        return finalString
    }



})()


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
