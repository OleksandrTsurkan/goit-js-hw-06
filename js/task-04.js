let counterValue= Number(calcValue.textContent);


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
