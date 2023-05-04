const fs = require('fs')

let read = fs.createReadStream('text.txt', 'utf8')

read.on('data', (chunk) => {console.log(chunk)})
