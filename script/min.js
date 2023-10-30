let grid_box = document.getElementById("grid")
for(let i = 0 ; i<400; i++){
    let cell = document.createElement("div");
    cell.classList.add("cell")
    grid_box.appendChild(cell)
}