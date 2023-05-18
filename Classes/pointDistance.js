function pointDistance() {

    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static distance(p1, p2) {
            const xDiff = p2.x - p1.x;
            const yDiff = p2.y - p1.y;
            const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
            return distance;
        }

    }

    let p1 = new Point(5, 5);
    let p2 = new Point(9, 8);
    console.log(Point.distance(p1, p2));


}
pointDistance()