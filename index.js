// set random number between 1 and 6
function getRandomNumber() {
  const max = 6;
  const min = 1;
  return Math.floor(Math.random() * max + min);
}

let randomImageSource1 = `images/dice${getRandomNumber()}.png`;
let randomImageSource2 = `images/dice${getRandomNumber()}.png`;

// get the target
let img1 = document
  .querySelector(".img1")
  .setAttribute("src", randomImageSource1);
let img2 = document
  .querySelector(".img2")
  .setAttribute("src", randomImageSource1);
