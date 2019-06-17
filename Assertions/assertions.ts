let message:String = "The Great Heisenburg";
console.log(`Ends with G ? ${message.endsWith('g')}`);

let someMsg,someMsgTwo;
someMsg = 'Coolio';
someMsgTwo='$20 bucks'
someMsg = (<String>someMsg).startsWith('C');
someMsgTwo = (someMsgTwo as String).endsWith('s');
console.log(someMsg,someMsgTwo);

