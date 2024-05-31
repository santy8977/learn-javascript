// 1. Object Literals: {}
const user = {
    name:'michael',
    age: 25,
    country: 'usa'
};
console.log(user.name);
console.log(user.country);

// 2. Constructor Function
function Car(brand, model, price){
    this.brand = brand;
    this.model = model;
    this.price = price;
};
const c1 = new Car("BMW", "520d", 10000);
const c2 = new Car("Audi", "Q7", 15000);

console.log(c1.brand + " " + c1.model + " " + c1.price);
console.log(c2.brand + " " + c2.model + " " + c2.price);

// 3. Class style
class Customer{
    constructor(name, product){
        this.name = name;   // instance variable
        this.product = product;
    }
    addToCart(){
        console.log(`${this.product} added to cart`);
    }
}
// instance of the class:
const cust1 = new Customer("John", "Apple Macbook Pro");
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart();

// Object.create(): with some prototype
const employeePrototype = {
    printInfo:function(){
        console.log(`Hello, emp name is ${this.name}`);
    }
};
const e1 = Object.create(employeePrototype);
e1.name = 'Tom';
e1.printInfo();

// 4. using Factory Function: returns an objects
function createDepartment(deptName, hod){
    return{
        deptName: deptName,
        hod: hod,
        getDeptInfo:function(){
            console.log(`Hello, dept name is ${this.deptName} and hod is ${this.hod}`);
        }
    }
}
 const dept1 = createDepartment("Physics", "SR Sharma");
 const dept2 = createDepartment("Maths", "H C Verma");
 dept1.getDeptInfo();
 dept2.getDeptInfo();

 console.log(dept1.deptName + " " + dept1.hod);
