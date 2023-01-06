//largest among three numbers

import readline from "readline-sync"
const largest= (n1,n2,n3) =>{
    if(n1>=n2 && n1>=n3){
        return  "n1 is largest"
    }
    else if (n2>=n1 && n2>=n3){
        return "n2 is largest"
    }
    else if (n3>=n1 && n3>=n2){
        return "n3 is largest"
    }
    else return "check your number"
}
const largestNumber =