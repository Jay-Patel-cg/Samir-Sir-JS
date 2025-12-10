let para = document.querySelector('p');
let txt = document.querySelector('.txt');
let btn = document.querySelector('.btn');



function checkApi(){
    fetch(`https://api.weatherapi.com/v1/current.json?key=bb18e6a0dd6c4395b2e62206250912&q=${txt.value}&aqi=no`)
    .then((response)=> response.json())
    .then((data1)=>{
        console.log(data1);
        // para.textContent = data1.value;
        para.textContent = JSON.stringify(data1, null, 2);
    })
}


btn.addEventListener("click",checkApi);




























// function check(){
//     try{
//     if(txt.value.length > 1) throw " GT 1 is not Allowed";

//     if(txt.value >= "A" && txt.value <= "Z") throw "Cap iss not Allowed";

//     if(txt.value >= "0" && txt.value <= "9") throw "Num is not Allowed";

//     console.log(txt.value);
//     para.textContent = txt.value;
//     para.style.color = "green";
// }
// catch(error){
//     console.log(error);
//     para.textContent = error;
//     para.style.color = "red";
// }
// finally{
//     txt.value = "";
// }
// }

// btn.addEventListener("click",check);






