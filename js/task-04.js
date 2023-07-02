const addButton = document.querySelector('button[data-action="increment"]');
const removeButton = document.querySelector('button[data-action="decrement"]');
const calcValue = document.querySelector('span');
let counterValue = Number(calcValue.textContent);

const firstCallback = () => {
  counterValue += 1;
  return (calcValue.textContent = counterValue);
};

const secondCallback = () => {
  counterValue -= 1;
  return (calcValue.textContent = counterValue);
};
addButton.addEventListener("click", firstCallback);
removeButton.addEventListener("click", secondCallback);
