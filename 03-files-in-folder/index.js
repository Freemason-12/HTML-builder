const fs = require('fs')

fs.readdirSync(`${__dirname}/secret-folder/`, (error, files) => {
  if (error) console.error(error)
  return files
}).map(file => {
  fs.stat(`${__dirname}/secret-folder/${file}`, (error, fsr) => {
    if (error) console.error(error);
    console.log(fsr.isFile() ? `${file} is a file` : `${file} is not a file`)
    console.log(fsr.isDirectory() ? `${file} is a directory` : `${file} is not a directory`)
    console.log(`Last created at ${fsr.ctime}`)
    console.log(`Last modified at ${fsr.mtime}\n`)
  })
})

