let score=document.querySelector(".score")
let click=0;
let increment=document.querySelector("#plus")
let decrement=document.querySelector("#minus")
let reset=document.querySelector("#reset")

increment.addEventListener("click",() =>{
  click++;
  score.textContent=click;
});

decrement.addEventListener("click", () =>{
    click--;
    score.textContent=click;
})
reset.addEventListener("click",() =>{
    click=0;
    score.textContent=click;
});