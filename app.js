let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let turnO = true;  //prayerX,prayerO

const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

box.forEach((box) =>{
    box.addEventListener( "click", () =>{
        console.log("box was clicked");
       if(turnO === true){
         box.innerHTML ="O";
         turnO = false;
       } else {
        box.innerHTML ="X";
        turnO = true;
       }
       box.disabled = true;

       checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     box[pattern[0]].innerText,
        //     box[pattern[1]].innerText,
        //     box[pattern[2]].innerText);
         let pos1Val =   box[pattern[0]].innerText;
         let pos2Val =  box[pattern[1]].innerText;
         let pos3Val  = box[pattern[2]].innerText;

         if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val ===pos2Val && pos2Val ===pos3Val){
                console.log("winner", pos1Val);
            }

         }

    }
}