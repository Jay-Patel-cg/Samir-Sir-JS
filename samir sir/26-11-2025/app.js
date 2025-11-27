let btn = document.querySelector("#btn");
// addEventListener('dblclick', function(){
//     let name1 = this.document.querySelector("#name1");
//     console.log(name1.value);
//     name1.value = "";
// });
 


// addEventListener('click',function(){
//     let name1 = this.document.querySelector("#name1");
//     console.log(name1.value);
//     name1.value = "";
// });

btn.addEventListener('dblclick',clickkk);
// Enter Click Submit...
btn.addEventListener('keypress', (event)=>{
    if(event.key == "Enter"){
        clickkk();
    }
})

name1.addEventListener('input', (event) =>{
    console.log(event.target.value);
})

function clickkk(){
    let name1 = this.document.querySelector("#name1");
    console.log(name1.value);
    name1.value = "";
}


function nameCheck(){
    let name1 = document.querySelector("#name1");
    name1 = name1.value.split("");
    console.log(name1);

    name1.forEach((data) => {
        if(data != "@" && data != "#"){
            console.log("the given character dosen't contain any special symbols " + data);
        } else{
            alert("the current character is equal to one of the given special character " + data);
        }
    })
}

btn. addEventListener('click',nameCheck);