let pattern = [1, 2, 3, 4, 5];
let patternArr = new Array(3).fill(pattern)
let array = [];
for (let i of patternArr) {
    array.push(...i);
}


console.log(patternArr);
console.log(array);