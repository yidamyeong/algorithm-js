let a = [1, 2];
let b = [3, 4];

c = a + b;
console.log(c);  // 1,23,4

c = [a, b];
console.log(c);  // [ [ 1, 2 ], [ 3, 4 ] ]

c = [...a, ...b];
console.log(c);  // [ 1, 2, 3, 4 ]

