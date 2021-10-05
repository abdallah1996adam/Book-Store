const header = document.querySelector(".header .header-2");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.getElementById("search-btn");
const loginForm = document.querySelector(".container-form");
const btnShowLoginForm = document.getElementById("login-btn");
const btnCloseLoginForm = document.getElementById("close-btn");

//stickyNav
window.onscroll = () => {
  searchForm.classList.remove("active");
  if (window.scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

//EventListener functions
const formToogle = () => {
  searchForm.classList.toggle("active");
};
const showLoginForm = () => {
  loginForm.classList.toggle("active");
};

const closeLoginForm = () => {
  loginForm.classList.remove("active");
};

//EventListener
searchBtn.addEventListener("click", formToogle);
btnShowLoginForm.addEventListener("click", showLoginForm);
btnCloseLoginForm.addEventListener("click", closeLoginForm);
