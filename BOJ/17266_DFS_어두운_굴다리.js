/**/
const input = '5\n2\n2 4';
// const input = '3\n1\n0';

const NMX = input.split('\n');
const N = parseInt(NMX[0]);
const M = parseInt(NMX[1]);
const X = NMX[2].split(' ').map(el => parseInt(el));

console.log(solution(N, M, X));

function solution(n, m, x) {
    let h = 0;
    if (m === 1) {
        return Math.max(x[0], (n - x[0]));
    } else if (m > 1) {
        for (let i = 0; i < x.length - 1; i++) {
            if (i === 0) {
                h = Math.max((x[i]), (x[i + 1] - x[i]));
            } else {
                h = Math.max(h, (x[i + 1] - x[i]));
            }
        }
        return Math.max(h, (n - x[m - 1]));
    }
}
