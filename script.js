console.log("Welcome to the Game");
let boxT = document.getElementsByClassName("text");
let turn = "X";

// Audio Effects
let clicked = new Audio('./cartoon-jump-6462.mp3');
let gameOver = new Audio('moye-moye.mp3');
// changing the turns
const changeTurn = () =>{
    return turn === "X"? "O": "X"
}

// cheking Win
const checkWin =()=>{
   
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ];
    win.forEach(e => {
        
        if (
            boxT[e[0]].innerText === boxT[e[1]].innerText &&
            boxT[e[1]].innerText === boxT[e[2]].innerText &&
            boxT[e[0]].innerText !== ''
        ) {
            document.getElementsByClassName("info")[0].innerHTML =
                boxT[e[0]].innerText + ' won !!';
                document.getElementsByClassName("game-img")[0].style.display = "block";
                gameOver.play();
                const whoLost = ()=>{
                    console.log(boxT[e[0]]);
                    if (boxT[e[0]].innerText === 'X'){
                        document.getElementById("ab").innerHTML = "O lost !!" 
                    }else{
                        document.getElementById("ab").innerHTML = "X lost !!" 
                    }
                };
                whoLost();
        }
    });
}
// Game logic
let boxes = document.getElementsByClassName("tbox");
Array.from(boxes).forEach(element=>{
   let boxText = element.getElementsByClassName("text")[0];
   element.addEventListener('click', ()=>{
    if(boxText.innerText === ''){
        boxText.innerText = turn;
       turn = changeTurn();
        document.getElementById("turn").innerText = turn;
        
        clicked.play();
        checkWin();
    }
   })
})