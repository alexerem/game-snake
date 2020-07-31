
const canvas = document.getElementById("snakeboard");
const ctx = canvas.getContext("2d");

canvas.width = 450;
canvas.height = 450;
const cell = 30;

function drawBoard() {
    ctx.strokeRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i <= 15; i++) {
        for (let h = 0; h <= 8; h++) {
            if (i % 2 !== 0) {
                ctx.fillStyle = "#60a16f";
                ctx.fillRect(h*30*2, i*30, 30, 30);
                ctx.fillStyle = "#a0c9a2";
                ctx.fillRect(h*60-30,i*30,30,30);
            } else {
                ctx.fillStyle = "#60a16f";
                ctx.fillRect(h*60-30,i*30,30,30);
                ctx.fillStyle = "#a0c9a2";
                ctx.fillRect(h*30*2, i*30, 30, 30);
            }
        }
    }
}


const food = new Image();
food.src = getUrlFood();
function getUrlFood() {
    let rndNumber = Math.random();
    if (rndNumber < 0.25) {
        return "images/apple.png";
    } else if (rndNumber >= 0.25 && rndNumber < 0.5) {
        return "images/bakery.png";
    } else if (rndNumber >= 0.5 && rndNumber < 0.75) {
        return "images/carrot.png";
    } else {
        return "images/cheese.png";
    }
}
const foodCoord = {
    x: Math.floor(Math.random() * 15) * cell,
    y: Math.floor(Math.random() * 15) * cell
}
function drawFood() {
    ctx.drawImage(food, foodCoord.x, foodCoord.y);
}



let snake = [{ x: 7 * cell, y: 7 * cell}];


const snakeImgHead = new Image();
snakeImgHead.src = "images/snake-head.png";
snakeImgHead.onload = function () {
    ctx.drawImage(snakeImgHead, snake[0].x, snake[0].y);
}


document.addEventListener("keydown", where)
let whereMove;
function where(event) {
    if ((event.keyCode === 37 || event.keyCode === 65) && whereMove !== "right") {
        whereMove = "left";
    } else if ((event.keyCode === 38 || event.keyCode === 87) && whereMove !== "down") {
        whereMove = "up";
    }
    if ((event.keyCode === 39 || event.keyCode === 68) && whereMove !== "left") {
        whereMove = "right";
    } else if ((event.keyCode === 40 || event.keyCode === 83) && whereMove !== "up") {
        whereMove = "down";
    }
}


function drawGame() {

    drawBoard();
    drawFood();

    let snakeHeadX = snake[0].x;
    let snakeHeadY = snake[0].y;

    if (whereMove === "left") {snakeHeadX -= cell}
    if (whereMove === "right") {snakeHeadX += cell}
    if (whereMove === "up") {snakeHeadY -= cell}
    if (whereMove === "down") {snakeHeadY += cell}

    snake.unshift({
        x: snakeHeadX,
        y: snakeHeadY
    });

    snake.pop();

    ctx.drawImage(snakeImgHead, snake[0].x, snake[0].y);

}

let game = setInterval (drawGame, 200);

