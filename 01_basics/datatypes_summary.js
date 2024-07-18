// primitive
//7 types: string, number, boolean, null, undefined, symbol, BigInt


const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let  userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

// const bigNumber=34567278927978539726n


//Reference type (non primitive)
//array, objects, functions

const heros=["payal","palak","prabh"]
let myObj={
name:"jaryal",
age:19,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof outsideTemp);