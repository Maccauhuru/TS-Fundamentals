var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("x: " + this.x + " y:" + this.y);
    };
    Point.prototype.getDistance = function (another) {
        console.log(another);
    };
    return Point;
}());
var point = new Point();
point.x = 3;
point.y = 1;
point.draw();
