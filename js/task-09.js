function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const color = document.querySelector(".color");
const handlerChangeColor = () => {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  color.innerHTML = currentColor;
};
changeColorBtn.addEventListener("click", handlerChangeColor);
