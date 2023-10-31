let snakepos = 100;
let grid_box = document.getElementById("grid");
for(let i = 0 ; i<400; i++){
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id",i);
    grid_box.appendChild(cell);
}
document.getElementById(snakepos).classList.add("snake")

const eventHandler = (e) =>{
    document.getElementById(snakepos).classList.remove("snake")
    switch(e.key){ 
    case "ArrowUp":
        snakepos -= 20;
    break;
    case "ArrowDown":
        snakepos += 20;
    break;
    case "ArrowLeft":
        snakepos -= 1;
    break;
    case "ArrowRight":
        snakepos += 1;
    break;
    }
    document.getElementById(snakepos).classList.add("snake")
}

document.addEventListener("keydown",eventHandler)