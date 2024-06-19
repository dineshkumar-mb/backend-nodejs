
const fs =require('fs');

fs.readFile("hello.txt","utf-8",(err,data)=>{
    if(err){
        console.error("error in reading file");
    }else{
        data.split('\n').forEach(line=>{
            console.log(line.split(':')[0]);
        })
        
    }
});