const categories = document.querySelector("#categories");
const categoryItems = document.querySelectorAll(".item");
console.log("Number of categories:", `${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoriesListCount = item.querySelectorAll("ul li").length;

  console.log("Category:", `${categoryTitle}`);
  console.log("Elements:", `${categoriesListCount}`);
});
