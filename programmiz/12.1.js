import readline from "readline-sync"
let n1 = readline.question("Enter number 1: ")
let n2 = readline.question("Enter number 2: ")
let n3 = readline.question("Enter number 3: ")
const arr = [n1,n2,n3]
const sort = arr.sort((a,b)=>b-a);
console.log(sort)
console.log(`The largest Number is ${sort[0]}`)