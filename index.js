// Game constants and variables//
let direction = { x: 0, y: 0 };
const gameOverSound = new Audio("gameover.mp3");
const foodSound = new Audio("foodeating.mp3");
const snakemoveSound = new Audio("snakemove.mp3");
const musicSound = new Audio("musicsound.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 12, y: 14 }];

// Game Functions //
function main(currenttime) {
  window.requestAnimationFrame(main);
  console.log(currenttime);
  if ((currenttime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = currenttime;
  gameEngine();
}

function gameEngine() {
  // Step 1: Updating the Snake array (means snake) & the Food
  // Step 2: I want display the Snake & the Food
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowstart = e.y;
    snakeElement.style.gridColumnstart = e.x;
    snakeElement.classList.add("food");
    board.appendChild(snakeElement);
  });
}

//logic starts from here//
window.requestAnimationFrame(main);
