// Funktioner til navbar

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav_links");
  const navLinks = document.querySelectorAll(".nav_links li");

  burger.addEventListener("click", () => {
    //Toogle Nav
    nav.classList.toggle("nav-active");

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    //Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Funktion der åbner nyhedsbrevet, når den bliver klikket

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// Funktion der lukker nyhedsbrevet, når den bliver klikket

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
