const score=400
console.log(score);
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber=123.8966
console.log(otherNumber.toPrecision(3));

//to claculate zeroes
const hundreds=1000000
//us standard by default
console.log(hundreds.toLocaleString('en-In'));


//***************maths **************

console.log(Math);
//object 

//change negative value to positive using absolute
console.log(Math.abs(-4));

//rounding figures
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //top
console.log(Math.floor(4.9)); //bottom
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));


console.log(Math.random());
//0.52
//0.98
//it's result always come between 0 and 1
console.log((Math.random()*10)+1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);



