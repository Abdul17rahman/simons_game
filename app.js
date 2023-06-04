console.log("Simon's Game");

//Welcome the js file for the game-Todo
//Select the buttons and title
const title = $("#level-title");

//Generate an empty Arrays to keep track of the game
let currentSeq = [];
let playerSeq = [];
let level = 1;

//Generate an array with colors.
const colors = ["red", "green", "blue", "yellow"];

// * Trigger the any keyboard button event to start the game.
$("body").keydown((evt) => {
  startGame();
  title.text(`Level ${level}`);
});

$(".btn").click((evt) => {
  addAnimation(evt.currentTarget.id);
  playSound(evt.currentTarget.id);
  playerSeq.push(evt.currentTarget.id);
  console.log(`Player seq is ${playerSeq}`);
  console.log(validSeq());
  if (playerSeq.length === level) {
    if (validSeq()) {
      // let sec = currentSeq.length * 1000;
      setTimeout(() => {
        startGame();
      }, 2000);
      level++;
      playerSeq = [];
      title.text(`Level ${level}`);
    } else {
      title.text(`Game Over`);
      level = 1;
      playerSeq = [];
      currentSeq = [];
    }
  } else {
    title.text(`Game Over`);
    level = 1;
    playerSeq = [];
    currentSeq = [];
  }
});

const startGame = () => {
  //Generate a random number
  const num = Math.floor(Math.random() * 4);

  let curBtn = colors[num];
  currentSeq.push(curBtn);
  addAnimation(curBtn);
  playSound(curBtn);
  console.log(`Current seq is ${currentSeq}`);
};

// const played = () => {};

const addAnimation = (el) => {
  $("." + el).addClass("pressed");
  setTimeout(() => {
    $("." + el).removeClass("pressed");
  }, 100);
};

const validSeq = () => {
  if (currentSeq.toString() === playerSeq.toString()) {
    return true;
  }
  return false;
};

const playSound = (el) => {
  switch (el) {
    case "red":
      const playRed = new Audio("sounds/red.mp3");
      playRed.play();
      break;
    case "green":
      const playGreen = new Audio("sounds/green.mp3");
      playGreen.play();
      break;
    case "blue":
      const playBlue = new Audio("sounds/blue.mp3");
      playBlue.play();
      break;
    case "yellow":
      const playYellow = new Audio("sounds/yellow.mp3");
      playYellow.play();
      break;

    default:
      break;
  }
};

//  played();
//  validSeq();
//  level++;
//  console.log(validSeq());
//  console.log(level);
