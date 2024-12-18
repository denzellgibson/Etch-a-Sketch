document.body.style.display = "flex";
document.body.style.justifyContent = "center";

const BlockContainer = document.querySelector("#block-container");
BlockContainer.style.display = "flex";
BlockContainer.style.justifyContent = "center";
BlockContainer.style.alignItems = "center";
BlockContainer.style.flexDirection = "column";
BlockContainer.style.width = "960px";

const CreateGridButton = document.createElement("button");
CreateGridButton.innerHTML = "Adjust Grid Size";
CreateGridButton.addEventListener("click", (e) => {
    let squareNumber = prompt("Please input the number of squares per side.");
    GridContainer.innerHTML = "";
    SquareGridGeneration(squareNumber);
});
BlockContainer.prepend(CreateGridButton);

const GridContainer = document.querySelector("#grid-container");
GridContainer.style.display = "flex";
GridContainer.style.flexDirection = "column";
GridContainer.style.width = "960px";
GridContainer.style.aspectRatio = "1/1";
GridContainer.style.border = 'red solid';

GridContainer.addEventListener("mouseover", (e) => {
    if (e.target.id === 'square') {
        e.target.style.background = 'red';
    }
});

function SquareGridGeneration(GridHeight) {
    for (let i = 1; i <= GridHeight; i++) {
        const GridRow = CreateGridRow();
        for (let j = 1; j <= GridHeight; j++) {
            const GridSquare = CreateSquare();
            GridRow.appendChild(GridSquare);
        }
        GridContainer.appendChild(GridRow);
    }
}

function CreateSquare() {
    const GridSquare = document.createElement("div");
    GridSquare.style.display = "flex";
    GridSquare.style.flex = "1";
    // GridSquare.style.border = "black solid";
    GridSquare.setAttribute('id', 'square');
    return GridSquare;
}

function CreateGridRow() {
    const GridRow = document.createElement("div");
    GridRow.style.display = "flex";
    GridRow.style.flex = "1";
    return GridRow;
}

SquareGridGeneration(16, 16);
