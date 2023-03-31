document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);

    const btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function() {
        let size = getSize();
        createBoard(size)
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    
    for (i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = "yellow";
        board.insertAdjacentElement("beforeend", div);
    }
}
    // div.addEventListener("mouseover", function() {
    //     div.style.backgroundColor = "black";
    // })
    // // mainContainer.appendChild(div);


function getSize() {
    let input = prompt("What will be the size?");
    let message = document.querySelector("#message");
    if (input == "") {
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Please provide a number between 1-100"
    } else {
       message.innerHTML = "Now you can play!";
       return input;
    }
}

