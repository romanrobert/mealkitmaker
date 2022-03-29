//Burger Menu

const nav = document.querySelector(".navigation__links");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".navigation__link");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

const contactForm = document.querySelector(".beta__form");
console.log(contactForm);

contactForm.addEventListener("submit", (e) => {
  console.log("subtmit clicked");
});
