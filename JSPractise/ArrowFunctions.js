const square = num => num * num;
const result = square(5);
console.log(result);

const msg = () => 'hello js';
console.log(msg());

const add = (a,b) => a+b;
console.log(add(5,10));

const getFullName = (person) => `${person.firstName} ${person.lastName}`

const person = {
    firstName: 'James',
    lastName: 'Bond'
}
const fullName =  getFullName(person);
console.log(fullName);

const greet = (username='guest', age=0) => `Hello, ${username}! you are ${age} years old`;
const g1 = greet();
console.log(g1);

const g2 = greet("Tom", 40);
console.log(g2);

// rest parameters ...varargs
const sum = (...numbers) => numbers.reduce((acc, num) =>acc+num, 0);
const total = sum(1,2,3,4,5);
console.log(total);

// 
const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('other details: ', details);
};

browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');

// max num using Math
const findMaxNum = (a,b,c) => {
    return Math.max(a,b,c);
};
const maxValue = findMaxNum(20,10,50);
console.log("Max value: " + maxValue);