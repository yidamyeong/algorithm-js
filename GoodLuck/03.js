const prices = [12,6,6,12,6,24,30,32,34,36,24,18,6,6,18,30,6];
// result = [1, -1, 3, 1];

console.log(solution(prices));

function solution(prices) {
    let answer = [];
    let gap = [];

    for (let i = 1; i < prices.length; i++) {
        gap.push(prices[i] - prices[i - 1]);
    }
    console.log(gap);

    let i = 0;
    while (i < gap.length - 1) {
        if (gap[i] * gap[i + 1] < 0) {
            answer.push(i);
            i++;
        } else {
            for (let j = i + 1; j < gap.length; j++) {
                if (gap[i] * gap[j] === 0) {
                    i = j + 1;
                } else if (gap[i] * gap[j] < 0) {
                    answer.push(j - i);
                    i = j;
                    break;
                }
            }
        }
    }
    return answer;
}