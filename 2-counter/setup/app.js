// get all buttons and span
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// initial count
let count = 0;
// loop through buttons
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
