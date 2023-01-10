//largest among three numbers

import readline from "readline-sync"
let n1 = readline.question("Enter number 1: ")
let n2 = readline.question("Enter number 2: ")
let n3 = readline.question("Enter number 3: ")
const arr = console.log([n1,n2,n3])
const largest= (arr) =>{
    if(arr[0]>=arr[1] && arr[0]>=arr[2]){
        return  "n1 is largest"
    }
    else if (arr[1]>=arr[0] && arr[1]>=arr[2]){
        return "n2 is largest"
    }
    else if (arr[2]>=arr[0] && arr[2]>=arr[1]){
        return "n3 is largest"
    }
    else return "check your number"
}

console.log(largest(arr))

