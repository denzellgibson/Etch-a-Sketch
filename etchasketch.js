const GridContainer = document.querySelector("#grid-container");
GridContainer.style.display = "flex";
GridContainer.style.justifyContent = 'space-evenly';
GridContainer.style.flexWrap = "wrap";
GridContainer.style.flexDirection = "column";
GridContainer.style.height = "100vh";
GridContainer.style.width = "100vw";

let GridHeight = 16;
let GridWidth = 16;

function SquareGridGeneration() {
    for (let i = 1; i <= GridHeight; i++) {
        const GridRow = document.createElement("div");
        GridRow.style.display = "flex";
        GridRow.style.flex = "1";
        GridRow.style.justifyContent = "space-evenly";
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
