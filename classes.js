export class Vehicle{
constructor (make, name, engine){
this.make = make;
this.name = name;
this.engine = engine;

}
get getName(){
    return (`The name of the vehicle is ${this.name}`);
};

get getMake(){
    return (`The vehicle make is ${this.make}`);
};

// get fullDetails(){
//     return(`The details of the vehicle is :  ${this.name} ${this.make} ${this.engine} `);
// };
};

let bike = new Vehicle("Kwasaki","Suziki","250");
let car= new Vehicle("Hyndai","i20","3.5");
let bus = new Vehicle("Nissian","Patco","250vv");

 console.log(`${bike.getName}`);
console.log(`${bike.getMake}`);


// class Employee {
//     constructor (name,id) (
//         this.name = name;
//         this.id = id;
//         )

// }
   
// let emp1 = new Employee("Omphemetse", "12335");
// console.log(`${emp1.id}`);
