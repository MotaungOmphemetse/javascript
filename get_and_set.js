// const student = {
//     firstName : 'Omphemetse',
//     surname : 'Motaung',
//     age : 33,


//     //accessor property
//     get getName(){
//         return this.firstName,
//     },

// get getDetails(){
//     return [this.firstName,this.surname,this.age],
// },
//     set changeName(newName){
//         this.firstName=newName,

//     },
    
// },

// console.log(student.firstName,student.surname,student.age);
// console.log(student.newName);
const student = {
    firstName : 'Omphemetse',
    surname : 'Motaung',
    age : 33,
   
    get fullName(){
        return this.firstName;
    },

    get fullDetails(){
        return[this.firstName,this.surname,this.age];
    },
    set fullName(newName){
        this.firstName = newName;
    },
        
}
console.log(student.firstName,student.surname,student.age);
console.log(student.fullDetails);