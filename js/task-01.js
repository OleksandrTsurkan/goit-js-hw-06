const categoriesList = document.querySelector("ul#categories");
const totalElements = categoriesList.children.length;
console.log(`Number of categories: ${totalElements}`);

categoriesList.forEach((category) => {
  const categoryName = document.querySelector("h2").textContent;
  const categoryElements = document.querySelectorAll("li").length;
  return `Category : ${categoryName}`;
  console.log(`Elements: ${categoryElements}`);
});
