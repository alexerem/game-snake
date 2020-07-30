
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
drawBoard();

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



function drawFood () {
    food.onload = function () {
        ctx.drawImage(food, foodCoord.x, foodCoord.y);
    }
}
drawFood ();