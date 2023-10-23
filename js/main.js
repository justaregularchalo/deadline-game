// ELEMENTOS DOM Y VARIABLES

let startBtnNode = document.querySelector("#play-btn");

let startScreenNode = document.querySelector("#start-screen");

let gameScreenNode = document.querySelector("#game-screen");

let gameBoxNode = document.querySelector("#game-box");

let gameOverBoxNode = document.querySelector("#gameover-screen");

let gameObject;

// MANAGEMENT FUNCTIONS

const startGame = () => {
  startScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

  gameObject = new Game();
  gameObject.gameLoop();
};

//EVENT  LISTENERS
startBtnNode.addEventListener("click", startGame);


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




