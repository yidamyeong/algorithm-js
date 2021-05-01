const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]); // 또는 parseInt(input[0], 10);
const b = Number(input[1]); // 또는 parseInt(input[1], 10);

console.log(a+b);