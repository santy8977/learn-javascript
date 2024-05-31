





const function1 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from function 1");
        }, 2000);
    });
};

const function2 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from function 2");
        }, 2000);
    });
};

const function3 =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data from function 3");
        }, 2000);
    });
};

Promise.all([
    function1(),
    function2(),
    function3()
])
.then(dataArray =>{
    console.log("All data from diff functions: ", dataArray);
})
.catch(error=>{
    console.log("Error in promise", error)
});