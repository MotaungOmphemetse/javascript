// Json implements
// const myDetails = `{"name" : "Omphemetse" ,"surname": "Motaung", "course": "Computer Science"}`;
// const data = JSON.parse(myDetails);
// console.log(data);

// // Perform a string of array
// const result = JSON.stringify(myDetails);
// console.log(result.toUpperCase());

const fs = require ('fs');

function readData(){
    fs.readFile('students.json','utf-8',(err,jsonString) =>{
        if(err){
            console.error(err);
            return;
        }
        console.log()
    });
}




