// const canvas = document.querySelector(".moncanvas1");
// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 100, 40, 0, 2 * Math.PI);
// ctx.textAlign = "center";
// ctx.stroke();

const canvas = document.querySelector(".moncanvas6");
var ctx = canvas.getContext("2d");
// ctx.font = "80px Arial";
ctx.strokeText("HTML", 40, 90);
// ctx.font = "100px Comic Sans MS";
ctx.textAlign = "center";
ctx.fillStyle = "red";
ctx.fill();

function move(x, y) {
  ctx.moveTo(x, y);
}

function line(x, y) {
  ctx.lineTo(x, y);
}
function close() {
  ctx.closePath();
}

function stroke(params) {
  ctx.stroke();
}
// let close = ctx.closePath();
(function (main) {
  const moncanvas = document.querySelector(".moncanvas11");
  var ctx = moncanvas.getContext("2d");
  move(0, 15);
  setInterval(main, 1000);
  line(158, 15);
  console.log(line);
  close();
  stroke();
})();

// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.querySelector("#stage");
//   const ctx = canvas.getContext("2d");
//   const imgBg = getImage("img/zelda-bg-01.jpg");
//   const hero = new Hero(getImage("img/link.png"));

//   window.addEventListener("keydown", keyboard(hero));

//   canvas.width = 800;
//   canvas.height = 600;

//   function main() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // 1280 x 720
//     ctx.drawImage(imgBg, 160, 0, 960, 720, 0, 0, 800, 600);

//     console.log(hero.getImageRow(0));

//     hero.currentX = 0;
//     hero.currentY = 0;
//     hero.render(ctx);
//   }

//   setInterval(main, 2000);
// });

var x = 20,
  y = 60,
  z = 50,
  t = 0,
  r = 2 * Math.PI;
var c = document.querySelector(".moncanvas12");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(x, y, z, t, r);
ctx.stroke();
