const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// element to change bg
const body = document.querySelector("body");
// element to change text
const span = document.querySelector(".color");
// btn element to click
const btn = document.querySelector("#btn");
// randomly select the 6 hex values
const randHex = () => {
  const newHexArr = ["#"];
  for (let i = 0; i < 6; i++) {
    newHexArr.push(hex[Math.floor(Math.random() * hex.length)]);
  }
  return newHexArr.join("");
};
// execute fn on clicking the btn
btn.addEventListener("click", () => {
  // random hex value generated
  const newHex = randHex();
  // change body bg
  body.style.background = newHex;
  // change span text
  span.textContent = newHex;
});
