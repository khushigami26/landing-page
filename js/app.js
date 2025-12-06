//navbar scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

//menu toggle
const navMenu = document.getElementById("menu");
const menuToggle = document.getElementById("menu-toggle");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
