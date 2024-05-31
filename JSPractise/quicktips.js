// 1. find unique number
const array = [1,2,3,3,2,1,4,5,7,7,7,7];
const uniNum = [...new Set(array)];
console.log(uniNum);

// 2. int to String
const num = 2;
const numStr = num + "";
console.log(numStr+10);
//or
const numStr1 = String(num);
console.log(numStr1+10);

// 3. Float to int
const fl = 3.75;
const intNum = parseInt(fl);
console.log(intNum);

// 4. chaeck if vaiable is number
const value = '50';
if(typeof value == 'number' && !isNaN(value)){
    console.log(value + " is a number");
} else{
    console.log(value + "is not a number");
}

// 5. swap variable 
let a = 5;
let b =10;
[a,b] = [b,a];
console.log(a,b);

// 6. check if an object has a property
const person = {
    name: 'John',
    age: '30',
}
if(person.hasOwnProperty('name')){
    console.log("person has property");
} else {
    console.log("person doesnot have property");
}

// 7. remove fasly value from array: (false, 0, null, undefined, NaN)
const values = [0,1, false,null,2, undefined, 3, NaN,4];
const newvalue = values.filter(Boolean);
console.log(newvalue);

// 8. String -> upper case and lower case
const str = "Java scripting here";
const u1 = str.toUpperCase();
const u2 = str.toLowerCase();
console.log(u1);
console.log(u2);

// 9 check if array contains a values
const lang = ['java', 'javascript', 'python', 'ruby'];
if(lang.includes('javascript')){
    console.log('found');
}

// 10. check if an array is empty
const empty = [1,2,3,4];
if(empty.length == 0){
    console.log("empty");
} else {
    console.log("not empty");
}

// 11. generate random number
const min = 10;
const max = 200;
const ranNum = Math.floor(Math.random() * (max - min + 1))+min;
console.log(`Random number : ${ranNum}`);

// 12. String to number
const strNumber = '32.33';
const x1 = parseInt(strNumber);
console.log(x1);

// 13. Join array elements into string
const words = ['Hello', 'Javascript'];
const sent = words.join(' ');
console.log(sent);

// 14. get object property
const user = {
    name: 'Tom',
    age: '25',
    birthday: '01-01-1999'
};
console.log(user['name']);
console.log(user['age']);
console.log(user['birthday']);

// 15. clone an array or object
const marks = [10,20,30,40]
const duplicate = [...marks];
console.log(duplicate);
const userDuplicate = {...user};  // spread operator
console.log(userDuplicate);

// 16. convert object to array
const employee = {
    name: 'Tom',
    age: '25',
    birthday: '01-01-1999'
};
// a. keys array
const keysArray = Object.keys(employee);
console.log(keysArray);

// b. values array
const valuesArray = Object.values(employee);
console.log(valuesArray);

// c. key-values array
const keyValuesArray = Object.entries(employee);
console.log(keyValuesArray);

// 17. get date and time
const currentDate = new Date();
console.log(currentDate.toLocaleString);

// 18. check variable is defined
let i;
if(typeof i == 'undefined'){
    console.log("variable not defined");
}

// 19. Truncate an array
const test = [1,2,3,4,5,6];
test.length = 3;
console.log(test);

// 20. Last item in array
const pop =  [1,2,3,4,5,6];
const n1 = pop.slice(-1);
console.log(n1);
