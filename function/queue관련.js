let arr = ['a', 'b', 'c'];

// 큐의 앞부분에서 요소 삭제
arr.shift();
console.log(arr);  // [ 'b', 'c' ]

// 큐의 끝부분에 요소 추가
arr.push('x');
console.log(arr);  // [ 'b', 'c', 'x' ]

// 큐의 앞부분에 요소 추가
arr.unshift('yy');
console.log(arr);  // [ 'yy', 'b', 'c', 'x' ]
