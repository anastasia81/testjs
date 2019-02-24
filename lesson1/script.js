'use strict';


var number = 5;
var string= "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*4);

let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);

//alert("Hello world!");


//confirm("Are you here?");
//let answer = confirm("Are you here?");
//console.log(answer);


//let answer = prompt("Есть ли вам 18?", "Да");
//console.log(answer);

//console.log(typeof(answer));
//console.log(typeof(arr));

//console.log("arr" + "- object");
//console.log(4 + "- object");

//let answer = +prompt("Есть ли вам 18?", "Да");
//console.log(typeof(answer));


let incr = 10,
    decr = 10;

//incr++;
//decr--;

console.log (incr++);
console.log (decr--);

console.log(5%2);

console.log("2" == 2);
console.log("2" === 2);

let isChecked = true,
    isClose = true;

console.log(isChecked && isClose);

console.log(isChecked || isClose);
