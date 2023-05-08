let fs = require('fs')
const { exit } = require('process')
const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout, })

function receiveInput() {
  rl.question("what is your name?", function(name) {
    console.log(name)
    // if (name === "exit") exit("bye")
    fs.appendFile("./file.txt", name + "\n", function(error) {
      if (error) console.error(error)
    })
    receiveInput()
    // rl.close()
  })
}

receiveInput()
