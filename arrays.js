let courses = ["React","Angular 2", "Javascript", "HTML"];
console.log(courses);
courses[3]="Typescript";
console.log(courses);

let i;
let length =2;
let len = courses.length;
let space = " ";
courses.push(["Python","C++"]);
console.log("Courses available : "+ courses);


console.log(typeof courses); 

console.log(courses instanceof Array); //show of boolean 
for (i=0; i<len;){
    space+=courses [i] + ' '
    i++;
}
console.log(space);

let learners = new Array(3);
learners[0]=1;
learners[1]=2;
learners[2]=3;

console.log("No of learners : " + learners);

function courses (elements) {
    this.elements = elements;
    elements = ["Java","React","C#"];
    return elements;
  
}

courses(elements);