let arr = ['a', 'b', 'c'];
arr.push('d');
console.log(arr);  // [ 'a', 'b', 'c', 'd' ]

arr.unshift('e');  // 배열의 앞 쪽에 요소를 추가
console.log(arr);  // [ 'e', 'a', 'b', 'c', 'd' ]

arr.splice(2, 0, 'f');  // index 2 ('b')의 위치에 요소를 추가
console.log(arr);  // [ 'e', 'a', 'f', 'b', 'c', 'd' ]
