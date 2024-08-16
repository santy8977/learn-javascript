// 1. Map
let numbers = [1, 2, 3];
let doubleNumbers = numbers.map((a) => a * 2);
console.log(doubleNumbers);

// F -> C
let fahTem = [32,50,75,95];

function fahToCel(fah){
    return (fah - 32) * (5/9);
}
let celTemp = fahTem.map(fahToCel);
console.log(celTemp);

// Filter
let num = [1,2,3,4,5,6,7,8,9,10];
let evenNum = num.filter((e) => e % 2 == 0);
console.log("Even num: "+evenNum);

let employee = [
    {name:"John", age:30, gender:"male"},
    {name:"Bob", age:50, gender:"male"},
    {name:"Lisa", age:20, gender:"female"},
    {name:"James", age:45, gender:"male"},
    {name:"Mona", age:40, gender:"female"},
];

let femaleEmpOver30 = employee.filter((emp) => {
     return emp.gender == "female" && emp.age >= 20;

});
console.log(femaleEmpOver30);

// 3. Reduce
let numb = [1,2,3,4,5]  // get total count = 15
let count = numb.reduce((acc, num) => acc+num, 0);
//1st --> 0+1 = 1
//2nd --> 1+2 = 3
//3rd --> 3+3 = 6
//4th --> 6+4 = 10
//5th --> 10+5 = 15
console.log("Total count " + count);

// Count Max number
let top = [10,50,30,20,40];
let maxCount = top.reduce((max, num) => {
    if(num > max) {
        return num;
    }
    else {
        return max;
    }
}, top[0]);

console.log("Max count " + maxCount);

// Count Min number
let nums = [35,60,25,50,10];
let minNum = nums.reduce((min, num)=>{
    if(num < min) {
        return num;
    } else{
        return min;
    }
}, nums[0]);
console.log("Min num " + minNum);

// cart : name, price
let cartItems = [
    {name:"Jeans", price:500},
    {name:"Tshirt", price:350},
    {name:"Shoes", price:1000},
    {name:"Jacket", price:1500},
    {name:"Cap", price:250},
]
let totalCost = cartItems.reduce((totalPrice, item) => totalPrice + item.price, 0);
console.log("Shopping Cost " + totalCost);