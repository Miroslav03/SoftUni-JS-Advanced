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
            switch (this.units) {
                case 'cm': {
                    return Math.PI * this.radius * this.radius;
                } case 'mm': {
                    return Math.PI * (this.radius * 10) * (this.radius * 10);
                } case 'm': {
                    return Math.PI * (this.radius / 100) * (this.radius / 100);
                }
            }
        }
        toString() {
            switch (this.units) {
                case 'cm': {
                    return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
                } case 'mm': {
                    return `${super.toString()} Area: ${this.area} - radius: ${this.radius * 10}`
                } case 'm': {
                    return `${super.toString()} Area: ${this.area} - radius: ${this.radius / 100}`
                }
            }
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units)
            this.units = units
            this.width = width;
            this.height = height;
        }
        get area() {
            switch (this.units) {
                case 'cm': {
                    return this.width * this.height;
                } case 'mm': {
                    return (this.width * 10) * (this.height * 10);
                } case 'm': {
                    return (this.width / 100) * (this.height / 100);
                }
            }

        }

        toString() {
            switch (this.units) {
                case 'cm': {
                    return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
                } case 'mm': {
                    return `${super.toString()} Area: ${this.area} - width: ${this.width * 10}, height: ${this.height * 10}`
                } case 'm': {
                    return `${super.toString()} Area: ${this.area} - width: ${this.width / 100}, height: ${this.height / 100}`
                }
            }
        }
    }

    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200 
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

}
classHierarchy()

