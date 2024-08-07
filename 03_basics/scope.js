//var is not used preferably because of it's global scope
//therfore we use let more often
//also the global of windows environment and terminal is different


//nested scope
function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//consolelog(username);


//+++++++++++++++++++++interesting example+++++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

//in first case u can print the output even before fucntion because as function it can be called anywhere
//but in second case this will give an error as the function is holded by a variable

const addTwo=function(num){
    return num+2
}
addTwo(5)



