const playBoard = document.getElementById("play_board");
let foodX , foodY ;
let snakeX =5 , snakeY =20 ;
let velocityX = 0 , velocityY = 0
let snakeBody = [];


const changefoodposition = ()=>{
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}


let changedirection = (e) =>{
    if(e.key === "ArrowLeft"){
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === "ArrowRight"){
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowUp"){
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowDown"){
        velocityX = 1;
        velocityY = 0;
    }
    initgame();
}


const initgame = ()=>{
    let htmlMarkup = `<div class="food" style="grid-area:${foodX}/${foodY}"></div>`;


    if(snakeX === foodX && snakeY === foodY){
        changefoodposition();
        snakeBody.push([foodX,foodY])
        console.log(snakeBody);
    }

    for(i = snakeBody.length -1 ;i>0 ;i--){
        snakeBody[i] = snakeBody[i-1]
    }
    snakeBody[0] = [snakeX,snakeY]
    snakeX += velocityX;
    snakeY += velocityY;

    for(let i = 0 ; i< snakeBody.length;i++){ 
        htmlMarkup += `<div class="head" style="grid-area:${snakeBody[i][0]}/${snakeBody[i][1]}"></div>`;
    }
    playBoard.innerHTML = htmlMarkup;
}




setInterval(initgame,500);
document.addEventListener("keydown" , changedirection)

changefoodposition();
initgame();