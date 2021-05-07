/*
[1, 1000, 3, 2].sort() 를 했을 때 어떻게 되는지 node.js 에서 실행해보세요
    [1, 1000, 3, 2].sort(function (a, b) { return a - b });
또는
    [1, 1000, 3, 2].sort((a, b) => a - b); 의 차이를 아시는게 좋습니다
console.log([1, 1000, 3, 2].sort());
console.log([1, 1000, 3, 2].sort(function (a, b) { return a - b }));
console.log([1, 1000, 3, 2].sort((a, b) => a - b));
 */

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

let answer = [];
for (let command of commands) {
    let start = command[0] - 1;
    let end = command[1];
    let idx = command[2] - 1;
    let newArr = array.slice(start, end);
    answer.push(newArr.sort((a, b) => (a - b))[idx]);
}
console.log(answer);

// function solution(array, commands) {
//     var answer = [];
//     for (let command of commands) {
//         let start = command[0] - 1;
//         let end = command[1];
//         let idx = command[2] - 1;
//         let slicedArr = array.slice(start, end);
//         answer.push(slicedArr.sort((a, b) => a - b)[idx]);
//     }
//     return answer;
// }