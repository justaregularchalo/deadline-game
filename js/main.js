// ELEMENTOS DOM Y VARIABLES

let startBtnNode = document.querySelector("#play-btn");

let startScreenNode = document.querySelector("#start-screen");

let gameScreenNode = document.querySelector("#game-screen");

let gameBoxNode = document.querySelector("#game-box");

let scoreScreenNode = document.querySelector("#score-display");

let counterScreenNode = document.querySelector("#counter-display");

let counterGameOverScreen = document.querySelector("#counter-gameover");

let restartBtnNode = document.querySelector("#restart-btn");

let gameOverBoxNode = document.querySelector("#gameover-screen");

let gameObject;

// MANAGEMENT FUNCTIONS

const startGame = () => {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameOverBoxNode.style.display = "none";

  gameObject = new Game();
  gameObject.playMusic();
  gameObject.gameLoop();
};

const resetGame = () => {
  gameBoxNode.innerHTML = `<p id="score-display"> Will to live: <span id="score">0</span></p>,<p id="counter-display">TIME: <span id="time1">0</span></p>`;

  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  gameOverBoxNode.style.display = "none";
  gameObject = new Game();
  gameObject.playMusic();
  gameObject.gameLoop();
};

//EVENT  LISTENERS
startBtnNode.addEventListener("click", startGame);
restartBtnNode.addEventListener("click", resetGame);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObject.hero.jump();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    gameObject.hero.moveLeft();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    gameObject.hero.moveRight();
  }
});
