
// Difference Between var, let and const
//         Scope	Redeclare	Reassign	Hoisted	    Binds this
// var	    No	    Yes	        Yes	        Yes	        Yes
// let	    Yes	    No	        Yes	        No	        No
// const	Yes	    No	        No	        No	        No

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



