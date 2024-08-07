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

loginUserMessage("hitesh"); //nothing will get executed
console.log(loginUserMessage());


//if there is a default value i.e. in line 27 it is written username="sam" the if condition will never be exec

