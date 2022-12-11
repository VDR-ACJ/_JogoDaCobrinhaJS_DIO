let canvas = document.getElementById("snake");
let score = document.getElementById("score");
let level = document.getElementById("level");
var countscore = 0;
var levelPadrao = 200;
var countLevel = 0;
//var levelPadrao = 100;


let context = canvas.getContext("2d");
//let box = 32;
let box = 16 ;
let snake = [];
let corTela = "#b2a103";
let corTelaDesenho ="#343300";
let corTelaFood = "#606404";
snake[0]={
    x:8 * box,
    y:8 * box
}

//direção da cobrinha
let direction = "right";

//gera uma posicao aleatoria para a comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//cria a tela de ação
function criarBG(){
    context.fillStyle = corTela;
    context.fillRect(0, 0, 16 * box, 16 * box); 
}

//cria a cobrinha na tela de ação
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = corTelaDesenho;
        //desenha a cobrinha na tela com o tamanho do pixel
        // o valor 8 de x e y para iniciar no meio da tela de 32
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
function drawFood(){
    context.fillStyle = corTelaFood;
    context.fillRect (food.x, food.y, box, box);
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
document.getElementById("up").addEventListener('click',moveup);
function moveup() {
    if(direction != "down") direction ="up";
}
document.getElementById("down").addEventListener('click',movedown);
function movedown() {
    if(direction != "up") direction ="down";
}
document.getElementById("left").addEventListener('click',moveleft);
function moveleft() {
    if(direction != "right") direction ="left";
}
document.getElementById("right").addEventListener('click',moveright);
function moveright() {
    if(direction != "left") direction ="right";
}



function inicarJogo(){

    //quando atingir o final da tela de ação passar passa o outro lado
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0  && direction == "up") snake[0].y = 16 * box;

    //verifica se ha contato com o co proprio corpo
    for(i=1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }
    
    criarBG();
    criarCobrinha(); 
    drawFood();
    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //direcoes da cobrinha
    if(direction == "right") snakeX +=box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX !=food.x || snakeY != food.y){
    //remove o ultimo elemento da cobrinha
    snake.pop();
    
    }
    else{
        food.x =Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math. floor(Math.random() * 15 + 1) * box;
    }   

    score.innerHTML= snake.length;
    //nova cabeca para a cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    //adiciona um pixel a frente da cobrinha fazendo com que ela se "mova"
    snake.unshift(newHead);

}

let jogo = setInterval(inicarJogo, levelPadrao);


//levels

function levelup() {
    levelPadrao=levelPadrao+100;
    countLevel = countLevel + 1;
    level.innerHTML= countLevel;

    jogo = setInterval(inicarJogo, levelPadrao);
}

