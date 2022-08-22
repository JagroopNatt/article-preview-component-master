const buttons = document.querySelectorAll(".arrow-button");
console.log(buttons);

const display = document.querySelector(".active-state");
console.log(display);

const info = document.querySelector(".info");

const section = document.querySelector(".section");

buttons.forEach(
  addEventListener("click", function () {
    let width = section.offsetWidth;

    if (width < 500) {
      display.classList.toggle("active");
      info.classList.toggle("hide");
    } else {
      display.classList.toggle("active");
    }
  })
);
