console.log("Welcome to TIC TAC TOE");
let audioTurn = new Audio("pop.mp3");
let gameover = new Audio("gameover.mp3");
let drawAudio = new Audio("amongus.mp3"); 

let turn = "X";
let isgameover = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};


const checkDraw = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let isDraw = true;

  for (let i = 0; i < boxtexts.length; i++) {
    if (boxtexts[i].innerText === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw && !isgameover) {
    document.getElementsByClassName("info")[0].innerText = "It's a Draw!";
    isgameover = true;
    drawAudio.play(); 
    document.querySelector(".draw-imgbox").classList.add("show");
    return true;
  }
  return false;
};

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.getElementsByClassName("info")[0].innerText =
        boxtexts[e[0]].innerText + " Won";
      isgameover = true;
      document.querySelector(".imgbox").classList.add("show");
      gameover.play();
    }
  });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isgameover) {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();

      
      if (!isgameover) {
        if (!checkDraw()) {
          document.getElementsByClassName("info")[0].innerText =
            "Turn for " + turn;
        }
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").classList.remove("show");
});
