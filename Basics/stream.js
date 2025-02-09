const fs = require('fs');


const readStream = fs.createReadStream('./docs/blog2.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');
//on監聽data 每當buffer內有收到data，就執行callback
readStream.on('data',(chunk)=>{
    console.log('----new Chunk----')
    console.log(chunk.toString());
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk);
})

