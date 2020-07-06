const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// select the element to change its bg
const body = document.querySelector("body");
// select the span
const span = document.querySelector(".color");
// select button element
const btn = document.querySelector("#btn");
// generate random index of the array
const randIdx = () => Math.floor(Math.random() * colors.length);
// check button click event
btn.addEventListener("click", () => {
  // change the background color
  const selectedColor = colors[randIdx()];
  body.style.background = selectedColor;
  span.textContent = selectedColor;
});
