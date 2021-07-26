// set random number between 1 and 6
function getRandomNumber() {
  const max = 6;
  const min = 1;
  return Math.floor(Math.random() * max + min);
}

let randomNumber1 = getRandomNumber();
let randomNumber2 = getRandomNumber();

let randomImageSource1 = `images/dice${randomNumber1}.png`;
let randomImageSource2 = `images/dice${randomNumber2}.png`;

// get the target
let img1 = document
  .querySelector(".img1")
  .setAttribute("src", randomImageSource1);
let img2 = document
  .querySelector(".img2")
  .setAttribute("src", randomImageSource2);

let h1 = document.querySelector(".container").querySelector("h1");
console.log(h1.innerText);

// Check who is the winner
if (randomNumber1 > randomNumber2) {
  // Set title to player 1 wins!
  h1.innerText = "🏳️‍🌈" + "Player 1 wins!";
} else if (randomNumber1 == randomNumber2) {
  // Set title to draw
  h1.innerText = "Draw";
} else {
  // Set player 2 wins
  h1.innerText = "Player 2 wins!" + "🏳️‍🌈";
}
