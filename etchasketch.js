const BlockContainer = document.querySelector("#block-container");
BlockContainer.style.display = "flex";
BlockContainer.style.justifyContent = "center";
// BlockContainer.style.border = 'green solid';

const GridContainer = document.querySelector("#grid-container");
GridContainer.style.display = "flex";
GridContainer.style.flexDirection = "column";
GridContainer.style.width = "960px";
GridContainer.style.aspectRatio = "1/1";
// GridContainer.style.border = 'red solid';

function SquareGridGeneration(GridHeight, GridWidth) {
    for (let i = 1; i <= GridHeight; i++) {
        const GridRow = CreateGridRow();
        for (let j = 1; j <= GridWidth; j++) {
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
    GridSquare.style.border = "black solid";
    return GridSquare;
}

function CreateGridRow() {
    const GridRow = document.createElement("div");
    GridRow.style.display = "flex";
    GridRow.style.flex = "1";
    return GridRow;
}

SquareGridGeneration(16, 16);
