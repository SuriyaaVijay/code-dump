let currMoleTile;
let currPiranaTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole, 1000);
  setInterval(setPirana, 2000);
}

function getRandomNumberTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "./monty-mole.png";
  let num = getRandomNumberTile();

  if (currPiranaTile && currPiranaTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPirana() {
  if (gameOver) {
    return;
  }
  if (currPiranaTile) {
    currPiranaTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "./piranha-plant.png  ";

  let num = getRandomNumberTile();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPiranaTile = document.getElementById(num);
  currPiranaTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  }

  if (this == currPiranaTile) {
    document.getElementById("score").innerText =
      "GAME OVER :" + score.toString();
    gameOver = true;
  }
}
