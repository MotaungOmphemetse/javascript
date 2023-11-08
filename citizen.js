export class Citizen {
    constructor(name, id){
this.name = name;
this.id = id;
    }

 addAddress(add){
    this.add = add;
 }

 getDetails(){
    console.log(`Name of the residentis ${this.name} , residing at ${this.add}`);
 }
}