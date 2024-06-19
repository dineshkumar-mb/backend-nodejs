
const fs =require('fs');
const message ="\nhello, world";
fs.appendFile("hello.txt",message,(error)=>{
    if(error){
        console.error("error in writing file");
    }else{
        console.log("file written successfully");
    }
})