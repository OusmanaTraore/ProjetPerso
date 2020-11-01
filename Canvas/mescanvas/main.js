const canvas = document.querySelector("#myCanvas1");
var cxt = canvas.getContext("2d");
// Dessin de rectangle rouge
cxt.fillStyle = "#FF0000";
cxt.fillRect(0, 0, 200, 100);

//Dessin de ligne oblique
cxt.moveTo(0, 0);
cxt.lineTo(200, 100);
cxt.stroke();

//Dessin de cercle
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100, 100, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 250, 50);
grd.addColorStop(0, "red");
grd.addColorStop(0.1, "black");
grd.addColorStop(0.2, "purple");
grd.addColorStop(0.3, "green");
grd.addColorStop(0.4, "white");
grd.addColorStop(0.5, "yellow");
grd.addColorStop(0.6, "white");
grd.addColorStop(0.7, "blue");
grd.addColorStop(0.8, "orange");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);

//Filltext
var canvas3 = document.querySelector("#myCanvas3");
var cnv3 = canvas3.getContext("2d");
cnv3.font = "30px Arial";
cnv3.strokeText("Hello World", 10, 50);
ctx.font = "30px Comic Sans MS";
// ctx.fillStyle = "red";
ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width / 2, canvas.height / 2);
// cnv3.fillText("Hello World", 50, 40);
var canvas4 = document.querySelector("#myCanvas4");
var ctx = canvas4.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(10, 25);
// ctx.arc(02, 20, 40, 0, 2 * Math.PI);
ctx.stroke();
