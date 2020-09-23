document.addEventListener("DOMContentLoaded", function() { // This is a listener that will execute as soon as the page is loaded.
  playNextSequence();
});

document.querySelector(".greenSquare").addEventListener("click", function() {
  greenFlash();
  match(1);
});

document.querySelector(".redSquare").addEventListener("click", function() {
  redFlash();
  match(2);
});

document.querySelector(".yellowSquare").addEventListener("click", function() {
  yellowFlash();
  match(3);
});

document.querySelector(".blueSquare").addEventListener("click", function() {
  blueFlash();
  match(4);
});

var round = 0;
var playerArray = []; // Empty array for the player's input
var simonArray = []; // Empty array for the CPU
var gameState = 0; // Determines whether the player has lost or not
var y = 0;

function match(x) {

  playerArray.push(x); // Adds the correct button press to the player's array to validate that the player has entered all of the correct colors in sequence.

  if (x == (simonArray.slice(-1)[0]) && (playerArray.length === simonArray.length)) {
    playNextSequence();
    y = 0;
  }
  else if (x == (simonArray[y])) { // Add an additional condition to check if the simonArray has reached the last object. If yes, then run the playNextSequence function. Else, just increment the y value.
    y++;
  } else {
    gameOver();
    y = 0;
  }
}

function sequenceIterator() {
  for (let i = 0; i < simonArray.length; i++) {
    setTimeout(function() { // Timeout function forces the program to wait between each flash
      switch (simonArray[i]) {
        case 1:
          greenFlash();
          break;
        case 2:
          redFlash();
          break;
        case 3:
          yellowFlash();
          break;
        case 4:
          blueFlash();
          break;
        default:
          console.log("Error");
          break;
      }
    }, i * 500);
  }
}

function playNextSequence() {

  round++;

  if (playerArray.length > 0) {document.querySelector(".gameHeader").innerHTML = "CORRECT!";

  setTimeout(function(){ document.querySelector(".gameHeader").innerHTML = "Round: " + round; }, 900);}

  playerArray = [];

  simonArray.push(Math.floor(Math.random() * 4) + 1); // Adds a random number between 1 and 4 to the array.

  setTimeout(function() {
  sequenceIterator();  }, 1000);
}


function gameOver() {
  document.body.style.backgroundColor = "red";
  document.querySelector(".gameHeader").innerHTML = "GAME OVER";
}


function greenFlash() {
  document.querySelector(".greenSquare").classList.add("flash");
  setTimeout(function() {
    document.querySelector(".greenSquare").classList.remove("flash");
  }, 300);
}

function yellowFlash() {
  document.querySelector(".yellowSquare").classList.add("flash");
  setTimeout(function() {
    document.querySelector(".yellowSquare").classList.remove("flash");
  }, 300);
}

function redFlash() {
  document.querySelector(".redSquare").classList.add("flash");
  setTimeout(function() {
    document.querySelector(".redSquare").classList.remove("flash");
  }, 300);
}

function blueFlash() {
  document.querySelector(".blueSquare").classList.add("flash");
  setTimeout(function() {
    document.querySelector(".blueSquare").classList.remove("flash");
  }, 300);
}

function test() {
  simonArray.length = 0;
  simonArray.push(1, 1, 2, 1, 1, 3, 3, 3);
}
