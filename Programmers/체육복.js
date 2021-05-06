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
for (let i = 0; i < n; i++) {
    if (student[i] > 1) {
        if (i > 0) {
            if (student[i - 1] < 1) {
                student[i] -= 1;
                student[i - 1] += 1;
            } else if (student[i + 1] < 1) {
                student[i] -= 1;
                student[i + 1] += 1;
            }
        } else {
            if (student[i + 1] < 1) {
                student[i] -= 1;
                student[i + 1] += 1;
            }
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

// 또다른 풀이
function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    for(let i = 1; i <= n; i++){
        students[i] = 1;
    }
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    for(let i = 1; i < n; i++){
        if(students[i] === 2 && students[i-1] === 0){
            students[i-1]++;
            students[i]--;
        } else if(students[i] === 2 && students[i+1] === 0){
            students[i+1]++;
            students[i]--;
        }
    }
    for(let key in students){
        if(students[key] >= 1){
            answer++;
        }
    }
    return answer;
}


// mino
function solution2(n, lost, reserve) {
    let students = Array(n).fill(1);
    for (let r of reserve) {
        students[r - 1] += 1;
    }

    for (let l of lost) {
        students[l - 1] -= 1;
    }

    for (let i = 1; i < n; i++) {
        let prev = students[i - 1];
        let curr = students[i];
        let next = students[i + 1];
        if (curr > 1) {
            if (prev == 0) {
                students[i - 1] += 1;
                students[i] -= 1;
            } else if (next == 0) {
                students[i + 1] += 1;
                students[i] -= 1;
            }
        }
    }

    return students.filter(el => el > 0).length;
}




