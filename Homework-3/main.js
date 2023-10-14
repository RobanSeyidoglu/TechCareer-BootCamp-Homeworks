// select all horse elements on the page
let allHorses = document.querySelectorAll(".horse");
// select individual horse elements
let horse1 = document.querySelector(".horse-1");
let horse2 = document.querySelector(".horse-2");
let horse3 = document.querySelector(".horse-3");
// select the finish line element and other relevant elements
let line = document.querySelector(".line");
let container = document.querySelector(".container");
let winner = document.querySelector(".winner");
// get the initial left position of each horse and the final position of the finish line
let total1 = parseFloat(getComputedStyle(horse1).left);
let total2 = parseFloat(getComputedStyle(horse2).left);
let total3 = parseFloat(getComputedStyle(horse3).left);
final = parseFloat(getComputedStyle(line).left);

// function to start the race
function start() {
  let timer = setInterval(() => {
    let randomN1 = Math.floor(Math.random() * 20);
    let randomN2 = Math.floor(Math.random() * 20);
    let randomN3 = Math.floor(Math.random() * 20);

    // update the position of each horse based on the random movement
    total1 += randomN1;
    total2 += randomN2;
    total3 += randomN3;
    horse1.style.left = total1 + "px";
    horse2.style.left = total2 + "px";
    horse3.style.left = total3 + "px";
    // check if any horse has reached or crossed the finish line
    if (
      total1 >= final - 200 ||
      total2 >= final - 200 ||
      total3 >= final - 200
    ) {
      // stop the race timer
      clearInterval(timer);
      if (total1 >= final - 200) {
        container.style.display = "none";
        winner.style.display = "block";
        winner.textContent = "The Winner Is The Black Horse";
      } else if (total2 >= final - 200) {
        container.style.display = "none";
        winner.style.display = "block";
        winner.textContent = "The Winner Is The Brown Horse";
      } else {
        container.style.display = "none";
        winner.style.display = "block";
        winner.textContent = "The Winner Is The Grey Horse";
      }
    }
  }, 50);
}
