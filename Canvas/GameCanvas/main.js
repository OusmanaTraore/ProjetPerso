// Définition du canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Rayon de la balle
var ballRadius = 10;
//Dimension du canvas
var x = canvas.width / 2;
var y = canvas.height - 30;
//Déplacement élémentaire
var dx = 4;
var dy = -2;
//Dimension de la raquête
var paddleHeight = 13;
var paddleWidth = 75;
//Position  initiale de la raquete "centrée"
var paddleX = (canvas.width - paddleWidth) / 2;
//Variable pour les touches tapées
var rightPressed = false;
var leftPressed = false;
//Définition des variables pour la création de nouvelles briques
var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var gameOverNotify = document.querySelector(".game-over-notify");
var interval;
var vitesse = 1000;
//Comptage du score
var score = 0;
//Vies du joueur
var lives = 3;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
gameOverNotify.addEventListener("click", function () {
  document.location.reload();
});
//fonction pour l'évenèment lors de l'appui des touches fléchés gauche et droite
function keyDownHandler(e) {
  // if (e.key == "Right" || e.key == "ArrowRight") {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
//fonction pour l'évenèment lors du relâchement  des touches fléchés gauche et droite
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}
//fonction de détection des collisions  entre la balle et les briques
function collisionDetection() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColumnCount) {
            alert("C'est gagné, Bravo!");
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20);
}
function drawBall2() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}
//fonction pour la création de la balle
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
//Fonction pour la création de la raquete
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "purple";
  ctx.fill();
  ctx.closePath();
}
//Fonction pour la création de nouvelles briques
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        //Positionnement des nouvelles briques
        var brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        var brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();

        ctx.closePath();
      }
    }
  }
}

function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

//fonction principal de dessin et des évènements
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //afficher la balle
  drawBall();
  //afficher la raquete
  drawPaddle();
  //afficher les briques
  drawBricks();
  //activer la fonction de détection de collisions
  collisionDetection();
  //ajouter le score
  drawScore();
  //comptage des vies
  drawLives();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    drawBall2();
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    //faire rebondir la balle sur la raquete
    if (x > paddleX && x < paddleX + paddleWidth) {
      // dv += interval
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert("GAME OVER");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}
draw();
var intervall = setInterval(draw, vitesse);
