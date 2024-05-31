const fs = require('fs');

const data = fs.readFileSync("testing.txt", "utf-8");
console.log(data);

console.log("Bye Java")