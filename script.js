const button = document.getElementById("header-button");
const displayTime = document.getElementById("click-time");

let time = 0;

button.addEventListener("click", () => {
  time++;
  displayTime.textContent = time;
});
