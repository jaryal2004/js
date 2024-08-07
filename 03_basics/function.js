function myName(){
    console.log("H");
    console.log("I");
    console.log("T");
}

// myName();

function addTwoNumbers(num1,num2){
    return num1+num2;
}

function addTwoNumbers(num1,num2){
//    let result=num1+num2
//    return result
return num1+num2;
   console.log("hitesh")  //this will never execute
}

addTwoNumbers(3,4)//7
addTwoNumbers(3,"4")//34
addTwoNumbers(3,"a")//3a

const result=addTwoNumbers(3,5)
// console.log("Result:",result);

function loginUserMessage(username){
    if(username===undefined){//(!undefined)
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("hitesh"); //nothing will get executed
// console.log(loginUserMessage());


//if there is a default value i.e. in line 27 it is written username="sam" the if condition will never be exec

//shopping cart where we don't know how many args are there
function calculateCartPrice(...num1){//...known as rest as well as spread operator
    return num1
}
console.log(calculateCartPrice(200,400,500,2000))
//it will add the values in an array
//if(in line42 we will write val1,val2,...num1) then output is 500,2000 because 2 values are stored in variables and rest are stored by num1

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const myNewArray=[200,300,400,100]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,300,400,100]));

