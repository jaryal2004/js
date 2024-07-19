let myDate=new Date()
// console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
//type of myDate is object


// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-01-14")
//in this case the month count not start with 0 but 1

//according to indian format
let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


let myTimestamp=Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());


let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());


