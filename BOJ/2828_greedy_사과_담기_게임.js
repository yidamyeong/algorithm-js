/* 상근이는 오락실에서 바구니를 옮기는 오래된 게임을 한다.
스크린은 N 칸으로 나누어져 있다.
스크린의 아래쪽에는 M 칸을 차지하는 바구니가 있다. (M<N)
플레이어는 게임을 하는 중에 바구니를 왼쪽이나 오른쪽으로 이동할 수 있다.
하지만, 바구니는 스크린의 경계를 넘어가면 안 된다.
가장 처음에 바구니는 왼쪽 M칸을 차지하고 있다.

스크린의 위에서 사과 여러 개가 떨어진다.
각 사과는 N칸중 한 칸의 상단에서 떨어지기 시작하며, 스크린의 바닥에 닿을때까지 직선으로 떨어진다.
한 사과가 바닥에 닿는 즉시, 다른 사과가 떨어지기 시작한다.

바구니가 사과가 떨어지는 칸을 차지하고 있다면, 바구니는 그 사과가 바닥에 닿을 때, 사과를 담을 수 있다.
상근이는 사과를 모두 담으려고 한다.
이때, 바구니의 이동 거리의 최솟값을 구하는 프로그램을 작성하시오.

첫째 줄에 N과 M이 주어진다. (1 ≤ M < N ≤ 10)
둘째 줄에 떨어지는 사과의 개수 J가 주어진다. (1 ≤ J ≤ 20)
다음 J개 줄에는 사과가 떨어지는 위치가 순서대로 주어진다.
*/

const fs = require('fs');
const input = process.platform === 'linux' ? fs.readFileSync('/dev/stdin').toString().split('\n') :
    `5 2
4
1
5
3
3`.split('\n');

const n = parseInt(input[0].split(' ')[0]);
const m = parseInt(input[0].split(' ')[1]);
const j = parseInt(input[1]);
const array = input.slice(2, 2 + j).map(el => parseInt(el));

let distance = 0;
let pos = 1;
for (let p of array) {
    // 떨어지는 위치 p
    // 현재위치 pos ~ pos + m - 1
    // 떨어지는 위치가 pos ~ pos + m - 1 이내라면 이동안함
    if (p >= pos && p <= pos + m - 1) {
        continue;
    }

    // 떨어지는 위치가 pos ~ pos + m - 1 보다 작으면 pos 를 p까지 차이만큼 이동
    if (p < pos) {
        distance += pos - p;
        pos = p;
    }

    // 떨어지는 위치가 pos ~ pos + m - 1 보다 크면 pos + m - 1 을 p까지 이동
    if (p > pos + m - 1) {
        distance += p - (pos + m - 1);
        pos = p - m + 1;
    }
}
console.log(distance);
