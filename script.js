// Funktioner til navbar

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Funktion der åbner nyhedsbrevet, når den bliver klikket

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Funktion der lukker nyhedsbrevet, når den bliver klikket

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
