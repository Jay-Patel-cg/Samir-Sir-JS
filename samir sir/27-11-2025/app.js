var card = document.querySelector("#hoverCard");

// console.log(card);  // This Will Check If the Document Is in Js Or not

// card.addEventListener('mouseenter', () =>{
//     card.style.backgroundColor = "red";
// });


// card.addEventListener('mouseleave', () =>{
//     card.style.backgroundColor = "white";
// });


card.addEventListener('mouseover', () =>{
    card.style.backgroundColor = "green";
    card.style.color = "gold";
});


card.addEventListener('mouseout', () =>{
    card.style.backgroundColor = "white";
    card.style.color = "black";
});


// document.addEventListener('click',(event) =>{
//     console.log(event.target);
// });

// document.addEventListener('click', (event) => {
//     event.target.setAttribute("Class","Document");
//     console.log(event.target.getAttribute("class"));
// })

// document.addEventListener("mousewheel", () => {
//   console.log("Mouse wheel used!");
// });

// window.addEventListener("wheel", () => {
//   console.log("Mouse only wheel used!");
// });


// window.addEventListener("mousemove", () => {
//   console.log("Moves Mouse!");
// });


// window.addEventListener("mouseup", () => {
//   console.log("Up Mouse!");
// });


// window.addEventListener("mousedown", () => {
//   console.log("Down Mouse!");
// });


// window.addEventListener("contextmenu", () => {
//   console.log("Right Click Mouse!");
// });

// document.addEventListener("mousemove", (event) => {
//   console.log("Mouse Position X,Y :", event.clientX, event.clientY);
// });


// card.addEventListener("mousemove", (event) => {
//   console.log("Mouse Position X,Y :", event.clientX, event.clientY);
// });


// Scroll Position
// document.addEventListener("wheel", (event) => {
//   console.log("Scrolled Position :", event.deltaY);
// });



// Scroll Position
// document.addEventListener("wheel", (event) => {
//   console.log("Scrolled Position :", event.deltaX);
// });

//  this is for Y and Same Case For X  and Z....


document.addEventListener("wheel", (event) => {
    if(event.deltaY > 0){
        console.log("Down direction");
    } else if(event.deltaY < 0){
        console.log("Up direction");
    } else{
        console.log("Static direction");
    }
//   console.log("Scrolled Position :", event.deltaY);
});






