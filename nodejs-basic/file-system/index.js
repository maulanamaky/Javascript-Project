const fs = require('fs')

const fileRead = fs.readFile('./file-system/notes.txt', 'UTF-8', (err, data) =>{
    if(err){
        console.log(err);
        return;
    }

    console.log(data)
})