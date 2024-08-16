function numsChars (inputString) {
    const numeric = [];
    const alphabet =  [];

    for(let char of inputString) {
        if(/\d/.test(char)) {
            numeric.push(Number(char));
        } else{
            alphabet.push(char);
        }
    } return {
        numeric: numeric,
        alphabet: alphabet
    };
}

const str = "ABC1542XYZ7890"
let result = numsChars(str);
console.log("Chars is", result.alphabet)
console.log("Numeric", result.numeric)