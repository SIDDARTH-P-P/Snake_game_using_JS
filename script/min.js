const playBoard = document.getElementById("play_board");
const point = document.getElementById("score");
const highScore = document.getElementById("highScore");
let gameover = false; 
let foodX , foodY ;
let snakeX =5 , snakeY =20 ;
let velocityX = 0 , velocityY = 0
let snakeBody = [];
let setIntervalid;
let score = 0;
let highscore = localStorage.getItem("high-score") || 0 ;


const changefoodposition = ()=>{
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}


let changedirection = (e) =>{
    if(e.key === "ArrowLeft" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }else if(e.key === "ArrowRight" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if(e.key === "ArrowUp" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }else if(e.key === "ArrowDown" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }
    initgame();
}

let handlegameover = ()=>{
    clearInterval(setIntervalid);
    alert("Game over! Press ok to replay....");
    location.reload()

}

const initgame = ()=>{
    let htmlMarkup = `<div class="food" style="grid-area:${foodX}/${foodY}"></div>`;
    highScore.innerText = `High score : ${highscore}`

    if(snakeX === foodX && snakeY === foodY){
        changefoodposition();
        snakeBody.push([foodX,foodY])
        console.log(snakeBody);
        score ++ ;
        highscore = score >= highscore ? score : highscore;
        localStorage.setItem("high-score",highscore)
        point.innerText = `Score : ${score}`
        highScore.innerText = `High score : ${highscore}`
    }

    for(i = snakeBody.length -1 ;i>0 ;i--){
        snakeBody[i] = snakeBody[i-1]
    }
    snakeBody[0] = [snakeX,snakeY]
    snakeX += velocityX;
    snakeY += velocityY;

    if(gameover) return handlegameover();

    if(snakeX <= 0 || snakeX >30 || snakeY <= 0 || snakeY >30){
        gameover=true;
    }
    for(let i = 0 ; i< snakeBody.length;i++){ 
        htmlMarkup += `<div class="head" style="grid-area:${snakeBody[i][0]}/${snakeBody[i][1]}"></div>`;

        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0] ){
            gameover = true;
        }
    }
    playBoard.innerHTML = htmlMarkup;
}




 setIntervalid = setInterval(initgame,500);
document.addEventListener("keydown" , changedirection)

changefoodposition();
initgame();