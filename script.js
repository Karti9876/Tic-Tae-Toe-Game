let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_but");
let newgamebtn  = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let TurnO = true ; // Player X and Player O

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame = () =>{
    TurnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const drawgame = () =>{
    msg.innerText = "Game is draw";
    msgcontainer.classList.remove("hide");
    disabledgame();

    

}
let count = "0" ;
boxes.forEach((box) => {
     box.addEventListener("click" , () =>{
           
        if(TurnO){ //Player O
            box.innerText = "O";
            TurnO = false;
            
        }
        else{ //Player X
            box.innerHTML = "X"
            TurnO = true;
        }
        box.disabled = true;
        count++;
        let draw = checkWinner()
        if(count === 9 && !draw){
            drawgame();
        }
        
        
    });
    

});
const disabledgame = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledgame();
    

}

const checkWinner = () =>{

    for(let patterns of winpatterns){
        // console.log(patterns[0] , patterns[1] ,patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerText ,
        //     boxes[patterns[1]].innerText ,
        //     boxes[patterns[2]].innerText
        //     );
        let pos_1 =boxes[patterns[0]].innerText ;
        let pos_2 = boxes[patterns[1]].innerText ;
        let pos_3 = boxes[patterns[2]].innerText ;

        if(pos_1 != "" &&  pos_2 != "" && pos_3 != ""){
            if(pos_1 === pos_2 && pos_2 === pos_3){
                console.log("Winner" , pos_2);
                showwinner(pos_1);
            }
            
        }
    }
    
}
newgamebtn.addEventListener("click" , resetgame);
reset.addEventListener("click" , resetgame);
