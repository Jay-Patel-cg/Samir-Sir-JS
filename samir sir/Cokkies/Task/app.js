var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var btn3 = document.querySelector('.btn3');
var btn4 = document.querySelector('.btn4');


btn1.addEventListener("click",()=>{
    document.cookie = "Usernmae=JayPatel; expires=Thu, 16 Dec 2025 12:00:00 UTC; Path=/";
    // alert("Save");
});

btn2.addEventListener("click", ()=>{
    document.cookie = "email=jaypatel@google.com; expires=Thu, 16 Dec 2025 12:00:00 UTC; Path=/";
    // alert("Save email");
});

btn3.addEventListener("click",()=>{
    alert(document.cookie);
});

btn4.addEventListener("click", ()=>{
    document.cookie = "email=jaypatel@google.com; expires=Thu, 16 Dec 2024 12:00:00 UTC; Path=/";
    document.cookie = "Usernmae=JayPatel; expires=Thu, 16 Dec 2024 12:00:00 UTC; Path=/";

});


var data = document.cookie.split("; ");

console.log(data);

data.forEach((element)=>{
    var arr = element.split("=");
    console.log(arr[1]);
});