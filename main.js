createBoard(16);
function createBoard(size) {
    const mainContainer = document.querySelector(".main-container");
    let numDivs = size * size;
    for (i = 0; i < numDivs; i++);
    let div = document.createElement("div");
    div.style.backgroundColor = "yellow";
    mainContainer.appendChild(div);
}