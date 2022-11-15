var n = 0;
n = Math.random() * 6;
n = Math.floor(n) + 1;
console.log(n);

if (n === 1) {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "C:Pavan/DOM/Dicee Challenge - Starting Files/images/dice1.png"
    );
} else if (n === 2) {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice2.png"
    );
} else if (n === 3) {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice3.png"
    );
} else if (n === 4) {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice4.png"
    );
} else if (n === 5) {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice5.png"
    );
} else {
  document
    .querySelector(".img1")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice6.png"
    );
}

var m = 0;
m = Math.random() * 6;
m = Math.floor(m) + 1;
console.log(n);

if (m === 1) {
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "C:Pavan/DOM/Dicee Challenge - Starting Files/images/dice1.png"
    );
} else if (m === 2) {
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice2.png"
    );
} else if (m === 3) {
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice3.png"
    );
} else if (m === 4) {
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice4.png"
    );
} else if (m === 5) {
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice5.png"
    );
} else {
  document
    .querySelector(".img2")
    .setAttribute(
      "src",
      "C:/Pavan/DOM/Dicee Challenge - Starting Files/images/dice6.png"
    );
}

if (n === m) {
  console.log((document.querySelector("h1").innerHTML = "Draw Match"));
} else if (n > m) {
  console.log((document.querySelector("h1").innerHTML = "Player 1 Wins"));
} else {
  console.log((document.querySelector("h1").innerHTML = "Player 2 Wins"));
}
