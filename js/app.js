//  Menu Toggle
const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Navbar Scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  header.classList.toggle("scrolled", window.scrollY > 30);
});
