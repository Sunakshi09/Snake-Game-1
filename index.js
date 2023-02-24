let inputDir = { x: 0, y: 0 }; // Game constants and variables//
const gameOverSound = new Audio("gameover.mp3");
const foodSound = new Audio("food.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("musicsound.mp3");
let speed = 6;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 11, y: 15 }];
food = { x: 6, y: 7 };

// Game Functions //
function main(ctime) {
  window.requestAnimationFrame(main);
  //console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = ctime;
  gameEngine();
}
function isCollision(snakeArr) {
  return false;
}

function gameEngine() {
  // Step 1: Updating the Snake array (means snake) & the Food
  if (isCollision(snakeArr)) {
    gameOverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game Over. Press shift key to play again!");
    snakeArr = [{ x: 11, y: 15 }];
    musicSound.play();
    score = 0;
  }

  // If my snake eaten the food, what you have to do next, increment the score and regenerate the foodd
  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 14;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //Now its time to move the snake
  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;

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
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
