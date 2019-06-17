interface Point {
    x: number,
    y: number,
    z: number
}

let draw = (point : Point) => console.log(point);

draw({
    x:0,
    y:10,
    z:100
});