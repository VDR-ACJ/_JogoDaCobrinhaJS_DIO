let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0]={
    x:8 * box,
    y:8 * box
}

//direção da cobrinha
let direction = "right";


//cria a tela de ação
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

//cria a cobrinha na tela de ação
function criarCobrinha(){
    for(i=0; i < snake.length;i ++){
        context.fillStyle = "green";
        //desenha a cobrinha na tela com o tamanho do pixel
        // o valor 8 de x e y para iniciar no meio da tela de 32
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//evento captar eventos do user
document.addEventListener('keydown',updateEntrada);
function updateEntrada(event){
    // 37-left 38-up 39-right 40-down 
    if(event.keyCode == 37 && direction != "right") direction ="left";
    if(event.keyCode == 38 && direction != "down") direction ="up";
    if(event.keyCode == 39 && direction != "left") direction ="right";
    if(event.keyCode == 40 && direction != "up") direction ="down";
}

function inicarJogo(){
    //quando atingir o final da tela de ação passar passa o outro lado
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0  && direction == "up") snake[0].y = 16 * box;

    
    criarBG();
    criarCobrinha(); 
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //direcoes da cobrinha
    if(direction == "right") snakeX +=box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    //remove o ultimo elemento da cobrinha
    snake.pop();

    //nova cabeca para a cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    //adiciona um pixel a frente da cobrinha fazendo com que ela se "mova"
    snake.unshift(newHead);

}

let jogo = setInterval(inicarJogo, 100);



