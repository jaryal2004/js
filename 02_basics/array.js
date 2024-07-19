//array

const myArr=[0,1,2,3,4,5]
const myHeroes=["shahrukh","rohit"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[0]);


//array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9)  //element add at first of array
// myArr.shift()  //removes element from front isde of array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(11));
//if that number is not present in array then index will be -1

// const newArr=myArr.join()
// //join not only add the elements of array into newarray but also converts it into string
// console.log(myArr);
// console.log(newArr);

//slice,splice

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);


const myn2=myArr.splice(1,3)
console.log(myn2);

//output for slice will be A[0,1,2,3,4,5]
// [1,2]
// B [0,1,2,3,4,5]
//output for splice is [1,2,3]
//in splice it prints the whole given range value even the last one unlike slice 
//and also deletes that values from array unlike slice




