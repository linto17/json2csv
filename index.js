

const fs = require('fs')


let data = fs.readFileSync("./data.json").toString()


let arr = data.split('\n')

var json2csv = require('json2csv').parse;

let all = arr.map(x => JSON.parse(x))

fs.writeFileSync('./output.csv', json2csv(all))

console.log("Hurray", arr.length)