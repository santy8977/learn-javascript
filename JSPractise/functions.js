// 1. function declaration

function add(a, b){
    return a+b;
}

const sum = add(5,7);
console.log(sum);

// 2. Function Expression: Annonymous function
const multiple =  function(x,y){
    return x*y;
}
const mul = multiple(5,7);
console.log(mul);

// 3. Arrow function exp: Annonymous function
const divide = (t1,t2) => t1/t2;
const div = divide(20,2);
console.log(div);

// 4. Function Constructor
const substract = new Function('a','b', 'return a - b;'); 
const subs = substract(10,2);
console.log(subs);

// 5. IIFE(Immediatly Invoked Function Expression)
(function() {
    console.log("server is up n running on port 3000");
})();

// 6. Generator Function:
//function* and yield keyword
function* genNum(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
const gen = genNum();
console.log(gen.next().value);

// 7. Annonymous function:
//no specific name
const numbers = [1,2,3,4,5];
const sqNum = numbers.map(function(e){
    return e * e;
});
console.log(sqNum);

const number = [1,2,3,4,5];
const sqNums = number.map((e) =>{
    return e * e;
});
console.log(sqNums);

// 8. Recursive function
function factorial(n){
    if(n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(100));

// 9. Higher-Order function:
function add(a,b){
return a+b;
}
function multiplication(a,b){
    return a*b;
}

function operate(funcName, a, b){
    return funcName(a,b);
}

const s = operate(add, 4, 5);
const m = operate(multiplication, 4, 5);

console.log(s);
console.log(m);
