//factorial
// let Number=5
// let fact = 1;
// for(let i=1;i<=Number;i++){
//     fact*=i
//     console.log(fact)
// }


const factorial = number =>{
    let fact =1;
    for(let i=1;i<=number;i++){
        fact *= i
    }
    console.log(fact)
}
factorial(5)