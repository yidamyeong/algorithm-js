// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' ');
    /**
     * join(separator?: string): string;  => 이말인 즉, separator 가 있어도 되고, 없어도 된다.(물음표)
     * separator 가 없으면 결과값 : apple,banana,orange
     */
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple, kiwi, banana, cherry';
    const result = fruits.split(',');
    const result2 = fruits.split(',', 2);
    /**
     * split(separator: string | RegExp, limit?: number): string[];
     */
    console.log(result);
    console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);  // 배열 자체도 변한다! 잊지 말기
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    /**
     * slice(start?: number, end?: number): T[];
     */
    // splice()는 잘라내는 함수
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {  // properties
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    // const result = students.find(function(student) {
    //     return student.score === 90;
    // });
    const result = students.find((student) => student.score === 90);
    /**
     * 첫 번째로 찾아진 true 인 요소를 리턴한다. 찾지 못하면 undefined 리턴
     * find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
     */
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    // some : 단 한 명이라도 조건을 충족한다면 true
    const result2 = !students.every((student) => student.score >= 50);
    // every : 배열의 모든 요소가 조건을 충족해야 true
    console.log(result);  // true
    console.log(result2);  // true
}

// Q9. compute students' average score
{
    // const example = students.reduce((prev, curr) => {
    //     console.log('----------');
    //     console.log(prev);
    //     console.log(curr);
    //     return curr;
    // })
    /** 누적할 때는 reduce!
     * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
     * reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
     */
    const result = students.reduce((prev, curr) => {
        console.log('----------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0); // initial value 0 으로 주는거 중요!

    // reduceRight 역순으로 더하기!!
    const result2 = students.reduceRight((prev, curr) => {
        console.log('----------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0); // initial value 0 으로 주는거 중요!
    console.log(result / students.length);
    console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
        .map((student) => student.score)
        .join(', ');
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => (a - b))
        .join(', ');
    console.log(result);
}