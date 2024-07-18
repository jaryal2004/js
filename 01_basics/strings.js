 const name="hitesh"
 const repoCount=50
 //console.log(name+repoCount+"Value");

 console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('hitesh-hc')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


//divide into substring
//can't use negative values in substring
const newString=gameName.substring(0,3)
console.log(newString);

//can use negative values in slicing
const anotherString=gameName.slice(-8,4)
console.log(anotherString)

//remove extra spaces
const newStringOne="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))


//convert into array
console.log(gameName.split('-'));

