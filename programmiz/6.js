//to solve quadratic equation

import readlinesync from "readline-sync"

//
let a = readlinesync.question("Enter a: ")
let b = readlinesync.question("Enter b: ")
let c = readlinesync.question("Enter c: ")
let disc = Math.sqrt(b*b-4*a*c)
let root1 = (-b + disc)/(2*a)
let root2 =(-b- disc)/(2*a)
let result = (`${root1}, ${root2}`)
console.log(result)
