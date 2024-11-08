const GridContainer = document.querySelector("#grid-container");
GridContainer.style.display = "flex";
GridContainer.style.flexWrap = "wrap";
GridContainer.style.border = "red solid";
GridContainer.style.flexDirection = "row";

for (let i = 1; i <= 256; i++) {
    const Square = document.createElement("div");
    Square.style.width = "16px";
    Square.style.height = "16px";
    Square.style.border = "solid";
    GridContainer.appendChild(Square);
}