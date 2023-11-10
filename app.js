 const fs = require ('fs');

// fs.readFile('test.txt','utf-8', (err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

const content = "Something here";

//append 
const contents = "happened here!";

const obj = [
    {
        id: 1,
        name: "Motaung",
        gender: "F",
        age: 22,

    },
    {
        id: 2,
        name: "Motau",
    }
]

let data = JSON.stringify(obj)


// writeFile
fs.writeFile('test.json',data,'utf-8', flag:'w+'} , err =>{
    if(err){
        console.log(err);
    }
    console.log('success!');
});

// append is adding 
fs.appendFile('test.txt',contents,err=>{
    if(err){
        console.log(err);
        return;
    }
});