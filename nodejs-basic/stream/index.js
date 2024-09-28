const fs = require('fs');

const readAbleStream = fs.createReadStream('./input.txt', {highWaterMark: 10})

readAbleStream.on('readable', () => {
    try{
        process.stdout.write(`[${readAbleStream.read}]`)
    }catch(error){
        console.log(error)
    }
})

readAbleStream.on('end' , () =>{
    console.log('DONE')
})