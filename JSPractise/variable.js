
// Difference Between var, let and const
//         Scope	Redeclare	Reassign	Hoisted	    Binds this
// var	    No	    Yes	        Yes	        Yes	        Yes
// let	    Yes	    No	        Yes	        No	        No
// const	Yes	    No	        No	        No	        No

// What is Good?
// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// What is Not Good?
// var does not have to be declared.

// var is hoisted.

// var binds to this.



var pop = "hello js";
function rel() {
    var top = "Welcome js";
    console.log("Print this " + top);
}
// console.log("Print this " + top);
// Call the function and add error handling
try {
    rel();
} catch (error) {
    console.error("Error occurred:", error);
}


let m = "hey john"; 
let time = 5;
if(time > 3) {
    let msg = "hey how r u?";
    console.log(msg);
}



