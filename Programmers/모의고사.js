// const answers = [1, 2, 3, 4, 5];
const answers = [1, 3, 2, 4, 2];
console.log(solution(answers));

function solution(answers) {
    let result = [];
    let count = [];
    const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    for (let pattern of patterns) {
        let total = 0;
        if (answers.length <= pattern.length) {
            total = markAnswer(answers, pattern);
        } else {
            let n = Math.ceil(answers.length / pattern.length);
            let arr = new Array(n).fill(pattern);
            let patternArray = [];
            for (let a of arr) {
                patternArray.push(...a);
            }
            total = markAnswer(answers, patternArray);
        }
        count.push(total);
    }
    console.log(count);
    let maximum = Math.max(...count);
    for (let i in count) {
        if (count[i] === maximum) {
            result.push(parseInt(i) + 1);
        }
    }
    return result.sort((a, b) => (a - b));
}

function markAnswer(answers, pattern) {
    let total = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === pattern[i]) {
            total++;
        }
    }
    return total;
}