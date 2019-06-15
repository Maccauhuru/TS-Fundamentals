var count = 5;
count += 100;
console.log(count);
var str = "Here to save you all";
str += " - says Chino XL";
console.log(str);
var turnedOn = false;
if (!turnedOn) {
    console.log("Lights are turned off");
}
var stmt = '';
var moola = "is a lot of moola";
stmt += "$5000 " + moola;
console.log(stmt);
var numArr = [2, 4, 6, 8, 100];
var anyArr = ['one', 2, false];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Black"] = 1] = "Black";
    Colors[Colors["Yellow"] = 2] = "Yellow";
})(Colors || (Colors = {}));
;
var backgroundColor = Colors.Black;
