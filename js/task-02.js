const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("ul#ingredients");

const newLi = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.classList.add("item");
  createLi.textContent = ingredient;
  return createLi;
});
document.body.append(...newLi);
