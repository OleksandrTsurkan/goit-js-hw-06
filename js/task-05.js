const inputValue = document.querySelector("input");
const spanValue = document.querySelector("span");

inputValue.addEventListener("input", onInputChange);

function onInputChange (event) {
  spanValue.textContent = event.currentTarget.value
};
