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
