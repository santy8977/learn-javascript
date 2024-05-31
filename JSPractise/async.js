const fs = require('fs');

const data = fs.readFile("testing.txt", "utf-8", (error, data)=> {
    console.log(data)
});

console.log("Bye Java and add Javascript")