const swapBtn = document.querySelector(".swapBtn");
const body = document.querySelector("body");

swapBtn.addEventListener("click", () => {
  body.classList.toggle("black");
});
