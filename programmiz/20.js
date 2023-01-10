//calculator 
import readline from "readline-sync"

const calci = (opt) => {
let n1 = readline.question("Enter Number 1: ")
let n2 = readline.question("Enter Number 2: ")
switch (opt){
    case "+":
        result = n1 + n2
        console.log(result);
        break
}
}
console.log(opt)