/**/
const input = '5\n2\n2 4';
// const input = '3\n1\n0';

const NMX = input.split('\n');
const N = parseInt(NMX[0]);
const M = parseInt(NMX[1]);
const XArr = NMX[2].split(' ').map(el => parseInt(el));

console.log(solution(N, M, XArr));

function solution(n, m, xArr) {
    let h = 0;
    if (m === 1) {
        return Math.max(xArr[0], (n - xArr[0]));
    } else if (m > 1) {
        for (let i = 0; i < xArr.length - 1; i++) {
            if (i === 0) {
                h = Math.max((xArr[i]), (xArr[i + 1] - xArr[i]));
            } else {
                h = Math.max(h, (xArr[i + 1] - xArr[i]));
            }
        }
        return Math.max(h, (n - xArr[m - 1]));
    }
}
