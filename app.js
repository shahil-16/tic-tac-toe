let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  // true for O's turn, false for X's turn
let movesCount = 0;  // track the number of moves made

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    movesCount = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") { // Prevent overwriting a filled box
            if (turnO === true) {
                box.innerHTML = "O";
                turnO = false;
            } else {
                box.innerHTML = "X";
                turnO = true;
            }
            box.disabled = true;
            movesCount++;
            checkWinner();
        }
    });
});

const disableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = true;
    }
};

const enableBoxes = () => {
    for (let boxes of box) {
        boxes.disabled = false;
        boxes.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    // Check for a winner
    for (let pattern of winPatterns) {
        let pos1Val = box[pattern[0]].innerText;
        let pos2Val = box[pattern[1]].innerText;
        let pos3Val = box[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);  // If a winner is found, show winner and stop the function
                return;
            }
        }
    }

    // Check if the game is a draw
    if (movesCount === 9) { // All boxes are filled
        showDraw();
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
