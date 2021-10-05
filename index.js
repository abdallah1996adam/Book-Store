const header = document.querySelector(".header .header-2");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.getElementById("search-btn");

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

const formToogle = () => {
  searchForm.classList.toggle("active");
};

searchBtn.addEventListener("click", formToogle);
