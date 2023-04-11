function rectangle(width, height, color) {
    const rectangle = {};

    rectangle.width = width;
    rectangle.height = height;

    color = color[0].toUpperCase() + color.substring(1)
    rectangle.color = color

    rectangle.calcArea = () => {
        const rectangleArea = rectangle.width*rectangle.height;
        return rectangleArea;
    }

    return rectangle;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
