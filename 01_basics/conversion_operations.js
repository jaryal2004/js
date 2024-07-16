let score="33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//"33abc"=>nan
//nan =>not a number

//"33"=>33

//if score=null
//0

//if score=undefined
//nan

//if score=true
//1

//if score="hitesh"
//nan

let isLoggedIn = 1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//output is true
//""=>false
//"hitesh"=>true


let someNumber=33
let stringNumber= string(someNumber)
console.log(stringNumber);

//33


// ********************Operations*********************

let value=3
let negValue= -value
console.log(negValue);
//-3

//+,-,*,**,/,%

let str1="hello"
let str2=" hitesh"
let str3=str1+str2
console.log(str3);
//hello hitesh

console.log("1"+2);
//12
//1+"2"=>12
//"1"+2+2=>122
//1+2+"2"=>32
//if string first then all are converted into string


console.log(true);
// true
console.log(+true);
// 1
//true+ => error
// +"" =>1 0


let num1, num2, num3
num1=num2=num3=2+2

let gameCounter=100;
gameCounter++;
console.log(gameCounter);
//101
// ++gameCounter
//101


