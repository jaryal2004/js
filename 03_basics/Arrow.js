// this current context
const user={
    username:"hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
        //print everything the current context
    }
}
// user.welcomeMessage()
// username:"sam"
// user.welcomeMessage()

console.log(this)//{} empty object , global object window is object

// function chai(){
//     console.log(this);
//     //this is not used in function  only in objects
// }
// chai()


//arrow function
const chai= () =>{
let username="hitesh"
console.log(this);
}

// chai()

// syntax ()=>{}
    // const addTWo=(num1,num2) => {
    //     return num1+num2;
    // }
    // console.log(addTWo(3,4))

    //explicit({}use this)
    //implicit return(no use of{})
    //const addTWo=(num1,num2) => num1+num2;
    // const addTWo=(num1,num2) => (num1+num2);

//  const addTwo=(num1,num2)=>({username:"hiesh"})
 //this will not execute until you use{}
 
    console.log(addTWo(3,4))
