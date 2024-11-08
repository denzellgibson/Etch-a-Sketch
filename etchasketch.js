const GridContainer = document.querySelector("#grid-container");
GridContainer.style.display = "flex";
GridContainer.style.flexDirection = "column";
GridContainer.style.width = "960px";
GridContainer.style.aspectRatio = "1/1";

let GridHeight = 16;
let GridWidth = 16;

function SquareGridGeneration() {
    for (let i = 1; i <= GridHeight; i++) {
        const GridRow = document.createElement("div");
        GridRow.style.display = "flex";
        GridRow.style.flex = "1";
        for (let j = 1; j <= GridWidth; j++) {
            const GridSquare = document.createElement("div");
            GridSquare.style.display = "flex";
            GridSquare.style.flex = "1";
            GridSquare.style.border = "black solid";
            GridRow.appendChild(GridSquare);
        }
        GridContainer.appendChild(GridRow);
    }
}

SquareGridGeneration();
