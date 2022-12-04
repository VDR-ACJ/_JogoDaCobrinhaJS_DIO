let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0]={
    x:8 * box,
    y:8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

function criarCobrinha(){
    for(i=0; i < snake.length;i ++){
        context.fillStyle = "green";
        //desenha a cobrinha na tela com o tamanho do pixel
        // o valor 8 de x e y para iniciar no meio da tela de 32
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();

