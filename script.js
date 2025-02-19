"use strict";

let rootElm = document.documentElement;
let switchElm = document.querySelector("#switch");
let isDarkMode = readFromLocalStorage("isDarkMode");
let browserDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//matchMedia.matches tester om users pc color theme er set to light/dark
console.log("matchMedia", browserDark);
console.log("localStorage", isDarkMode);

let darkState = null;

if (isDarkMode == null) {
  darkState = browserDark;
} else {
  darkState = isDarkMode;
}

if (darkState) {
  switchElm.checked = true;
  rootElm.setAttribute("data-dark", switchElm.checked);
} else {
  switchElm.checked = false;
  rootElm.setAttribute("data-dark", switchElm.checked);
}

switchElm.addEventListener("change", function () {
  if (switchElm.checked) {
    rootElm.setAttribute("data-dark", switchElm.checked);
    saveToLocalStorage("isDarkMode", switchElm.checked);
  } else {
    rootElm.setAttribute("data-dark", switchElm.checked);
    saveToLocalStorage("isDarkMode", switchElm.checked);
  }
});

//how to toggle switch
