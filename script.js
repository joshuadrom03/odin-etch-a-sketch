let color = "black";


document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    
    let btn_prompt = document.querySelector("#prompt");
    btn_prompt.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    });


});

function createBoard(size){
    let board = document.querySelector(".container");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.backgroundColor = "white";
    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
        
    }
}

function getSize(){
    let input = prompt("Enter your desired size of the board:")
    let message = document.querySelector("#message")
    if(input == ""){
        message.innerHTML = "Please provide a number"

    } else if(input < 0 || input > 100){
        message.innerHTML = "provide a number between 1 and 100"

    } else{
        message.innerHTML = "Have fun!!"
        return input;
    }
}

function colorDiv(){

    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    } else{
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice){

    color = colorChoice;
}

function resetBoard(){

    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white");
}