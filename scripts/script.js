"use strict";

// create a toggle function for hamburger menu
const hamNav = document.querySelectorAll(".hamburger-menu");
const navMenu = document.getElementById("navigation-menu");
const toggledView = document.getElementById("main-ham");

const closeHam = document.getElementById("close-ham-img");

// create event listener for hamburger menu
hamNav.forEach((ham) => {
  ham.addEventListener("click", () => {
    console.log("clicked");
    toggledView.classList.toggle("show");
  });
});

// create event listener for close button
closeHam.addEventListener("click", () => {
  toggledView.classList.toggle("show");
});

// loop video every 5 seconds
const video = document.getElementById("main-video");

video.addEventListener("ended", function () {
  console.log("ended");
  setTimeout(function () {
    video.play();
  }, 4000);
});
