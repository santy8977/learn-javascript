function getEvenNum(value, delay) {

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(value % 2 == 0) {
                resolve(value);
            } else {
                reject(new Error("value is not even"));
            }
        }, delay);
    });
}

getEvenNum(4, 2000)
.then(result =>{
    console.log("Step 1 : getting results with even num:", result);
    return getEvenNum(5,1000)
})
.then(result =>{
    console.log("Step 2 : getting results with even num:", result);
})
.catch(error =>{
    console.error("Promise chain error: ", error);
});