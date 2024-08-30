const userEmail="h@gmail.com"
if(userEmail){
    console.log("got email");
}
else{
    console.log("not having email");
}

//false values 
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//true values
//"0",'false'," ",[],{},function(){} empty function


//to check array is empty or not
// if(userEmail.length===0){
//     console.log("empty array");
// }

//object is empty or not
// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("empty object");

// }

//nullish coalescing operator(??): null undefined
//operator used to designed if null value is given to the variable than the other value will be assigned to the variable as null is not in use
let val1;
// val1=5??10
val1=null??10
console.log(val1);