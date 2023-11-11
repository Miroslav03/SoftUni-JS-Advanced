function classHierarchy() {

    class Figure {
        constructor(units) {
            this.units = 'cm';
        }

        get area() {

        }

        changeUnits(newUnit) {
            return this.units = newUnit;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }


    class Circle extends Figure {
        constructor(radius) {
            super()
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this.width = width;
            this.height = height;
        }
        get area() {
            return this.width * this.height;
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }

}

const classes = classHierarchy()
const cirlce = new classes.Circle(5)
console.log(cirlce.toString())
