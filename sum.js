const hamburguer = document.querySelector(".hamburguer");
const navLinks = document.querySelector(".navLinks");
let menuOpen = false;

hamburguer.addEventListener("click", () => {
  if (menuOpen == false) {
    navLinks.style.display ="none"
    menuOpen = false;
  }
});
