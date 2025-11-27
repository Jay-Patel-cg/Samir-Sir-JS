// function in C  
// pass by value 
// pass by Address
// pass by reference 
// alias word
// diff between struk and union 
// rest varaible



// Three type of function 


// 1. normal function 

// function add(){
//     // code
// }




// // 2. arrow function 

// var add1 = ()=>{
//    console.log("Hello");
//    return 10;
// }
// add1();
// console.log(add1());




// 3. normal function

// var add2 = function(){
//     console.log("Hii");
//     return 0;
// }
// add2();
// console.log(add2);
// console.log(add2());

// pass argument -> directly value (function define -> datatype varaible ), varaible()


// js ->>> entire function

function add(a,b){
    console.log(a+b);
    return (a,b)=>{
        console.log(a-b);
    }
}

var sub = add(10,20);
console.log(sub(10,20));




