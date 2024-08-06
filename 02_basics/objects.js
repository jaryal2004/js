//singleton
//from constuctor it made singleton


//object literals(just used to declare objects)
// Object.create //constructor method

const mySym=Symbol("key1")


const JsUser={name:"Payal",
    age:"19",
    //to use as symbol write it in a square bracket
    [mySym]:"mykey1",
    location:"Jaipur",
    isLoggedIn:false,
    email:"payal24@gmail.com"
} //object

// myArray=["h","i"];
// myArray[1];
//in arrays we can access values only in one way by index

//how to access the objects
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym])

//overwriting the values
JsUser.email="payal@gmail.com"
// Object.freeze(JsUser) //it freezes object now no change will be applied
console.log(JsUser);


//adding function
JsUser.greeting=function(){
    console.log("hello");
}

 JsUser.greetingTwo=function(){
    //string interpolation
    console.log(`hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
