/* 5월 1일(토) */
// const inputs = [
//     '5 8 20',
//     '5 8 17',
//     '10 20 28',
//     '0 0 0'
// ];
// const data = [];
//
// for (let input of inputs) {
//     data.push(input.split(' '));
// }
//
// console.log(data)
//
// for (let i = 0; i < data.length; i++) {
//     let l = parseInt(data[i][0]);
//     let p = parseInt(data[i][1]);
//     let v = parseInt(data[i][2]);
//     let result = solution(l, p, v);
//     console.log('Case ' + (i + 1) + ': ' + result);
// }
//
// function solution(l, p, v) {
//     if (l === 0 || p === 0 || v === 0) {
//         return '종료';
//     }
//     if (v % p < l) {
//         return (parseInt(v / p) * l) + (v % p);
//     } else {
//         return (parseInt(v / p) + 1) * l;
//     }
// }

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let input = [
//     '5 8 20',
//     '5 8 17',
//     '0 0 0'
// ]
for (let i = 0; i < input.length; i++) {
    if (input[i] === '0 0 0') return;
    const lpv = input[i].split(' ').map(el => parseInt(el));
    const l = lpv[0];
    const p = lpv[1];
    const v = lpv[2];
    // 총 v일을 p일씩 끊어서 그중 l일만 계산, 그리고 나머지와 l 일중 작은 수만큼 계산
    let result = Math.trunc(v / p) * l;
    result += Math.min(l, v % p);
    console.log(`Case ${i + 1}: ${result}`);
}