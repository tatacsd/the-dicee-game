// set random number between 1 and 6
function getRandomNumber() {
  const max = 6;
  const min = 1;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

let img1 = `dice${getRandomNumber()}.png`;
let img2 = `dice${getRandomNumber()}.png`;

console.log(img1);
console.log(img2);
