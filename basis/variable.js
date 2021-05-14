'use strict';
// 1. Use strict
// 바닐라자바스크립트일 때 저 문구를 써주는 게 좋다.
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5 : 에크마스크립트 5에 선언된 것. 좀더 엄격하게 다룬다.

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';  // global 변수
{  // Block Scope : 블럭 밖에서는 블럭 안의 코드에 접근할 수 없음
let name = 'Jess';
console.log(name);
name = 'hello';
}
// console.log(name);  // 출력 안 됨
console.log(globalName);

// var (don't ever use this!)
// 값을 선언하기도 전에 쓸 수 있다. var hoisting 이라고 부른다.
// 호이스팅이란 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것이다.
// has no block scope : 블럭을 철저히 무시한다.
{
    age = 4;
    var age;
}
console.log(age); // 블럭 밖에서 블럭 안으로 접근함. 블럭 개념이 없음

// 3. Constant : 값을 선언함과 동시에 할당한 뒤로는 절대 값을 변경할 수 없다. r (read only)
// favor immutable data type always for a few reasons:
// - security : 보안상 이유. 해커들이 맘대로 바꿀 수 없음
// - thread safety : 다양한 쓰레드들이 동시에 값에 접근해서 변경할 수 있는데, 여기로부터 자유로움
// - reduce human mistakes
// 값을 계속 변경할 수 있는 것을 Mutable 데이터 타입이라고 하고, let 이 여기에 해당한다.
// const : immutable 데이터 타입이다.

/** Note!
 * Immutable data types: primitive types, frozen objects (i.e. object.freeze())
 * Mutable data types: all objects by default are mutable in JS
 * favor immutable data type always for a few reasons:
 * -security
 * -thread safety
 * reduce human mistakes
 */


// 4. Variable types 변수의 데이터 타입!
// primitive : 더 이상 작은 단위로 나눠질 수 없는 한 가지의 아이템
//             number, string, boolean, null, undefined, symbol
// object (싱글 아이템들을 하나로묶어 박스로 관리할 수 있도록 한 것), box container
// function
// 자바스크립트에서는 펑션도 변수에 할당이 가능하고 함수의 인자로도, 리턴값으로도 쓸 수 있음 => first-class function
// 자바스크립트에서는 여러가지 int, double .. 이런거 없고 number 하나면 다 돼! 숫자는 무조건 number

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);  // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`);  // value: 17.1, type: number

// number - special numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);  // Infinity
console.log(negativeInfinity);  // -Infinity
console.log(nAn);  // NaN

// bigInt (fairly new, don't use it yet)
// big 만 붙이면 됨. 아직 지원되는 브라우저 적음
const bigInt = 1234567890123456789012345678901234567890;  // over (-2**53) ~ 2**53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1;  // false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);  // value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때 씀.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  // false. 동일한 스트링으로 작성해도 다른 값으로 인식함
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true. 동일한 스트링일 때는 같은 심볼이었으면 좋겠다면 Symbol.for 를 쓴다.
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  // value: id, type: symbol
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`);  description 으로 스트링화하지 않으면 에러난다.

// object, real-lif object, data structure
const dam0 = { name: 'dam0', age: 20 }
dam0.name = 'jess';
console.log(dam0);  // { name: 'jess', age: 20 } 변경가능함..!!!!

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);  // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);  // value: 1, type: number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);  // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);  // value: 4, type: number
// console.log(text.charAt(0));  문자열이 아니기때문에 에러가 난다!
// 다이나믹 타이핑때문에 뒷통수 맞는게 너무 많아서 나온게 TypeScript





