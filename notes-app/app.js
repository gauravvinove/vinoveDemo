const validator = require('validator');
const fs = require('fs');
const name = require('./utils');
console.log(name);
console.log(validator.isEmail('gaurav@gmail.com'))
//fs.writeFileSync('msg.txt','this is our first txt file....');
//fs.appendFileSync('msg.txt','added second line in the file..');