const fs = require('fs')

fs.promises.mkdir(`${__dirname}/files-copy`)

fs.promises.readdir(`${__dirname}/files/`, err => err).then(
  content => {
    content.forEach(file => {
      // fs.writeFile(`${__dirname}/files-copy/${file.toString()}`)
    }).then(file => { console.log(file) })
  })

// console.log(files)
