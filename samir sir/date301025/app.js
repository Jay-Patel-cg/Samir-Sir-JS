// obj1={
//     add: function(a,b){
//         console.log(a+b);
//     }
// }
// obj1.add(4,9);


// var heading = document.querySelectorAll('h1')
// console.log(heading.textcontent);



// var a =10;
// console.log(`hii ${a} there`);


// let button = document.getElementById("button");
// let body = document.body;
// button.addEventListener('click', function(){
//     body.style.backgroundColor="black";
// });

let count = 0; 
function time(){
    count++;
    if(count<=10){
    console.log("hii");
    }
    else{
        clearInterval(id);
        console.log("Stoped");
        
    }
}
let id = setInterval(time, 100);

localStorage.setItem(key , varlue);
localStorage.getItem(key);
/// for sepcific key to remove
localStorage.removeItem(key);
// for all remove key
localStorage.clear();