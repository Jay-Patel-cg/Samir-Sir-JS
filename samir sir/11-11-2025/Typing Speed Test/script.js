// // DOM Elements
// const textDisplay = document.querySelector('#textDisplay');
// const typingArea = document.querySelector('#typingArea');
// const timerDisplay = document.querySelector('#timer');
// const wpmDisplay = document.querySelector('#wpm');
// const accuracyDisplay = document.querySelector('#accuracy');
// const bestWPMDisplay = document.querySelector('#bestWPM');
// const startBtn = document.querySelector('#startBtn');
// const resetBtn = document.querySelector('#resetBtn');
// const timeArray = document.querySelector('.timmmee')

// // Test texts
// const testTexts = [
//     "The quick brown fox jumps over the lazy dog. Practice makes perfect when learning to type faster.",
//     "Technology has revolutionized the way we communicate and work in the modern digital era.",
//     "Typing speed is an essential skill for anyone working with computers in today's workplace."
// ];

// // Game state
// let currentText = '';
// let timeleft = 60;
// let timerInterval = null;
// let startTime = null;
// let isTestActive = false;
// let bestWPM = 0;


// function webLoad(){
//     onLoad();
//     displayContent();
// }


// function onLoad(){
//     var temp = sessionStorage.getItem('previousWpm');
//     if(temp != null){
//         bestWPM = parseInt(temp);
//     }
//     else{
//         bestWPM = 0;
//     }
// }

// function displayContent(){
//     timerDisplay.textContent = timeleft;
//     bestWPMDisplay.textContent = bestWPM;
// }


// webLoad();


// function endGame(){
//     clearInterval(timerInterval);
//     startBtn.disabled = false;
//     timeleft = 60;
//     typingArea.disabled = true;
// }


// function startGame(){
//     startBtn.disabled = true;
//     currentText =  testTexts[Math.floor(Math.random()*testTexts.length)];    // 1-> math.random , 2-> testTexts.length , 3-> math.floor , 4-> testTexts , 5-> store in currentText......
//     textDisplay.textContent = currentText;  

//     typingArea.disabled = false;
//     typingArea.value = "";
//     typingArea.focus();
//     typingArea.setAttribute('placeholder', ' "Now you are eligible to write and use the inpute box" ');


//     timerInterval = setInterval(function(){
//         timeleft--;

//         if(timeleft <= 0){
//             endGame();
//         }
//         displayContent();
//     },1000)
// }


// function updateStatus(){
//     var textContent = typingArea.value;

//     const word = textContent.trim().split(/\s+/).filter(w => w.length > 0);   // this is for wpm trim and split are there but w.length  is for if in array is there is any  word have 0 so cancle that
//     // console.log(word);
//     const minute = (Date.now() - startTime)/1000/60;        // minute -> we can also say -> elapsedTime
//     // console.log(minute); 
//     const wpm = minute > 0 ? Math.floor(word.length / minute) : 0;
//     wpmDisplay.textContent = wpm;

//     var currentScore = 0;
//     for(var i=0; i< currentText.length; i++){
//         if(currentText[i] == textContent[i]){
//             currentScore++;
//         }
//     }
//     const accuracy = (textContent.length > 0) ? Math.floor(currentScore / textContent.length *100).toFixed(2): 0;
//     accuracyDisplay.textContent = `${accuracy}%`;
// }

// //  step - 03 -> user --interact--> INput Box 
// //  highlights();
// //  function highlights(){
// //  var typed = typingAera.value;
// //  var hif=ghiligts = "";
// //  for(let i=0; i<currentText.lenght; i++){
// //   
// // }
// // }
// //   +=   ->    is sign of concatination...

// function heighlights(){
//     var typed = typingArea.value;
//     var highlightText = "";

//     for(let i=0; i<currentText.length; i++){
//         if(i <= typed.length){
//             if(currentText[i] == typed[i]){
//                 highlightText += `<span class = "correct">${currentText[i]}</span>`;
//             }
//             else{
//                 highlightText += `<span class = "incorrect">${currentText[i]}</span>`;
//             }
//         }
//         else{
//             highlightText += currentText[i];
//         }
//     }
//     textDisplay.innerHTML = highlightText;
// }




// function wordType(){
//     if(startTime == null ){
//         startTime = Date.now();   // this is in milisecond we want in Minute;
//     }
//     // console.log(startTime);
//     updateStatus();
//     heighlights();
// }

// function setTime(seconds){
//     timeleft = seconds;
//     displayContent();
// }




// // notes .. 
// // Green Flage...
// // Red Flage...
// // addEventListener('input', )   -> This will moniter whether user pressed any single key or not .....
// //  /\s+/



// startBtn.addEventListener('click', startGame);
// resetBtn.addEventListener('click',resetGame);




// Vineet





// writing backend for a typing speed game 
// DOM ELEMENTS NEEDED 

const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const timeArray = document.querySelectorAll('.time');
console.log(timeArray);
// text content to show on the html

const testTexts = [
    "The quick brown fox jumps over the lazy dog as the bright sun shines. We must all try our best to get better at typing every day",
    "Learning to type correctly using all ten fingers is the most effective way to increase your speed and accuracy over a period of time.",
    "Scientists have discovered thousands of exoplanets in recent years, working to understand their properties and potential to support life in space.",
    "A bird in the hand is worth two in the bush, so always remember to be grateful for the good things you already have.",
    "Max Joykner sneakily drove his car around every corner looking for his lost dog. He was very sad and hoped to find him soon",
    "The drops of water are too small to see. They have turned into a gas called water vapor. The air gets cooler as it rises higher.",
    "Practice makes perfect in typing. The more you work on your skills, the faster you will become. Consistency and patience are very important here."
];


//variables


let currentText = '';
let timeLeft = 60;
let timeInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;

function webLoad(){
    onLoad();
    displayContent();
}
function onLoad(){
    var temp = sessionStorage.getItem('previouswpm');
    if(temp!=null){
        bestWPM = parseInt(temp);
    } else {
        bestWPM = 0;
    }
}
function setTime(seconds){

timeLeft = seconds;
displayContent();
}
function displayContent(){
    timerDisplay.textContent = timeLeft;                  
    bestWPMDisplay.textContent = bestWPM;
}
webLoad();
function endGame(){
    clearInterval(timeInterval);
    startBtn.disabled = false;
    // timeLeft = 60;
    displayContent();
    typingArea.disabled = true;
}

function startGame(){
    startBtn.disabled = true;
    currentText = testTexts[Math.floor(Math.random()*testTexts.length)];
    textDisplay.textContent = currentText; // reflects it in html elemetn
    // update time content every second  - > by default 60 , decrement 1 by every second => setInterval -> returns id
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder','Now You Are Able To Type Here');
    timeInterval = setInterval(function(){
        timeLeft--;
        if(timeLeft<=0){
            endGame();
        }
        displayContent();
    },1000);

}
function updateStatus(){
    var textContent = typingArea.value;
    const word = textContent.trim().split(/\s+/).filter(w => w.length > 0);
    // console.log(word); regular expression used above in split
    const elapsedTime = (Date.now() - startTime)/1000/60;
    // for wpm we need it to be in minutes
    const wpm = elapsedTime > 0 ? Math.floor(word.length/elapsedTime) : 0;
    wpmDisplay.textContent = wpm;
    // check the ternary operation and also how we converted with elapsed time 
    var currentScore = 0;
    for(var i = 0 ; i<currentText.length ; i++){
        if(currentText[i] == textContent[i]){
            currentScore++;
        }
    }
    const accuracy = (textContent.length>0) ? Math.floor(currentScore/textContent.length*100).toFixed(1): 0;
    accuracyDisplay.textContent = `${accuracy}%`;
}
function Highlights(){
    var typed   = typingArea.value;
    var highlightText = '';
    for(let i = 0 ; i<currentText.length ; i++){
        if(i<=typed.length){
            if(currentText[i] == typed[i]){
                highlightText += `<span class = "correct">${currentText[i]}</span>`;
            } else {
                highlightText += `<span class = "incorrect">${currentText[i]}</span>`;
            }
        } else {
            // for showing the other text normally 
            highlightText += currentText[i];
        }
    }
    textDisplay.innerHTML = highlightText;
}
function wordType(){
    if(startTime == null){
        startTime = Date.now();
    }
    updateStatus();
    Highlights();    
}
function resetGame(){
    wpm = 0;
}
startBtn.addEventListener('click',startGame);
resetBtn.addEventListener('click',resetGame);
typingArea.addEventListener('input',wordType);  