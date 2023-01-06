//even or off

import readline from "readline-sync"

const evenOdd = num => {
    if (num %2===0){
        return "its even"
    }
    else if (num %2 ===1){
        return "its odd"
    }
    else
    return "Please check your number"
}
console.log(evenOdd(readline.question("Enter your number: ")))