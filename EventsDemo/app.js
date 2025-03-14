const btn2 = document.querySelector("#btn2");
btn2.onclick = function () {
  alert("Button two clicked");
};

function addition() {
  const add = 10 + 20;
  alert(`The addition is ${add}`);
}

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
  alert("button 4 clicked by suing addEvent listern method in javascript");
});
