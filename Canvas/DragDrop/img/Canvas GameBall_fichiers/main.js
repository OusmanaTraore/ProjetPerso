// Définition du canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Dimension du canvas
var x = canvas.width / 2;
var y = canvas.height - 30;

// Rayon de la balle
var ballRadius = 10;

//Déplacement élémentaire
var dx = 4;
var dy = -2;
//Dimension de la raquête
var paddleHeight = 13;
var paddleWidth = 75;
//Position  initiale de la raquete "centrée"
var paddleX = (canvas.width - paddleWidth) / 2;

//vitsees initiale et vitesse élémentaire
vitesse = 20;
dv = 10;

//Variable pour les touches tapées
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//Définition des variables pour la création de nouvelles briques
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
function drawBall2() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}
function drawBall3() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}
//fonction pour la création de la balle
function drawBall() {
  drawBall2();
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
      //Positionnement des nouvelles briques
      var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r].x = 1;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}

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

//fonction principal de dessin et des évènements
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //afficher la balle
  drawBall();
  //afficher la raquete
  drawPaddle();
  //afficher les briques
  drawBricks();
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    drawBall2();
    dx = -dx;
  }
  // if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  //   drawBall3();
  //   dy = -dy;
  // }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    //faire rebondir la balle sur la raquete
    if (x > paddleX && x < paddleX + paddleWidth) {
      // dv += interval
      dy = -dy;
    } else {
      alert("GAME OVER");
      document.location.reload();
      // clearInterval(interval); // Needed for Chrome to end game
    }
  }
  if (rightPressed) {
    paddleX += 10;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 10;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }
  x += dx;
  y += dy;
}
var intervall = setInterval(draw, vitesse);
