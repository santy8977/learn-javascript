class Car {

    constructor(name, price, model, color){
        this.name = name;
        this.price = price;
        this.model = model;
        this.color = color;
    }
    refuel(){
        console.log(this.name +" is refueled");
    }
}

const c1 = new Car("BMW", 10000, "520w", "Red")
console.log(c1);
console.log(c1.name);
console.log(c1.price);
console.log(c1.model);
console.log(c1.color);

const c2 = new Car("Audi", 15000, "R8", "Blue")
console.log(c2);
console.log(c2.name);
console.log(c2.price);
console.log(c2.model);
console.log(c2.color);