// Function
// - fundamental building block in the program 프로그램을 구성하는 아주 기본적인 빌딩 블럭
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb  함수명 짓기가 너무 어렵다면, 너무 많은 기능을 담은건 아닌지 돌아보기
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS  함수는 객체다!
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello dam0');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage1(message, from) {
    if (from === undefined) {
        from = 'unknown !';
    }
    console.log(`${message} by ${from}`);
}
function showMessage2(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage1('Hi!');
showMessage2('Hi!');

// 4. Rest parameters (added in ES6) (...)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 같은 결과
    for (const arg of args) {
        console.log(arg);
    }
    // 같은 결과
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();
// printAnother(); 실행안됨

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good ! 조건 맞지 않는 경우를 빨리빨리 리턴해주기
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// 함수가 변수에 할당되고, 파라미터로 전달되고 리턴값으로도 쓰인다.
// 함수도 hoisting 된다.
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
    // anonymous function : 익명함수
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions (재귀)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous 애로우 펑션은 언제나 익명!
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};
const simpleMultiply2 = (a, b) => a * b;
console.log(simpleMultiply2(3, 7));

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 바로 호출!
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));