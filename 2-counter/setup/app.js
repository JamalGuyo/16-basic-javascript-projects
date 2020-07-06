// get all buttons and span
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// initial count
let count = 0;
// loop through buttons
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //   check the class attribute values of the btn
    const styles = e.currentTarget.classList;
    // change the count value based on btn selected
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // change color based on count value
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#102a41";
    }
    // change the value of the element to the new count value
    value.textContent = count;
  });
});
