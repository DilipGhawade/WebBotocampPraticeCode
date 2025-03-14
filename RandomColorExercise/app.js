const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function () {
  const newColor = makeRandomColor();
  h1.innerText = newColor;
  document.body.style.backgroundColor = newColor;
});

function makeRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb( ${r}, ${g}, ${b})`;
}

// const input = document.querySelector("input");
// input.addEventListener("keydown", () => {
//   console.log("KEYDOWN");
// });

// input.addEventListener("keyup", function () {
//   console.log("KEYUP");
// });

const textForm = document.querySelector("#shelterForm");
const submitButton = document.querySelector("button");
const liList = document.querySelector("#cats");
const input = document.querySelector("#catName");

textForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = input.value;
  const newLI = document.createElement("LI");
  newLI.innerText = catName;
  liList.append(newLI);
  input.value = "";
});
