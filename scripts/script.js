const button = document.querySelector("#btn");
button.style.backgroundColor = 'green'
button.addEventListener("click", (e) => {
  e.preventDefault();
  alert('thanku')
});
const inputSelect = document.querySelector("#search-text");
inputSelect.addEventListener("input", (e) => {
  e.preventDefault();
  inputSelect.innerText = "Hello World";
 
});


/*
const headerTitle = document.querySelector(".header__title");
console.log("title", headerTitle);
const headerSubtitle = document.querySelector(".header__subtitle");
console.log("subtitle", headerSubtitle);
const showUnfinished = document.querySelector("#show-unfinished");
console.log("label unfinished", showUnfinished);
button.style.backgroundColor = "green";
*/






