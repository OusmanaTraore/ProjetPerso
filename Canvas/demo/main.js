//Initialize
const canvas = document.querySelector("#stage");
const context = canvas.getContext("2d");

//Paramétrer le Canvas
canvas.width = 800;
canvas.height = 600;
canvas.style.backgroundColor = "#ccc";

//Changer la couleur
context.fillStyle = "orangered";
context.strockeStyle = "#000";
context.linewidth = 4;

//Déssiner le rectangle
context.fillRect(0, 0, 400, 300);
// context.strockeRect(2, 2, 400, 300);

context.fillRect(400, 300, 400, 300);

context.fillStyle = "blue";

//Dessiner un Cercle
context.arc(400, 300, 100, 0, Math.PI);
context.fill();
