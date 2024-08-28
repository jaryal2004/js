//Immediately Invoked Function Expressions(IIFe)

// function chai(){
// console.log("db connected");
// }
// chai()


(function chai(){
    //named iife
    console.log("db connected");
    })();
// ()() function and execution  used to save from the pollution of global scope

//using arrow function
((name)=>{
    console.log(`db connected ${name}`);
})('hitesh')

