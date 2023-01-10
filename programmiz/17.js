//Fibonacci series

// const fibonacci = (range)=>{
//     let n1=0;
//     let n2=1;
//     let n3;
//     for (let i=0;i<=range;i++){
//         console.log(n1)
//         n3 =n1+n2
//         n1 = n2;
//         n2 = n3;
//     }
// }
// fibonacci(7)


const fibonacci = (range) => {
    let n1 =0;
    let n2 =1;
    let n3;
    for (let i=0;i<=range;i++){
        console.log(n1)
        n3 =n1+n2
        n1 = n2;
        n2 =n3
    }
}
fibonacci (10)