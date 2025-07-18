console.log("Welcome to TIC TAC TOE")
let audioTurn = new Audio("pop.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

    
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        
    }

    )
    
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


