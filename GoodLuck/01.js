/*
* 복서 선수들의 몸무게 weights와, 복서 선수들의 전적을 나타내는 head2head가 매개변수로 주어집니다.
* 복서 선수들의 번호를 다음과 같은 순서로 정렬한 후 return 하도록 solution 함수를 완성해주세요.

전체 승률이 높은 복서의 번호가 앞쪽으로 갑니다. 아직 다른 복서랑 붙어본 적이 없는 복서의 승률은 0%로 취급합니다.
승률이 동일한 복서의 번호들 중에서는 자신보다 몸무게가 무거운 복서를 이긴 횟수가 많은 복서의 번호가 앞쪽으로 갑니다.
자신보다 무거운 복서를 이긴 횟수까지 동일한 복서의 번호들 중에서는 자기 몸무게가 무거운 복서의 번호가 앞쪽으로 갑니다.
자기 몸무게까지 동일한 복서의 번호들 중에서는 작은 번호가 앞쪽으로 갑니다.
*
* */

const weights = [50,82,75,120];
const head2head = ["NLWL","WNLL","LWNW","WWLN"];
// result = [3, 4, 1, 2]
console.log(solution(weights, head2head));

function solution(weights, head2head) {
    const n = weights.length;
    let wins = [];  // 이긴 횟수
    let counts = [];  // 자신보다 무거운 사람을 이긴 횟수
    for (let i = 0; i < n; i++) {
        let win = 0;
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (head2head[i][j] === 'W') {
                win++;
                if (weights[i] < weights[j]) {
                    count++;
                }
            }
        }
        wins.push(win);
        counts.push(count);
    }
    let winRates = wins.map(a => a / (n - 1) * 100);
    let array = new Array(n);

    for (let i = 0; i < n; i++) {
        array[i] = {num: (i + 1), winRate: winRates[i], count: counts[i], weight: weights[i]};
    }

    let arraySort = array.sort((a, b) => {
        if (a.winRate !== b.winRate) {
            return b.winRate - a.winRate;
        } else {
            if (a.count !== b.count) {
                return b.count - a.count;
            } else {
                if (a.weight !== b.weight) {
                    return b.weight - a.weight;
                } else {
                    return a.num - b.num;
                }
            }
        }
    });
    console.log(arraySort);
    let as = arraySort.map(a => a.num);
    console.log(as);
    let answer = [];
    for (let arr of arraySort) {
        answer.push(arr.num);
    }
    return answer;
}
