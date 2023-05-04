const fs = require('fs')
const readline = require("readline")

let file = fs.open('file.txt')

let writeStream = fs.createWriteStream(file)


