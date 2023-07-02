const inputValue = document.querySelector("input");
const spanValue = document.querySelector("span");

inputValue.addEventListener("input", onInputChange);


function onInputChange (inputValue) {
  if (inputValue.currentTarget.value) {
    return (spanValue.textContent = inputValue.currentTarget.value)
  } return spanValue.textContent = "Anonymous";
};
