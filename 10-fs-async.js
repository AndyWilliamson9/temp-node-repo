const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}`,
    {flag: 'a'})

console.log(first);
console.log(('done with this task'));
console.log(('starting next one'));
