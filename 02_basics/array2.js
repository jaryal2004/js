const marvel=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);
//output is flash

// const c=marvel.concat(dc);
// console.log(c);

const all=[...marvel, ...dc] //spread 
console.log(all);


const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another=another.flat(Infinity)
console.log(real_another);
//sort out the arrays into one array


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));


let sc1=100
let sc2=200
let sc3=300
console.log(Array.of(sc1,sc2,sc3));


