// 1. every()
let numbers = [1,2,3,4,5];
let flag = numbers.every((a) => a<10);
console.log("Check the numbers every :" +flag);

// 2. some()
let number = [1,2,3,4,5];
let fg = number.some((a) => a % 2 == 0);
console.log("Check some :"+fg);

// 3. find()
let total = [1,2,3,4,5,7,9];
let fe = total.find((a) => a % 2 == 0);
console.log("Find array :" +fe);

// 4. indexOf()
let arr = ['apple', 'banana', 'mango', 'blackberry'];
let indexOf_str = arr.indexOf('blackberry'); // -1 if not found in
console.log("index of blackberry " +indexOf_str);

// 5. lastIndexOf()
let fruits = ['apple', 'banana', 'apple', 'mango', 'blackberry'];
let lastApple = fruits.lastIndexOf('apple');
console.log("Last of index " +lastApple);

// 6. reverse()
let fruitsRev = ['apple', 'banana', 'apple', 'mango', 'blackberry'];
let reverse = fruitsRev.reverse(); 
console.log("Reverse friuts :" +reverse);
console.log("Check the data");

// 6. sort()
let products = ['mackbook', 'imac', 'ipad', 'canon'];
let proSort = products.sort(); 
console.table(proSort);
