const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  displayScore: document.querySelector("#p1DisplayScore"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  displayScore: document.querySelector("#p2DisplayScore"),
};

const reset = document.querySelector("#reset");
const winingScoreSelect = document.querySelector("#playto");

let p1Score = 0;
let winingScore = 3;
let p2Score = 0;
let isGameOver = false;

function updateScore(player, oponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winingScore) {
      isGameOver = true;
      player.displayScore.classList.add("has-text-success");
      oponent.displayScore.classList.add("has-text-danger");
      player.button.disabled = true;
      oponent.button.disabled = true;
    }
    player.displayScore.textContent = player.score;
  }
}
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

winingScoreSelect.addEventListener("change", function () {
  winingScore = parseInt(this.value);
  resetField();
});

reset.addEventListener("click", resetField);

function resetField() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.displayScore.textContent = 0;
    p.displayScore.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
