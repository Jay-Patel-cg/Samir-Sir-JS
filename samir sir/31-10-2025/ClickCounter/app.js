// six element

var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var resetButton = document.querySelector('#resetButton');
var video = document.querySelector(".video");

var current = 0; //user  -> button clicked -> data store (click me btn)
var high = 0; // highscore -> track rakh sake....
var time1 =10; // time -> update....
var track = false;
var idTrack = null; // Timr=e Crntorl

function changeColor(){
   
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = rgbColor;
};

function loadContent(){
    dataLoad();
    displayMessage();
};

function dataLoad(){
    var temp = localStorage.getItem('highScore'); // pheli baar local storage -> return null otherwise -> data
    if(temp != null){
        high = parseInt(temp); // explicity type conversion..
    }
    else{
        high = 0;
    }
};

function displayMessage(){
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
};

function statusMsg(msg){
    statusMessage.textContent = msg;
};

function endGame(){
    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false; 

    if(current > high){
        localStorage.setItem('highScore',current);
        high = current;
        displayMessage();
        statusMsg("Your Current score is Higher than Before!!");
        video.style.display = "block";
        // video.style.zIndex = 2;
        video.play();
    }
    else{
        statusMsg("Your current score is less than before");
    }
};


function startGame(){
    track = true;
    clickButton.disabled = false;
    startButton.disabled = true;
    time1 = 10;
    current = 0;
    video.style.display = "none";
    statusMsg("Game is started......");
    idTrack = setInterval(function(){
        time1--;
        if(time1<=0){
            endGame();
        }
        displayMessage();
    },1000);
};

function clickMe(){
    changeColor();
    if(track){
        current++;
        displayMessage();
    }
};

function resetBtn(){
    localStorage.clear();
    high = 0;
    displayMessage();
}

function taskClick(){
    
}

loadContent();



startButton.addEventListener('click',startGame);

clickButton.addEventListener('click',clickMe);

resetButton.addEventListener('click',resetBtn);