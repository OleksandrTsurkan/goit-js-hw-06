const addButton = document.querySelector('button[data-action="increment"]');
const removeButton = document.querySelector('button[data-action="decrement"]');
const calcValue = document.querySelector('#value');

let counterValue= Number(calcValue.textContent);


const firstCallback = () => {
  counterValue += 1;
  return (addButton.textContent = counterValue);
};

const secondCallback = () => {
  counterValue -= 1;
  return (removeButton.textContent = counterValue);
};
addButton.addEventListener("click", firstCallback);
removeButton.addEventListener("click", secondCallback);
