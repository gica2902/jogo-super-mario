const mario = document.querySelector (".mario");
const pipe = document.querySelector("pipe");
const startButton = document.queryselector(".start");
const gameOverScreen = document.querySelector("game-over");
const scoreElement = document.getElementById("score"); // Elemento de pontuação

audioStart = new Audio(".sound/audio_theme.mp3");
const gameOverSound = new Audio(".sound/game_over.mp3");

let gameStarted = false;
let score = 0;  // Variavél de pontuação

const startgame = () => {
gamestart = true
audioStart.play();
 
pipe.style.animation = "pipe-animation 1.5s infinite linear";

 startButton.style.display = "none";
 mario.style.opacity = "1";
 pipe.style.opacity = "1";
 clouds.style.opacity = "1";
}

const jump = () =>  {
   if (gameStarted) {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump")
    } ,500);
  }
}

const updateScore = () =>  {
 score+= 1; // Incrementa a pontuação
 scoreElement.textContent = score; // Atualiza o elemento HTML com a nova pontuação 
}

const loop = setInterval(() => {
 const piposition = pipe.offseleft;
 const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

 if(pipePosition => 120 && pipePosition > 0 && marioPosition < 80) {
   pipe.style.animation = "none";
   pipe.style.left = ${pipePosition}px;

   mario.style.animation = "none";
   mario.style.left = ${marioPosition}px;

  mario.src = "./img/game-over.png";
mario.style.width = "75px";
mario.style.marginLeft = "50px";
  audioStart.pause();

  gameOverSound.play();
  
 clearInterval(loop);
gameoverscreen.style.display = "flwx";
 } else if (pipeposition < 0 && gamestarted) {
  updateScore(); // Atualiza a pontuação quando o pipe sai da tela (mario passou)
pipe.style.left = ''; // Reinicia a posição do pipe
 }
}, 10);
  
  document.addEventListener("keydown",jump);

const.restartGame = () => {
 window.location.reload();
}
