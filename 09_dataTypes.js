//primitive
// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt


const score =100;

//Reference(Non primitive)
//array,objects,Functions


const id= Symbol('1234');
const anotherId= Symbol('1234');

console.log(id === anotherId);
//symbol er return type symbol e

//const BigNumber =4253656545646746645; //for big number js use BigInt datatype

// Array
const God=["Krishna","Shiv","Kali"]


//Object
let myObj={
    name: "Ani",    //object=name ,datatype=string
    coin: 23,   //object=coin
}
//console.log(typeof myObj);    return type= Object


//function
const myFunc=function(){
    console.log("Hello World");
}
console.log(typeof myFunc); //return type function
