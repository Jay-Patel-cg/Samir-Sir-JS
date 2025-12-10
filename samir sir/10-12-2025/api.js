let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
let out = document.querySelector('.txt');


function loadApi(){
    fetch(`https://api.mfapi.in/mf/search?q=${input.value}`)
    .then((response) => response.json())
    .then((data1) =>{
        console.log(data1)
        for(let i=0; i<=data1.length; i++){
            var p1 = document.createElement('p');
            p1.textContent = data1[i].schemeCode;
            p1.style.color = "Green";

            var p2 = document.createElement('p');
            p2.textContent = data1[i].schemeName;
            p2.style.color = "Blue";

            var div = document.createElement('div');
            div.appendChild(p1);
            div.appendChild(p2);

            out.appendChild(div);
            
        }
    })
}


btn.addEventListener("click",loadApi);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        btn.click();   
        input.value = "";
    }
});