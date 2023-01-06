//promise object represents the ventual completion (or failure) of an async operation and its resulting value
const count = true;
let countValue = new Promise(function(resolve,reject){
    if(count){ //count ===false //rejected
        resolve("There is a count value")
    }else{
        reject("There is no count value")
    }
})
console.log(countValue)



