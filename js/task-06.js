const inputEl = document.querySelector('#validation-input');

const check = (event) => {
  const input = inputEl.value;
  if (input.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};

inputEl.addEventListener("blur", check);
