const navCloseEl = document.querySelector(".nav__close");
const navIconEl = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navbgOverlay = document.querySelector(".nav__bgOverlay");

const navOpen = () => {
  navList.classList.add("show");
  navbgOverlay.classList.add("active");
  document.body.style =
    "visibility:visible;height:100vh;width:100vw;overflow:hidden;";
};
const navClose = () => {
  navList.classList.remove("show");
  navbgOverlay.classList.remove("active");
  document.body.style =
    "visibility:visible; height:initial;width:100%;overflow:hidden;";
};
navIconEl.addEventListener("click",navOpen);
navCloseEl.addEventListener("click", navClose);
navbgOverlay.addEventListener("click", navClose)