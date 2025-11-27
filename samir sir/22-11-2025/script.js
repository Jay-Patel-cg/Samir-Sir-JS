let fnameInput = document.getElementById('fname');
let emailInput = document.getElementById('email');
let ageInput = document.getElementById('age');
let addressInput = document.getElementById('address');
let submitBtn = document.getElementById('submit');

// variables 
let fname;
let email;
let age;
let address;

function getdata(){
	fname = fnameInput.value;
	email = emailInput.value;
	age = ageInput.value;
	address = addressInput.value;
};
submitBtn.addEventListener('click',getdata);

