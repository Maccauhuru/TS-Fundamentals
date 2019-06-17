class Point {
    x:number;
    y:number;
    draw() {
        console.log(`x: ${this.x} y:${this.y}`);
    }
    getDistance(another : Point){
      console.log(another)
    }
}

let point = new Point();
point.x=3;
point.y=1;
point.draw();
