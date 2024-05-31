// callback function 
// asunc call/task -- once this task is complted -- then only callback function will be called

// basic callback:
function greet(name, callback){
    console.log('Hello' + name); // normal /sync step/task , could be async call/api
    callback();
}

//callback function
function welcome(){
    console.log('Welcome!!!!');
}

greet('Javascript', welcome);


//callback with async function
function printInfo(name, callback){
//async function/task/step
setTimeout(function(){
    console.log("printing info for " +name)
    callback("please call me back");
}, 5000); //delay of 5 sec
}

//callback
function displayMsg(msg){
    console.log(msg)
}

printInfo("Lisa", displayMsg);


//2.
function fetchUserData(userId, callback) {
    setTimeout(function(){
        const user = {
            1: { id: 1, name: "John"},
            2: { id: 2, name: "Tom"},
        };

        const users =  user[userId]
        if(users){
            callback(null, users);
        } else{
            callback("User not found..", null);
        }
    }, 2000);
}

//callback function
function handleUserData(error, users){
    if(error) {
        console.error("error : ", error);
    } else {
        console.log("User : ", users);
    }
}

fetchUserData(1, handleUserData);