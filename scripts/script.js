"use strict";

// Hamburger Menu Toggle

const mblButtonNav = document.getElementById("hamburger-menu");
const mainNav = document.querySelector("nav");

mblButtonNav.addEventListener("click", () => {
  mainNav.style.display = "flex";
});
