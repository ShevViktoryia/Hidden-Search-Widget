const search_container = document.querySelector(".search-container");
const input = document.querySelector(".input");
const btn = document.querySelector(".search-btn");

search_container.onclick = () => {
  search_container.classList.toggle("active");
  input.focus();
};
