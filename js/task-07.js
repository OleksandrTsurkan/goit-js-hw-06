const inputValue = document.querySelector("input#font-size-control");

const textValue = document.querySelector("#text");

const fontSizeChange = () => {
  const size = inputValue.value;
  textValue.style.fontSize = `${size}px`; 
}

inputValue.addEventListener('input',fontSizeChange);
