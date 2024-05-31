// Static var/function : call by class name
// Non-Static var/function : call by object reference name

class Car {
    static wheel = 4; // static variable
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
    }
    //static function
    static stop(){
        console.log("Stop the car");
    }
    // non-static function
    drive(){
        console.log(this.name + " is driving");
    }
}
const c1 = new  Car("BMW", "520", 50);
console.log(`${c1.name},${c1.model},${c1.price},${Car.wheel}`);
Car.stop();
//Car.drive();//error
c1.drive();
//c1.stop();//error

