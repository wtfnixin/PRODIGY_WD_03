console.log("Welcome to TIC TAC TOE")
let audioTurn = new Audio("pop.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

    
const checkWin = () => {
    
}



let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            
        }
    })


})


