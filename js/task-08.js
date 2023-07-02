const button = document.querySelector("button");
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
 
  event.preventDefault();
  
  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }  let formInfo = {
      email: email.value,
      password: password.value,
    };
  
  console.log(formInfo);
  event.currentTarget.reset();
};
