function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyBg = document.querySelector("body");
const colorBg = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", (evt) => {
  bodyBg.style.backgroundColor = getRandomHexColor();
  colorBg.textContent = getRandomHexColor();
});
