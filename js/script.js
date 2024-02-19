"use strict";
const button = document.getElementById("burger-on"),
  //   mainSection = document.querySelector("main footer"),
  burgerSection = document.querySelector(".burger__body");

let buttonFlag = false;
// console.log(mainSection);
function hideFunc() {
  burgerSection.classList.toggle("hide");
}
button.onclick = function () {
  if (!buttonFlag) {
    burgerSection.classList.toggle("anim-show");
    burgerSection.classList.toggle("anim-hide");
    hideFunc();
    // burgerSection.classList.toggle("hide");
  } else {
    burgerSection.classList.toggle("anim-show");
    burgerSection.classList.toggle("anim-hide");
    setTimeout(() => {
      hideFunc();
    }, 750);
  }
  buttonFlag = !buttonFlag;

  document.querySelector("body").classList.toggle("lock");
  //   document.querySelector("footer").classList.toggle("hide");
};
