//callback
//calling a function inside another function is called callback function
//connections between functions
 function one (call_two){
    console.log("step1 ")
    call_two( )
 }
 function two (){
    console.log("step2 ")
 }
one(two)
