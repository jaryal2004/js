// const tinderUser=new Object() //singleton object
const tinderUser={}; //non-singleton object

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1, ...obj2}
console.log(obj3);


const users=[
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gamil.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//destructuring
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor
const {courseInstructor:instructor}=course//extract the value from object
// console.log(courseInstructor);
console.log(instructor);


// {} destructuring
// const navbar= ({company}) => {
// }
// navbar(company="hitesh")



//API:whatever data we want to fetch 
//json format,object
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//array format
// [
//     {},
//     {},
//     {}
// ]

