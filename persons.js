function Person(name, age)
{
    this.name = name;
    this.age = age;

}

let omphemetse = new Person("Omphemetse",33);
let ntombi = new Person("Ntombi",32);

console.log(omphemetse);
console.log(ntombi);

let johny = {
    name: 'Johny',
    age: 24
};

 function Students(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
 }

let ntombii = new Students("Thoko", 12, "Fullstack");
// let john = new Students();
console.log(ntombii);
console.log(johny);

let user = {
 name: "John",
 id : 123, 
 fruit : "Apple",
}
console.log(user);

let menu= {
    width : 400,
    height: 600,
    title: "My menu",
}

console.log(menu);

// let users = {
//     fname : "Ntombi",
// }

// let message = "Hello!";
// let phrases = message;

// console.log(users.phrases);

const usern = {
    lastname :"Kgosi"
};

usern.lastname = "Lerato";

console.log(usern.lastname);
