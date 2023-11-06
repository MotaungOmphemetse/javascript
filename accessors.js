//var is global
//let is local

let gobalVar = "Global variables";

function fun(){
let localVar = "Local variables";

console.log(localVar + "is useful inside the functions");

}
fun();

var x = function(x, y)
{
    console.log ("the sum is : "+ (x*y)) ;
}

// const person = {
//     firstName :"Omphemetse", lastName : "Motaung", age : 33,
//     fullname : function(){
//         return this.firstName + " " +this.lastName;
//     }

// }
// person();