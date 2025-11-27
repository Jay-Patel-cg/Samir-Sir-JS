
// DOM Elements

const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const heading = document.querySelector('h1'); // "Whack-a-Mole" heading


// Required vaeriable....

let score = 0;
let time = 30;
let bestScore = 0;
let playGame = false;
let gameId = null;
let popTimeoutId = null;
let isPaused = false;

// Create Message Display 

const messageBox = document.createElement('div');
messageBox.id = 'messageBox';
messageBox.style.textAlign = 'center';
messageBox.style.fontSize = '1.2em';
messageBox.style.fontWeight = 'bold';
messageBox.style.color = '#764ba2';
messageBox.style.marginBottom = '15px';
heading.insertAdjacentElement('afterend', messageBox);

// Create Flex Container for Pause/Reset

const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.justifyContent = 'space-between';
buttonContainer.style.gap = '10px';
buttonContainer.style.marginBottom = '20px';
startBtn.insertAdjacentElement('afterend', buttonContainer);

// Pause/Resume button

const pauseBtn = document.createElement('button');
pauseBtn.id = 'pauseBtn';
pauseBtn.className = 'start-btn';
pauseBtn.textContent = 'Pause';
pauseBtn.disabled = true;

// Reset button

const resetBtn = document.createElement('button');
resetBtn.id = 'resetBtn';
resetBtn.className = 'start-btn';
resetBtn.textContent = 'Reset';

// Add to container

buttonContainer.appendChild(pauseBtn);
buttonContainer.appendChild(resetBtn);


function showMessage(msg, color = '#764ba2') {
  messageBox.textContent = msg;
  messageBox.style.color = color;
}

function webLoad() {
  onLoad();
  displayContent();
  if (!playGame) {
    showMessage('Click Start Game To Play!!', '#667eea');
  }
}

function onLoad() {
  const temp = localStorage.getItem('highScoreMole');
  bestScore = temp != null ? Number(temp) : 0;
}

function displayContent() {
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = time;
  maxScoreDisplay.textContent = bestScore;
}

function clearTimers() {
  if (gameId) clearInterval(gameId);
  if (popTimeoutId) clearTimeout(popTimeoutId);
  gameId = null;
  popTimeoutId = null;
}

function hideAllMoles() {
  moles.forEach(m => m.classList.remove('up', 'bonked'));
}

function endGame() {
  clearTimers();
  playGame = false;
  isPaused = false;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  hideAllMoles();

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem('highScoreMole', bestScore);
    showMessage(`New Best Score! You scored ${score}!`, 'green');
  } else {
    showMessage(`Your score: ${score}`, '#ff6600');
  }

  score = 0;
  time = 30;
  displayContent();
}

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomHole() {
  return holes[Math.floor(Math.random() * holes.length)];
}

function popGame() {
  if (!playGame) return;
  const timer = randomTime(500, 1500);
  const hole = randomHole();
  const mole = hole.querySelector('.mole');

  mole.classList.add('up');
  popTimeoutId = setTimeout(() => {
    mole.classList.remove('up');
    if (playGame) popGame();
  }, timer);
}


function startGame() {
  if (playGame && !isPaused) return;

  time = 30;
  score = 0;
  playGame = true;
  isPaused = false;
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  pauseBtn.textContent = 'Pause';

  showMessage('Game Started! Whack the moles! 🐹', '#667eea');
  displayContent();
  popGame();

  gameId = setInterval(() => {
    time--;
    if (time < 0) endGame();
    displayContent();
  }, 1000);
}

function pauseGame() {
  if (!playGame || isPaused) return;
  isPaused = true;
  playGame = false;
  clearTimers();
  hideAllMoles();
  pauseBtn.textContent = 'Resume';
  showMessage('Game Paused ', '#cc6600');
}

function resumeGame() {
  if (!isPaused) return;
  isPaused = false;
  playGame = true;
  pauseBtn.textContent = 'Pause';
  showMessage('Game Resumed ', '#007b00');
  popGame();

  gameId = setInterval(() => {
    time--;
    if (time < 0) endGame();
    displayContent();
  }, 1000);
}

function resetGame() {
  clearTimers();
  playGame = false;
  isPaused = false;
  hideAllMoles();

  score = 0;
  time = 30;
  bestScore = 0;
  localStorage.setItem('highScoreMole', 0);

  startBtn.disabled = false;
  pauseBtn.disabled = true;
  pauseBtn.textContent = 'Pause';
  showMessage('Click Start Game To Play!!', '#667eea'); // after reset
  displayContent();
}

function bonk(event) {
  if (!event.isTrusted || !playGame) return;
  if (event.target.classList.contains('up')) {
    score++;
    event.target.classList.remove('up');
    event.target.classList.add('bonked');
  }
  setTimeout(() => event.target.classList.remove('bonked'), 300);
  displayContent();
}

webLoad();
moles.forEach(m => m.addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);
pauseBtn.addEventListener('click', () => (isPaused ? resumeGame() : pauseGame()));
resetBtn.addEventListener('click', resetGame);
