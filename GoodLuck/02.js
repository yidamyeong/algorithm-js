const leave = 4;
const day = 'FRI';
const holidays = [6, 21, 23, 27, 28];
// result = 10;

console.log(solution(leave, day, holidays));

function solution(leave, day, holidays) {
    let answer = -1;
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const dNum = [6, 5, 4, 3, 2, 1, 0];
    let ss = [];

    for (let d in days) {
        if (d === day) {

        }
    }



    return answer;
}

function findSatSun(day) {
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const dNum = [6, 5, 4, 3, 2, 1, 0];
    let ss = [];

    for (let i = 0; i < days.length; i++) {
        if (day === days[i]) {
            let d = dNum[i];
            let n = 0
            while (n <= 30) {
                ss.push(d + 1);
                ss.push(d + 1);

            }
        }
    }

}