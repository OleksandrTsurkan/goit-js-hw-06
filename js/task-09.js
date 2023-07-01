function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonAction = document.querySelector(".change-color");
const spanAction = document.querySelector("span");
const bodyAction = document.querySelector("body");

buttonAction.addEventListener("click", onChangeColor);

function onChangeColor () {
  const randomColor = getRandomHexColor();
  bodyAction.style.backgroundColor = randomColor;
  spanAction.textContent = `${randomColor}`;
}
