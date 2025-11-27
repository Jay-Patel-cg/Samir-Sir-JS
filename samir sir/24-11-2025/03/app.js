let parag = document.querySelector('#para');
let btnn = document.querySelector('#btn');

btnn.addEventListener('click', () => {
    if(parag.style.display === 'none'){
        parag.style.display = 'block';
        btnn.textContent = "Hide";
    } else{
        parag.style.display = 'none';
        btnn.textContent = "View";
    }
   
})

