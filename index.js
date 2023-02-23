// Game constants and variables//
let direction = { x: 0, y: 0 };
const gameOverSound = new Audio("gameover.mp3");
const foodSound = new Audio("foodeating.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("musicsound.mp3");
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 12, y: 15 }];
food = { x: 7, y: 8 };

// Game Functions //
function main(currenttime) {
  window.requestAnimationFrame(main);
  //console.log(currenttime);
  if ((currenttime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = currenttime;
  gameEngine();
}

function gameEngine() {
  // Step 1: Updating the Snake array (means snake) & the Food
  // Step 2: I want display the Snake & the Food
  // Step 3: I want display the Snake
  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowstart = e.y;
    snakeElement.style.gridColumnstart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    board.appendChild(snakeElement);
  });
  //display the food
  foodElement = document.createElement("div");
  foodElement.style.gridRowstart = food.y;
  foodElement.style.gridColumnstart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

//logic starts from here//
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; //game starts from here
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;

      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      break;

    default:
      break;
  }
});
