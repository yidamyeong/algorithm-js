const n = 5;
const lost = [2, 4];
const reserve = [1, 3, 5];

let student = [];
for (let i = 1; i <= n ; i++) {
    let cnt = 1;
    for (let j of lost) {
        if (j === i) cnt--;
    }
    for (let k of reserve) {
        if (k === i) cnt ++;
    }
    student.push(cnt);
}
console.log(student);
for (let i = 1; i <= n; i++) {
    if (student[i] > 1) {
        if (student[i - 1] < 1) {
            student[i] -= 1;
            student[i - 1] += 1;
        } else if (student[i + 1] < 1) {
            student[i] -= 1;
            student[i - 1] += 1;
        }
    }
}
console.log(student);

let result = 0;
for (let i of student) {
    if (i > 0) {
        result++;
    }
}
console.log(result);