var btn = document.querySelector('.btn');
var card = document.querySelector(".card");
var count = 0;
var input = document.querySelector(".text");
var p1 = document.querySelector('p');
var arr = [10,20,30,40];
var show = document.querySelector('h2');

// function loadApi(){
//     var txt = parseInt(input.value);
//     console.log(typeof(txt));
//     try{
//         if(txt >= 4) throw "Such index is not present";
//         console.log(arr[txt]);
//     }
//     catch(error){
//         console.log("User defined error is -> " + error);
//         p1.textContent = error;
        
//     }
//     finally{
//         console.log("Finally block has been executed");
//         // btn.style.backgroundColor = "green";
//         show.textContent = arr[txt];
//     }
// }



function cardMaker(data1){
    var img = document.createElement('img');
    img.setAttribute("src",data1.strMealThumb);
    console.log(img);

    var p1 = document.createElement('p');
    p1.textContent = `Meal Name : ${++count} : ${data1.strMeal }`;
    console.log(p1);

    var p2 = document.createElement('p');
    p2.textContent = data1.strInstructions;
    console.log(p2);
    
    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
}


function loadApi(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${input.value}`)
    .then((response)=>response.json())
    .then((data1)=>{
        console.log(data1.meals)
        for(let i=0; i<=23; i++){
            setTimeout(cardMaker(data1.meals[i]),i*2000)
        }
    })
    .catch((error)=>{
        console.log("Got an error");
    })
}

55
btn.addEventListener("click",loadApi);