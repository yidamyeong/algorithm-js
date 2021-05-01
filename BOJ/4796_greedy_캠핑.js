/* 5월 1일(토) */
const inputs = [
    '5 8 20',
    '5 8 17',
    '10 20 28',
    '0 0 0'
];
const data = [];

for (let input of inputs) {
    data.push(input.split(' '));
}

console.log(data)

for (let i = 0; i < data.length; i++) {
    let l = parseInt(data[i][0]);
    let p = parseInt(data[i][1]);
    let v = parseInt(data[i][2]);
    let result = solution(l, p, v);
    console.log('Case ' + (i + 1) + ': ' + result);
}

function solution(l, p, v) {
    if (l === 0 || p === 0 || v === 0) {
        return '종료';
    }
    if (v % p < l) {
        return (parseInt(v / p) * l) + (v % p);
    } else {
        return (parseInt(v / p) + 1) * l;
    }
}