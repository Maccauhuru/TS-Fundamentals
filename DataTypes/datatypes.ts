let count: number = 5;
count +=100;
console.log(count);

let str : string = "Here to save you all";
str +=` - says Chino XL`;
console.log(str);

let turnedOn : boolean = false;
if(!turnedOn){
    console.log("Lights are turned off")
}

let stmt : any = '';
let moola : string = `is a lot of moola`;
stmt += `$5000 ${moola}`;
console.log(stmt);

let numArr: any[] = [2,4,6,8,100];
let anyArr: any[] = ['one',2,false];

enum Colors {Red = 0,Black =1,Yellow=2};
let backgroundColor = Colors.Black;