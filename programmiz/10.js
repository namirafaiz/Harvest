//positive or negative

const posNeg = num => {
    if (num == 0){
       return "its zero"
    }
    else if (num<0){
        return "its negative"
    }
    else
    return "its positive"
}
console.log(posNeg(-10))